import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, projectType, deadline, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Chybí povinné pole' },
        { status: 400 }
      )
    }

    // Map project type values to labels
    const projectTypeLabels: Record<string, string> = {
      'tiskova-data': 'Tisková data',
      'katalogy-tiskoviny': 'Katalogy a tiskoviny',
      'personifikace': 'Personifikace',
      'vyroba-realizace': 'Výroba a realizace',
      'foto-video': 'Foto a video',
      'jine': 'Jiné',
    }

    const projectTypeLabel = projectType ? projectTypeLabels[projectType] || projectType : 'Nespecifikováno'

    console.log('[v0] Attempting to send email with config:', {
      from: 'poptavka@mail.grafik.made.cz',
      replyTo: email,
      to: 'jirdokoupil@gmail.com',
      hasApiKey: !!process.env.RESEND_API_KEY,
      apiKeyLength: process.env.RESEND_API_KEY?.length || 0
    })

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: 'Grafik Made <poptavka@mail.grafik.made.cz>',
      replyTo: email,
      to: 'jirdokoupil@gmail.com',
      subject: `Nová poptávka od ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                padding: 30px;
                border-radius: 10px 10px 0 0;
                text-align: center;
              }
              .header h1 {
                color: white;
                margin: 0;
                font-size: 24px;
              }
              .content {
                background: #f8f9fa;
                padding: 30px;
                border-radius: 0 0 10px 10px;
              }
              .field {
                margin-bottom: 20px;
                background: white;
                padding: 15px;
                border-radius: 8px;
                border-left: 4px solid #667eea;
              }
              .field-label {
                font-weight: 600;
                color: #667eea;
                margin-bottom: 5px;
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
              }
              .field-value {
                color: #333;
                font-size: 16px;
              }
              .message-box {
                background: white;
                padding: 20px;
                border-radius: 8px;
                border: 1px solid #e1e8ed;
                margin-top: 10px;
                white-space: pre-wrap;
                font-size: 15px;
                line-height: 1.6;
              }
              .footer {
                margin-top: 30px;
                text-align: center;
                color: #6c757d;
                font-size: 14px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>📧 Nová poptávka</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="field-label">Jméno a firma</div>
                <div class="field-value">${name}</div>
              </div>
              
              <div class="field">
                <div class="field-label">E-mail</div>
                <div class="field-value"><a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a></div>
              </div>
              
              ${phone ? `
              <div class="field">
                <div class="field-label">Telefon</div>
                <div class="field-value"><a href="tel:${phone}" style="color: #667eea; text-decoration: none;">${phone}</a></div>
              </div>
              ` : ''}
              
              <div class="field">
                <div class="field-label">Typ zakázky</div>
                <div class="field-value">${projectTypeLabel}</div>
              </div>
              
              ${deadline ? `
              <div class="field">
                <div class="field-label">Termín</div>
                <div class="field-value">${deadline}</div>
              </div>
              ` : ''}
              
              <div class="field">
                <div class="field-label">Zpráva</div>
                <div class="message-box">${message}</div>
              </div>
            </div>
            
            <div class="footer">
              <p>Tato zpráva byla odeslána z kontaktního formuláře na grafik.made.cz</p>
            </div>
          </body>
        </html>
      `,
      // Plain text fallback
      text: `
Nová poptávka od ${name}

Jméno a firma: ${name}
E-mail: ${email}
${phone ? `Telefon: ${phone}` : ''}
Typ zakázky: ${projectTypeLabel}
${deadline ? `Termín: ${deadline}` : ''}

Zpráva:
${message}

---
Tato zpráva byla odeslána z kontaktního formuláře na grafik.made.cz
      `.trim(),
    })

    if (error) {
      console.error('[v0] Resend error details:', {
        message: error.message,
        name: error.name,
        fullError: JSON.stringify(error, null, 2)
      })
      return NextResponse.json(
        { error: 'Nepodařilo se odeslat e-mail', details: error.message },
        { status: 500 }
      )
    }

    console.log('[v0] Email sent successfully:', {
      id: data?.id,
      from: data?.from,
      to: data?.to
    })
    return NextResponse.json({ success: true, id: data?.id })
  } catch (error) {
    console.error('[v0] Error sending email:', {
      error,
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    })
    return NextResponse.json(
      { 
        error: 'Došlo k chybě při odesílání e-mailu',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
