const express = require('express');
const router = express.Router();

const commentController = require('../controllers/commentController');

router.get('/comment/:id', commentController.getComments);

router.post('/add-comment', commentController.addComment);

module.exports = router;
