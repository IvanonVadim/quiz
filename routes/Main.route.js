const router = require("express").Router();
const Main = require("../components/Main");

router.get("/", (req, res) => {
  res.renderComponent(Main, { ttile: "Main" });
});

module.exports = router;
