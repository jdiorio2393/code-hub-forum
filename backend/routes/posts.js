const express = require('express');
const router = express.Router();

const postController = require('../controllers/postsController');

router.get('/get-post', postController.getPost);

router.get('/get-top-posts', postController.getLimitPosts);

router.get('/user-posts', postController.userPosts);

router.get('/count-posts', postController.countPosts);

// router.get('/:id', postController.getSinglePost);

router.post('/add-post', postController.addPost);

router.post('/edit-post', postController.editPost);

router.delete('/:id', postController.deletePost);

module.exports = router;
