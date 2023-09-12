require("@babel/register");
require("dotenv").config();

const express = require('express');
const logger = require('morgan');
const path = require("path");
const expressSession = require('express-session');
const FileStore = require('session-file-store')(expressSession);

// const React = require("react");
// const ReactDOMServer = require("react-dom/server");

// const isAuth = require('./src/middlewares/isAuth');

// const bcrypt = require('bcrypt');
// const hashPassword = await bcrypt.hash(password, 10);
// const user = await User.create({ userName, password: hashPassword });
// const checkPassword = await bcrypt.compare(password, user.password);


const app = express();
const PORT = process.env.PORT ?? 5000;

const sessionConfig = {
  name: "united",
  store: new FileStore(),
  secret: process.env.SESSION_SECRET, //! COOKIE_SECRET, SECRET_KEY_SESSION
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 60 * 60 * 1000,
    httpOnly: true,
  },
};


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger('dev'));
app.use(express.static(path.join(process.cwd(), 'public')));
app.use(expressSession(sessionConfig));
// app.use(isAuth);


app.get("/", (req, res) => {
  res.send("Test!");
});

app.listen(PORT, () => {
  console.log(`Сервер запущен! ===> ${PORT}`);
});
