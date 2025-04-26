const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create a transporter for sending emails
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Your Gmail address
    pass: process.env.EMAIL_PASS, // Your app password
  },
});

// Email sending endpoint
app.post('/api/send-email', async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    const mailOptions = {
      from: `"Personal Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECIPIENT || process.env.EMAIL_USER, // Recipient's email
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h3>New message from your portfolio contact form</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send email', error: error.message });
  }
});

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  // Serve the static files from the Angular app build directory
  app.use(express.static(path.join(__dirname, '../dist/personal-portfolio/browser')));

  // Handle Angular routing
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/personal-portfolio/browser/index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 