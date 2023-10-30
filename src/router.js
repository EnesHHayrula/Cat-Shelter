const router = require("express").Router();

const catController = require("./controllers/catController");
const homeController = require("./controllers/homeController");

router.use(homeController);
router.use("/cats", catController);
module.exports = router;
