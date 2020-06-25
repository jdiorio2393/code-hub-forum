const Post = require('../models/Post');

exports.addPost = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const description = req.body.description;
  const topic = req.body.topic;
  const user = req.body.user;
  const post = new Post({
    title: title,
    imageUrl: imageUrl,
    description: description,
    topic: topic,
    user: user,
  });
  post
    .save()
    .then((result) => {
      console.log('New Post Added');
      res.redirect('/');
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getPost = (req, res, next) => {
  Post.find()
    .then((posts) => {
      res.json(posts);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getLimitPosts = (req, res, next) => {
  Post.find()
    .sort({ date: -1 })
    .limit(3)
    .exec(function (err, posts) {
      res.json(posts);
    });
};
