require('dotenv').config()
const nodemailer = require('nodemailer')

export default (req, res) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL,
      pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD
    }
  })

  const mailOption = {
    from: process.env.NEXT_PUBLIC_EMAIL,
    to: req.body.email,
    subject: 'Download subscription',
    html: req.body.text
  }

  transporter.sendMail(mailOption, (err, data) => {
    if (err) {
      res.send('error' + JSON.stringify(err))
    } else {
      res.send('success')
    }
  })
}
