
const router = require('express').Router();
const bodyparser = require('body-parser');
router.use(bodyparser.urlencoded({ extended: true }));
require('firebase/auth');
const firebase = require('firebase/app');

const firebaseConfig = {
  apiKey: "AIzaSyAtzGUYupOHVg6_2YMGYs_poIkLm_nm7lc",
  authDomain: "samuyo-store.firebaseapp.com",
  projectId: "samuyo-store",
  storageBucket: "samuyo-store.appspot.com",
  messagingSenderId: "799125741448",
  appId: "1:799125741448:web:9402b244184afde1f1643d",
  measurementId: "G-V8JCQSRHS3"
};
firebase.initializeApp(firebaseConfig);
// Initialize Firebase Authentication service
const auth = firebase.auth();
module.exports = router;
