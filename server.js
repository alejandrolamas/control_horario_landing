import express from 'express'
import nodemailer from 'nodemailer'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Serve dist in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'dist')))
}

// Contact endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, plan, message } = req.body || {}
    if (!name || !email || !plan || !message) {
      return res.status(400).json({ ok: false, error: 'Faltan campos' })
    }

    const planLabels = {
      unica: 'Licencia Única',
      agencia: 'Licencia Agencia',
      software: 'Licencia de uso del software',
    }
    const normalizedPlan = planLabels[plan] || plan

    const host = process.env.SMTP_HOST
    const port = Number(process.env.SMTP_PORT || 587)
    const user = process.env.SMTP_USER
    const pass = process.env.SMTP_PASS
    const from = process.env.MAIL_FROM || 'no-reply@fichaje.app'
    const to = process.env.MAIL_TO || 'alamas@dro.studio'

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: user && pass ? { user, pass } : undefined,
    })

    const info = await transporter.sendMail({
      from,
      to,
      subject: `Contacto desde fichaje.app · ${normalizedPlan}`,
      replyTo: email,
      text: `Nombre: ${name}\nEmail: ${email}\nPlan deseado: ${normalizedPlan}\n\n${message}`,
    })

    return res.json({ ok: true, messageId: info.messageId })
  } catch (err) {
    console.error('contact error', err)
    return res.status(500).json({ ok: false, error: 'No se pudo enviar el email' })
  }
})

// Fallback to index.html in production
if (process.env.NODE_ENV === 'production') {
  app.get('*', (_, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'))
  })
}

const PORT = Number(process.env.PORT || (process.env.NODE_ENV === 'production' ? 5173 : 5174))
app.listen(PORT, () => console.log(`[landing] listening on :${PORT}`))
