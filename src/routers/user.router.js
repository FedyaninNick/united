const express = require("express");
const router = express.Router();
const chekEmptyInput = require("../middlewares/register"); // Подключаем вашу миддлвар-функцию
const bcrypt = require("bcrypt"); // Подключаем bcrypt для хеширования пароля
const { User } = require("../../db/models"); // Подключаем модель User

// POST-запрос для регистрации пользователя
router.post("/register", chekEmptyInput, async (req, res) => {
  const { userName, password, email, birthday, city, sports } = req.body;
  try {
    const hashPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      userName,
      email,
      birthday,
      city,
      sports,
      password: hashPassword,
    });
    const rawData = user.get({ plain: true });
    const userData = structuredClone(rawData);
    delete userData.password;
    req.session.user = userData;
    res.redirect("/");
  } catch (e) {
    console.log(e);
    res.sendStatus(400);
  }
});

router.post("/login", async (req, res) => {
  const { userName, password } = req.body;
  try {
    const existUser = await User.findOne({ where: { userName }, raw: true });

    if (!existUser) {
      res.redirect("/register"); // Перенаправляем на страницу регистрации
      return; // Выходим из обработчика, так как пользователь не найден
    }

    const userData = structuredClone(existUser);
    delete userData.password;
    const passwordCheck = await bcrypt.compare(password, existUser.password);
    if (passwordCheck) {
      req.session.user = userData;
      res.redirect("/");
    } else {
      res.redirect("/login"); // Перенаправляем на страницу регистрации
    }
  } catch (e) {
    console.log(e);
    res.sendStatus(400);
  }
});

router.get("/logout", async (req, res) => {
  try {
    req.session.destroy((err) => {
      if (err) {
        console.log(err);
        res.redirect("/");
      } else {
        res.clearCookie("Beatstore");
        res.redirect("/");
      }
    });
  } catch (e) {
    console.log(e);
    res.sendStatus(400);
  }
});

module.exports = router;
