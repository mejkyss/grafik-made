# AWS Lambda Resend Contact Endpoint

This guide uses a plain Node.js Lambda (no dependencies) that calls the Resend REST API. It’s designed to replace the Next.js `/api/send-email` route so the site can stay on GitHub Pages.

## 1. Create the Lambda

1. Open AWS Lambda and click **Create function**.
1. Choose **Author from scratch**.
1. Name: `grafik-made-contact`.
1. Runtime: **Node.js 18.x**.
1. Create the function.

## 2. Add environment variables

In **Configuration → Environment variables**, add:

- `RESEND_API_KEY`: your Resend API key
- `RESEND_FROM`: verified sender, e.g. `Grafik Made <poptavka@mail.grafik.made.cz>`
- `RESEND_TO`: destination email, e.g. `jirdokoupil@gmail.com`
- `ALLOWED_ORIGIN`: your site origin, e.g. `https://grafik.made.cz`

## 3. Paste the handler code

1. In the **Code** tab, replace the default handler with the contents of:
   - `lambda/resend-contact-handler.mjs`
1. In **Runtime settings**, set handler to:
   - `resend-contact-handler.handler`
1. Click **Deploy**.

## 4. Expose the function

You can use **Function URL** (simpler) or **API Gateway**.

### Option A: Function URL

1. Go to **Configuration → Function URL**.
1. Create a Function URL.
1. Auth type: **NONE**.
1. Enable **CORS**.
1. Allowed origin: your site origin.
1. Allowed methods: `POST`.
1. Allowed headers: `Content-Type`.
1. Save the Function URL.

### Option B: API Gateway (if you need more control)

1. Create an HTTP API.
1. Add a route `POST /send-email`.
1. Attach this Lambda.
1. Enable CORS for your site origin.

## 5. Update the frontend

Open `components/contact/contact-form.tsx` and replace the fetch URL:

```ts
const response = await fetch("https://YOUR_FUNCTION_URL", {
```

If you use API Gateway, the URL will look like:

```ts
const response = await fetch("https://YOUR_API_ID.execute-api.REGION.amazonaws.com/send-email", {
```

## 6. Remove Next.js API routes (optional but recommended)

Since GitHub Pages can’t run API routes, remove:

- `app/api/send-email/route.ts`
- `app/api/test-resend/route.ts`

## 7. Quick test

Use `curl` to verify:

```bash
curl -X POST "https://YOUR_FUNCTION_URL" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test",
    "email": "test@example.com",
    "phone": "",
    "projectType": "tiskova-data",
    "deadline": "",
    "message": "Hello from Lambda"
  }'
```

Expected response:

```json
{ "status": "success", "emailId": "..." }
```
