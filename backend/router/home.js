const express = require('express');
const router = express.Router();
const { fetchProducts } = require('../models/upload_product'); // Import getProducts from the module
const { fetchBlogPost } = require('../models/blog_post')

router.get('/', async (req, res) => {
  try {
    const products = await fetchProducts(); //
    const blogPosts = await fetchBlogPost();
    res.render('pages/home', { products , blogPosts}); 
   
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).send('Error fetching products');
  }
});

module.exports = router;
