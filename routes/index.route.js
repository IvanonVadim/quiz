const router = require("express").Router();
const main = require("./Main.route");
const regForm=require('./regFrom.route')
router.use("/", main);
router.use('/regForm',regForm)

module.exports = router;
