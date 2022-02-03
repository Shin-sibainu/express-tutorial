const express = require("express");
const router = express.Router();

router.get("/user", (req, res) => {
  res.send("ユーザーリスト");
});

router.get("/user/info", (req, res) => {
  res.send("ユーザー情報");
});
