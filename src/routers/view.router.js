const express = require("express");
const renderTemplate = require("../utils/renderTemplate");
const HomePage = require("../views/HomePage");
const AddBeat = require("../views/AddBeat");
const Beats = require("../views/Beats");
const BeatInfo = require("../views/BeatInfo");
const BeatEdit = require("../views/BeatEdit");
const Login = require("../views/Login");
const Register = require("../views/RegisterPage");
const Profile = require('../views/Profile')
const { Beat } = require("../../db/models");

const router = express.Router();

router.get("/", (req, res) => {
  renderTemplate(HomePage, { user: req.session?.user }, res);
});

router.get("/beats/new", (req, res) => {
  renderTemplate(AddBeat, { user: req.session?.user }, res);
});

router.get("/beats", async (req, res) => {
  const beats = (await Beat.findAll()).map((item) => item.get());
  renderTemplate(Beats, { beats, user: req.session?.user }, res);
});

router.get("/beats/:id", async (req, res) => {
  try {
    const beat = (await Beat.findByPk(req.params.id)).get();
    renderTemplate(BeatInfo, { beat, user: req.session?.user }, res);
  } catch (e) {
    console.error(e);
    res.redirect("/404");
  }
});

router.get("/beats/:id/edit", async (req, res) => {
  try {
    const beat = (await Beat.findByPk(req.params.id)).get();
    renderTemplate(BeatEdit, { beat, user: req.session?.user }, res);
  } catch (e) {
    console.error(e);
    res.redirect("/404");
  }
});

router.get("/users/beats", async (req, res) => {
  const beats = await Beat.findAll({
    where: { userId: req.session?.user?.id },
    raw: true,
  });
  renderTemplate(Beats, { beats, user: req.session?.user }, res);
});

router.get("/users/profile", async (req, res) => {
  const beats = await Beat.findAll({
    where: { userId: req.session?.user?.id },
    raw: true,
  });
  renderTemplate(Profile, { beats, user: req.session?.user }, res);
});

router.get("/login", async (req, res) => {
  renderTemplate(Login, {}, res);
});

router.get("/register", async (req, res) => {
  renderTemplate(Register, {}, res);
});

module.exports = router;
