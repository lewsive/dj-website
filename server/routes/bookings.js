const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/', async (req, res) => {
  const { name, email, date, eventType } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `New DJ Booking from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nDate: ${date}\nEvent Type: ${eventType}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Booking submitted successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to send booking.' });
  }
});

module.exports = router;
