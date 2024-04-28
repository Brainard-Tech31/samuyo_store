const express = require('express');
const router = express.Router();
const { fetchProducts } = require('../models/upload_product'); // Import getProducts from the module
require('dotenv').config();

const firebase = require("firebase/app");
const firebaseAuthRouter = require('./firebase');
router.use(firebaseAuthRouter)

router.post('/signup',async (req,res)=>{
  const email = req.body.email;
  const password  =req.body.password;
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(async (userCredential) => {
    // Logged in successfully
    const user = userCredential.user;
    console.log('Account created:', user.email);
     const products = await fetchProducts(); // Call getProducts here
     res.redirect('/');
  })
  .catch((error) => {
    // Handle login errors
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error('Login error:', errorMessage);
  });
 
 })

 
module.exports = router;
