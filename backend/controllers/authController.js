const User = require('../models/User');
const bcrypt = require('bcryptjs');
const db = require('mongodb');

exports.signUp = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  User.find({
    email: email,
    name: name,
  })
    .then((user) => {
      if (user) {
        res.status(400).send('User already exists');
      }
      return bcrypt
        .hash(password, 12)
        .then((hashedPassword) => {
          const user = new User({
            name: name,
            email: email,
            password: hashedPassword,
            posts: [],
          });
          return user.save();
        })
        .then((result) => {
          res.redirect('/');
          console.log('User created');
        });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postLogin = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  User.findOne({
    email: email,
  })
    .then((user) => {
      if (!user) {
        return res.redirect('/login');
      }
      bcrypt
        .compare(password, user.password)
        .then((doMatch) => {
          if (doMatch) {
            req.session.isLoggedin = true;
            req.session.user = user;
            return req.session.save((err) => {
              console.log(err);
              res.redirect('/');
            });
          }
          res.redirect('/login');
        })
        .catch((err) => {
          console.log(err);
          res.redirect('/login');
        });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getSession = (req, res, next) => {
  res.send(req.session);
};

exports.postLogout = (req, res, next) => {
  req.session.destroy((err) => {
    console.log(err);
    res.redirect('/');
  });
};

exports.getUser = (req, res, next) => {
  User.find({
    name: req.session.user.name,
  }).then((user) => {
    res.send(user);
  });
};
