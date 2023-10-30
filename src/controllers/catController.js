const router = require("express").Router();
const catService = require("../services/catService");

router.get("/all", async (req, res) => {
  const cats = await catService.getAll();
  res.render("/post/catShelter", { cats });
});

router.get("/addCat", (req, res) => {
  res.render("post/addCat");
});

router.get("/addBreed", (req, res) => {
  res.render("post/addBreed");
});

module.exports = router;
