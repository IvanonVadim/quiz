const RegForm = require("../components/RegForm");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.renderComponent(RegForm, { title: "Reg" });
});
module.exports = router;
