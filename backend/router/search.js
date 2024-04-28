const express = require('express');
const router = express.Router();
const { fetchProducts } = require('../models/upload_product'); // Import getProducts from the module
require('dotenv').config();
router.get('/search_product', async (req, res) => {
  const searchTerm = req.query.search; // Retrieve the 'search' query parameter
 
  const products = await fetchProducts(); // Call getProducts here
  res.render('pages/search_product', { products , searchTerm}); 
});


router.get('/search', async (req, res) => {
  try {
    const products = await fetchProducts(); // Retrieve products
    const searchTerm = req.query.term.toLowerCase().trim(); // Get search term
  
    const searchResults = products.filter(product => {
      // Check if product name exists and matches the search term
      return product.title && product.title.toLowerCase().includes(searchTerm);
    });

    res.json(searchResults); // Send filtered search results as JSON
  } catch (error) {
    console.error('Error fetching search results:', error);
    res.status(500).json({ error: 'Error fetching search results' });
  }
});


module.exports = router;
