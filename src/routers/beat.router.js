const express = require("express");
const { Beat } = require("../../db/models");
const downloadchek = require("../middlewares/downloadchek");
const multer = require("multer");

const router = express.Router();
const upload = multer();

router.post(
  "/",
  upload.fields([
    { name: "audio", maxCount: 1 },
    { name: "image", maxCount: 2 },
  ]),
  downloadchek, // Используем миддлвар-функцию для проверки файлов
  async (req, res) => {
    try {
      const { title, janre, price, autor, key } = req.body;
      const audioFileBuffer = req.files.audio[0].buffer; // Получаем буфер аудиофайла
      const imageFileBuffer = req.files.image[0].buffer; // Получаем буфер изображения
      // Создаем "data URI" для аудио и изображения
      const audioFileDataUri = `data:audio/mpeg;base64,${audioFileBuffer.toString(
        "base64"
      )}`;
      const imageFileDataUri = `data:image/jpeg;base64,${imageFileBuffer.toString(
        "base64"
      )}`;
      await Beat.create({ 
        title,
        janre,
        price,
        autor,
        key,
        userId: req.session.user.id,
        imageFile: imageFileDataUri,
      });
      res.redirect("/beats");
    } catch (e) {
      console.error(e);
      return res.status(500).send("Internal server error");
    }
  }
);

router.delete("/:id", async (req, res) => { //УДАЛЕНИЕ ПО ID
  try {
    const targetBeat = await Beat.findByPk(req.params.id);
    if (targetBeat.userId === req.session?.user?.id) {
      await targetBeat.destroy();
      res.sendStatus(200);
    } else {
      res.sendStatus(403);
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
});

router.put("/:id", async (req, res) => {               //ИЗМЕНЕНИЕ ПО ID
  const { title, price, janre, key, autor } = req.body;
  try {
    const targetBeat = await Beat.findByPk(req.params.id);
    if (targetBeat.userId === req.session?.user?.id) {
      targetBeat.update({
        title,
        price,
        janre,
        key,
        autor,
      });
      targetBeat.save();
      res.end();
    } else {
      res.sendStatus(403);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

module.exports = router;
