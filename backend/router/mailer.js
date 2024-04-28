const express = require('express');
const router = express.Router();
const { fetchProducts } = require('../models/upload_product'); // Import getProducts from the module
require('dotenv').config();

 const nodemailer = require('nodemailer');
 router.post('/submit_contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log(name,email,message)
  // Create a transporter with SMTP details
  const transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
      user: 'Samuyo Store@gmail.com', 
      pass: process.env.APP_PSSWD, 
    },
    tls: {
      rejectUnauthorized: false // Allow self-signed certificates
    }
  });

  const mailOptions = {
    from: email,
    to: email, // Replace with the recipient's email
    subject: 'Samuyo Store',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.redirect('/');
    }
  });
});


module.exports = router;
