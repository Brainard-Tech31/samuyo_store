const express = require('express');
const router = express.Router();
const { fetchBlogPost } = require('../models/blog_post')

router.get('/blog', async (req, res) => {
    
  try {
    const blogPosts = await fetchBlogPost();
    res.render('pages/blog', {  blogPosts}); 
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).send('Error fetching products');
  }
});

module.exports = router;
