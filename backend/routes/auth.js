const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');

router.post('/signup', authController.signUp);

router.post('/login', authController.postLogin);

router.get('/getSession', authController.getSession);

module.exports = router;
