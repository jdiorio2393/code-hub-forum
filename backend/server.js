const express = require('express');
const app = express();
const User = require('./models/User');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const session = require('express-session');
const mongoDBStore = require('connect-mongodb-session')(session);

const mongoURI =
  'mongodb+srv://CodeHub:rPidZH6Neiiz8PKe@codehub-ve5tk.mongodb.net/<dbname>?retryWrites=true&w=majority';

connectDB();

const store = new mongoDBStore({
  uri: mongoURI,
  collection: 'sessions',
});

app.use(cookieParser());

app.use(cors({ credentials: true }));

const postData = require('./routes/posts');
const authData = require('./routes/auth');
const commentData = require('./routes/comments');

app.use(express.json({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: false,
    store: store,
    cookie: { secure: false },
  })
);

app.use((req, res, next) => {
  // const isLoggedIn = req.session;
  // console.log(isLoggedIn);
  if (!req.session.user) {
    return next();
  }
  User.findById(req.session.user._id)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});

app.use(postData);
app.use(authData);
app.use(commentData);

const PORT = process.env.port || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
