const express = require("express");
const app = express();
const userRouter = require("./routes/user");

app.use(express.static("public"));
// app.use(logger);
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  console.log("Hello Express");
  //res.send("<h1>Hello NodeJs</h1>");
  //res.sendStatus(500);
  //res.status(500).send("Error");
  //res.status(500).json({ msg: "エラー" });
  res.render("index", { text: "こんにちは" });
});

//ルーティング
app.use("/user", userRouter);

// router.get("user/", (req, res) => {
//   res.send("ユーザーリスト");
// });

// router.get("user/info", (req, res) => {
//   res.send("ユーザー情報");
// });

//ミドルウェア
// function logger(req, res, next) {
//   console.log(req.originalUrl);
//   next();
// }

app.listen(3000, console.log("サーバーが起動しました"));
