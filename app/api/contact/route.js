import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  try {
    const { name, email, company, message } = await request.json()

    if (!name || !email || !message) {
      return Response.json(
        { error: 'Navn, e-mail og besked er påkrævet.' },
        { status: 400 }
      )
    }

    await resend.emails.send({
      from: 'Kontaktformular <kontakt@digitalvaekstdanmark.dk>',
      to: 'kontakt@digitalvaekstdanmark.dk',
      replyTo: email,
      subject: `Ny henvendelse fra ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f7f5f0; border-radius: 12px;">
          <h2 style="color: #0B1D3A; font-size: 22px; margin-bottom: 24px;">Ny henvendelse fra hjemmesiden</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #E4E1D9; color: #5A6880; width: 120px; font-size: 14px;">Navn</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #E4E1D9; color: #0B1D3A; font-weight: 500;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #E4E1D9; color: #5A6880; font-size: 14px;">E-mail</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #E4E1D9; color: #0B1D3A; font-weight: 500;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #E4E1D9; color: #5A6880; font-size: 14px;">Virksomhed</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #E4E1D9; color: #0B1D3A; font-weight: 500;">${company || 'Ikke angivet'}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; color: #5A6880; font-size: 14px; vertical-align: top; padding-top: 16px;">Besked</td>
              <td style="padding: 12px 0; color: #0B1D3A; padding-top: 16px; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</td>
            </tr>
          </table>
          <div style="margin-top: 32px; padding: 16px; background: #EBF1FE; border-radius: 8px; font-size: 13px; color: #1A6BF0;">
            Du kan svare direkte på denne e-mail for at kontakte ${name}.
          </div>
        </div>
      `,
    })

    return Response.json({ success: true })
  } catch (error) {
    console.error('Resend error:', error)
    return Response.json(
      { error: 'Der opstod en fejl. Prøv igen.' },
      { status: 500 }
    )
  }
}
