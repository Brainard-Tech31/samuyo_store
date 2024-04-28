const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const multer = require("multer");
const upload_product = require("../models/upload_product");
const blog_post = require("../models/blog_post");
require("dotenv").config();

const firebase = require("firebase/app");
const firebaseAuthRouter = require("./firebase");
router.use(firebaseAuthRouter);
const app = express();

// Use body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
// Firebase Authentication middleware function
function isAuthenticated(req, res, next) {
  const user = firebase.auth().currentUser;

  if (user) {
    // User is authenticated, proceed to next middleware
    req.user = {
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
      uid: user.uid
    };
    next();

  } else {
    // User is not authenticated, redirect to home page or login page
    res.redirect('/');
  }
}

// Route to render the 'upload' page
router.get('/upload', isAuthenticated, (req, res) => {
  res.render('pages/upload', { user: req.user });
  console.log(req.user)
});

router.post("/upload_product", async (req, res) => {
  const {
    title,
    description,
    product_option,
    video,
    thumbnail,
    product_link
  } = req.body;
  await upload_product.insertProduct(
    title,
    description,
    video,
    thumbnail,
    product_option,
    product_link
  );
  res.redirect("/");
});

router.post("/delete_product", async (req, res) => {
  const { title, product_option } = req.body;
  console.log(title, product_option);
  await upload_product.removeProduct(title, product_option);
  res.redirect("/");
});

router.post("/upload_blog_post", async (req, res) => {
  const { title, description, thumbnail, Author, product_option } = req.body;
  const trimmedDescription = description.trim();
  await blog_post.insertBlogPost(
    title,
    trimmedDescription,
    thumbnail,
    Author,
    product_option
  );
  res.redirect("/");
});
module.exports = router;
