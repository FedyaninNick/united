require("@babel/register");
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const expressSession = require("express-session");
const FileStore = require("session-file-store")(expressSession);
const cors = require("cors");

const viewRouter = require("./routers/view.router");
const apiRouter = require("./routers/api.router");

const sessionConfig = {
  name: "Beatstore",
  store: new FileStore(), //! сохраняет сессию в папку
  secret: process.env.SECRET_KEY_SESSION, //! СТРОКА!!!!!
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 10 * 60 * 60 * 1000, //! Время жизни сессии
    httpOnly: true, //! доступно только на бэке
  },
};

const app = express();
const PORT = process.env.PORT ?? 3100;
app.use(cors());
app.use(expressSession(sessionConfig));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));

app.use(express.static(path.join(process.cwd(), "public")));

app.use("/", viewRouter);
app.use("/api", apiRouter);

app.get("/*", (req, res) => {
  res.send("404 Page not found");
});

app.listen(PORT, () => {
  console.log(`Server starting on PORT ${PORT}`);
});
