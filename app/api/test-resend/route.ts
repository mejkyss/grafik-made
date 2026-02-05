import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function GET() {
  try {
    // Check if API key exists
    const hasApiKey = !!process.env.RESEND_API_KEY
    const apiKeyPrefix = process.env.RESEND_API_KEY?.substring(0, 7) || 'missing'
    
    if (!hasApiKey) {
      return NextResponse.json({
        status: 'error',
        message: 'RESEND_API_KEY is not set',
        hasApiKey: false,
      })
    }

    // Try to send a test email
    console.log('[v0] Testing Resend configuration...')
    
    const { data, error } = await resend.emails.send({
      from: 'Grafik Made <poptavka@mail.grafik.made.cz>',
      to: 'jirdokoupil@gmail.com',
      subject: 'Test email from Grafik Made',
      html: '<p>This is a test email to verify Resend configuration.</p>',
    })

    if (error) {
      console.error('[v0] Resend test failed:', error)
      return NextResponse.json({
        status: 'error',
        message: 'Failed to send test email',
        hasApiKey: true,
        apiKeyPrefix,
        error: {
          message: error.message,
          name: error.name,
        },
      }, { status: 500 })
    }

    console.log('[v0] Resend test successful:', data)
    
    return NextResponse.json({
      status: 'success',
      message: 'Test email sent successfully',
      hasApiKey: true,
      apiKeyPrefix,
      emailId: data?.id,
    })
  } catch (error) {
    console.error('[v0] Test endpoint error:', error)
    return NextResponse.json({
      status: 'error',
      message: error instanceof Error ? error.message : 'Unknown error',
      hasApiKey: !!process.env.RESEND_API_KEY,
    }, { status: 500 })
  }
}
