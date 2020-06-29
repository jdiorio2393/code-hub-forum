const express = require('express');
const router = express.Router();

const postController = require('../controllers/postsController');

router.get('/get-post', postController.getPost);

router.get('/get-top-posts', postController.getLimitPosts);

router.get('/user-posts', postController.userPosts);

router.post('/add-post', postController.addPost);

module.exports = router;
