const express = require('express');
const router = express.Router();
const { fetchProducts } = require('../models/upload_product'); // Import getProducts from the module
require('dotenv').config();

const firebase = require("firebase/app");
const firebaseAuthRouter = require('./firebase');
router.use(firebaseAuthRouter)

router.post('/login', async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  try {
    const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
    const user = userCredential.user;
    const userId = user.uid;
  
    if(userId === process.env.USER_ID){
      res.redirect('/upload')
    }else{
      res.redirect('/')
    }
   
  } catch (error) {
     // Handle login errors
     const errorCode = error.code;
     const errorMessage = error.message;
     console.error('Login error:', errorMessage);
  }
});




module.exports = router;
