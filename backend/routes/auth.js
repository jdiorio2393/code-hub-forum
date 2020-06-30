const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');

router.post('/signup', authController.signUp);

router.post('/login', authController.postLogin);

router.post('/logout', authController.postLogout);

router.get('/getSession', authController.getSession);

router.get('/get-user', authController.getUser);

module.exports = router;
