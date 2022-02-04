const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("ユーザーリスト");
});

router.get("/info", (req, res) => {
  res.send("ユーザー情報");
});

router.post("/create", (req, res) => {
  res.send("ユーザーを作成しました");
});

router
  .route("/:id")
  .get((req, res) => {
    res.send(`${req.params.id}のお客様を取得しました`);
  })
  .put((req, res) => {
    res.send(`${req.params.id}のお客様を更新しました`);
  })
  .delete((req, res) => {
    res.send(`${req.params.id}のお客様を削除しました`);
  });

// router.get("/:id", (req, res) => {
//   res.send(`${req.params.id}のお客様を取得しました`);
// });
// router.put("/:id", (req, res) => {
//   res.send(`${req.params.id}のお客様を取得しました`);
// });
// router.delete("/:id", (req, res) => {
//   res.send(`${req.params.id}のお客様を取得しました`);
// });

module.exports = router;
