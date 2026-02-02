'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export interface ContactFormData {
  name: string
  email: string
  phone: string
  projectType: string
  deadline: string
  message: string
}

export async function sendContactEmail(data: ContactFormData) {
  try {
    const { error } = await resend.emails.send({
      from: 'Grafik Made <poptavka@mail.grafik-made.cz>',
      to: 'poptavka@mail.grafik-made.cz',
      replyTo: data.email,
      subject: `Nová poptávka: ${data.projectType || 'Nespecifikováno'}`,
      html: `
        <h2>Nová poptávka z webu</h2>
        
        <h3>Kontaktní údaje</h3>
        <p><strong>Jméno a firma:</strong> ${data.name}</p>
        <p><strong>E-mail:</strong> ${data.email}</p>
        ${data.phone ? `<p><strong>Telefon:</strong> ${data.phone}</p>` : ''}
        
        <h3>Informace o zakázce</h3>
        ${data.projectType ? `<p><strong>Typ zakázky:</strong> ${data.projectType}</p>` : ''}
        ${data.deadline ? `<p><strong>Termín:</strong> ${data.deadline}</p>` : ''}
        
        <h3>Zpráva</h3>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
      `,
    })

    if (error) {
      console.error('[v0] Error sending email:', error)
      return { success: false, error: error.message }
    }

    return { success: true }
  } catch (error) {
    console.error('[v0] Error in sendContactEmail:', error)
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Nastala chyba při odesílání e-mailu' 
    }
  }
}
