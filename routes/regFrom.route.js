const RegForm = require("../components/RegForm");
const {User} = require('../db/models')
const router = require("express").Router();

router.get("/", (req, res) => {
  res.renderComponent(RegForm, { title: "Reg" });
});


router.post('/',  async (req, res)=>{
   const {name} = req.body
   
   const user = await User.create({name,score:0})
   res.app.locals.user=user
   res.redirect('/themesCard')
})
module.exports = router;


