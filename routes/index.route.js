const router = require("express").Router();
const main = require("./Main.route");
const regForm=require('./regFrom.route')
const themesCard = require('./ThemesCard')
const question = require('./question.route')

router.use("/", main);
router.use('/regForm',regForm)
router.use('/themesCard', themesCard)
router.use('/themes', question)

module.exports = router;
