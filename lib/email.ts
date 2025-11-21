import "server-only"

interface EmailOptions {
  to: string | string[]
  subject: string
  html: string
  text: string
}

/**
 * Send an email using Resend
 * Requires RESEND_API_KEY environment variable
 */
export async function sendEmail(options: EmailOptions): Promise<boolean> {
  try {
    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.warn('⚠️ RESEND_API_KEY not configured - email not sent')
      console.log('Email would have been sent to:', options.to)
      console.log('Subject:', options.subject)
      return false
    }

    // Lazy load Resend to avoid build-time issues
    const { Resend } = await import('resend')
    const resend = new Resend(process.env.RESEND_API_KEY)

    const result = await resend.emails.send({
      from: process.env.EMAIL_FROM || 'The Washbuckler <orders@thewashbuckler.com>',
      to: Array.isArray(options.to) ? options.to : [options.to],
      subject: options.subject,
      html: options.html,
      text: options.text,
    })

    if (result.error) {
      console.error('❌ Email send error:', result.error)
      return false
    }

    console.log('✅ Email sent successfully:', result.data?.id)
    return true
  } catch (error) {
    console.error('❌ Failed to send email:', error)
    return false
  }
}

/**
 * Send multiple emails in parallel
 */
export async function sendEmails(emails: EmailOptions[]): Promise<boolean[]> {
  return Promise.all(emails.map(email => sendEmail(email)))
}

