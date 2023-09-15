const router = require('express').Router();
const { Question, User } = require('../db/models');


const QuestionList = require('../components/QuestionList');

router.get('/:idTheme/question/:indexquestion', async (req, res) => {
  const { idTheme, indexquestion } = req.params;

  const questions = await Question.findAll({ where: { idTheme } });
  if(!questions[indexquestion]){
    res.redirect('/themesCard')
  }else{
  res.renderComponent(QuestionList, {
    title: 'Questions',
    question: questions[indexquestion],
    indexquestion:Number(indexquestion) + 1
  })}
});




router.post('/', async (req, res) => {
    try {
     
        const {answerQuestion,id} = req.body
        const quers= await Question.findOne({where:{id}})
        const {user}=res.app.locals
        const score=await User.findOne({where:{id:user.id}})

        let bal=score.score
           if(answerQuestion.toLowerCase() === quers.answerQuestion.toLowerCase()){
            bal+=100
           await User.update({score:bal},{where:{id:user.id}})
           res.app.locals.user.score=bal+=100
   res.json({message:'Молодец ты ответил правильно 👍'})
        }else{
            res.json({message:`Не верно ☹,верный ответ: ${quers.answerQuestion}`})

        }
    } catch ({error}) {
        console.log(error);
    }
})





module.exports = router;
