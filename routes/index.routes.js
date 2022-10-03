const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/contact", (req, res, next) => {
  res.send("this is our contact page")
});

module.exports = router;
