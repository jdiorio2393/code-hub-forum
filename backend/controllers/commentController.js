const Post = require('../models/Post');
const Comment = require('../models/Comment');

exports.addComment = (req, res, next) => {
  const description = req.body.description;
  const user = req.body.user;
  let threadId = req.body.threadId;
  const comment = new Comment({
    user: user,
    description: description,
    posts: threadId,
  });
  comment.save().then((comment) => {
    let threadId = req.body.threadId;
    Post.update({ _id: threadId }, { $push: { comment: comment } })
      .then((result) => console.log('updated'))
      .catch((err) => console.log(err));
  });
};

exports.getComments = (req, res, next) => {
  Comment.find({ posts: req.params.id })
    .then((comments) => {
      res.send(comments);
    })
    .catch((err) => {
      console.log(err);
    });
};
