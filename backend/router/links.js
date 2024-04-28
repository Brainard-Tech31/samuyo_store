const express = require('express');
const router = express.Router();
const { fetchProducts } = require('../models/upload_product'); // Import getProducts from the module
require('dotenv').config();



router.get('/about', async (req, res) => {
  res.render('pages/about',{})
});

router.get('/contact', async (req, res) => {
    res.render('pages/contact',{})
  });


router.get('/trending_product', async (req, res) => {
  const products = await fetchProducts(); // Call getProducts here
  res.render('pages/trending_product', { products}); 
});


router.get('/dashboard',(req,res)=>{
  res.render('pages/dashboard',{})
})



module.exports = router;
