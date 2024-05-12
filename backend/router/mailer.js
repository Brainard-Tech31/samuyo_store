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
      user: process.env.APP_USER, 
      pass: process.env.APP_PSSWD, 
    
    },
    secure: true, // use SSL
    tls: {
      // If you're using a self-signed certificate, you may need to set this to 'false'
      rejectUnauthorized: true // Set to true to reject unauthorized connections
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
