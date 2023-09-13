const express = require("express");
const beatRouter = require("./beat.router");
const userRouter = require("./user.router");

const router = express.Router();

router.use("/beats", beatRouter);
router.use("/users", userRouter);

module.exports = router;
