const Post = require('../models/Post');
const User = require('../models/User');

exports.addPost = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const description = req.body.description;
  const topic = req.body.topic;
  const user = req.body.user;
  const userId = req.body.userId;
  const post = new Post({
    title: title,
    imageUrl: imageUrl,
    description: description,
    topic: topic,
    user: user,
    author: userId,
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
    .limit(4)
    .exec(function (err, posts) {
      res.json(posts);
    });
};

exports.userPosts = (req, res, next) => {
  Post.find({
    user: req.session.user.name,
  }).then((items) => {
    res.json(items);
    console.log(items);
  });
};

exports.editPost = (req, res, next) => {
  const threadId = req.body.threadId;
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const description = req.body.description;
  const topic = req.body.topic;
  Post.findById(threadId)
    .then((post) => {
      (post.title = title),
        (post.imageUrl = imageUrl),
        (post.description = description),
        (post.topic = topic);
      return post.save();
    })
    .then((result) => {
      console.log('Product Updated');
      res.redirect('/');
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deletePost = (req, res, next) => {
  const postId = req.params.id;
  Post.findByIdAndRemove(postId)
    .then((result) => {
      console.log('Post Deleted');
    })
    .catch((err) => {
      console.log(err);
    });
  res.redirect('/');
};

// exports.getSinglePost = (req, res, next) => {
//   const postId = req.params.id;
//   Post.findById(postId).then((post) => {
//     res.json(post);
//   });
// };
