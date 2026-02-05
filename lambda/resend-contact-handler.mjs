const RESEND_API_URL = "https://api.resend.com/emails"

const jsonResponse = (statusCode, payload, origin) => ({
  statusCode,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": origin || "*",
    "Access-Control-Allow-Methods": "POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  },
  body: JSON.stringify(payload),
})

const normalizeString = (value) => (typeof value === "string" ? value.trim() : "")

const buildEmailHtml = (data) => {
  const rows = [
    ["Jméno a firma", data.name],
    ["E-mail", data.email],
    ["Telefon", data.phone || "Neuvedeno"],
    ["Typ zakázky", data.projectType || "Neuvedeno"],
    ["Termín", data.deadline || "Neuvedeno"],
    ["Zpráva", data.message],
  ]

  const escape = (value) =>
    String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;")

  const rowHtml = rows
    .map(([label, value]) => {
      return `<tr><td style="padding:6px 10px;font-weight:600;">${escape(
        label
      )}</td><td style="padding:6px 10px;">${escape(value)}</td></tr>`
    })
    .join("")

  return `
    <div style="font-family:Arial,sans-serif;">
      <h2>Nová poptávka z formuláře</h2>
      <table style="border-collapse:collapse;border:1px solid #ddd;">
        ${rowHtml}
      </table>
    </div>
  `
}

export const handler = async (event) => {
  const origin = event.headers?.origin || event.headers?.Origin || "*"

  if (event.httpMethod === "OPTIONS") {
    return jsonResponse(204, null, origin)
  }

  if (event.httpMethod && event.httpMethod !== "POST") {
    return jsonResponse(405, { error: "Method not allowed" }, origin)
  }

  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.RESEND_FROM || "Grafik Made <no-reply@grafik.made.cz>"
  const to = process.env.RESEND_TO || "jirdokoupil@gmail.com"

  if (!apiKey) {
    return jsonResponse(500, { error: "RESEND_API_KEY is not set" }, origin)
  }

  let payload
  try {
    payload = event.body ? JSON.parse(event.body) : {}
  } catch {
    return jsonResponse(400, { error: "Invalid JSON body" }, origin)
  }

  const data = {
    name: normalizeString(payload.name),
    email: normalizeString(payload.email),
    phone: normalizeString(payload.phone),
    projectType: normalizeString(payload.projectType),
    deadline: normalizeString(payload.deadline),
    message: normalizeString(payload.message),
  }

  if (!data.name || !data.email || !data.message) {
    return jsonResponse(
      400,
      { error: "Missing required fields: name, email, message" },
      origin
    )
  }

  const emailPayload = {
    from,
    to: [to],
    subject: "Nová poptávka z grafik.made.cz",
    reply_to: data.email,
    html: buildEmailHtml(data),
  }

  try {
    const response = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailPayload),
    })

    const result = await response.json()

    if (!response.ok) {
      return jsonResponse(
        500,
        {
          error: "Failed to send email",
          details: result,
        },
        origin
      )
    }

    return jsonResponse(
      200,
      { status: "success", emailId: result.id || null },
      origin
    )
  } catch (error) {
    return jsonResponse(
      500,
      { error: error instanceof Error ? error.message : "Unknown error" },
      origin
    )
  }
}
