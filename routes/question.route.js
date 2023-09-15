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
        const score=await User.findOne({where:{id:34}})
        let bal=score.score
        console.log(bal);
        if(answerQuestion.toLowerCase() === quers.answerQuestion.toLowerCase()){
            bal+=100
            console.log(bal);
           await User.update({score:bal},{where:{id:34}})
   res.json({message:'Молодец ты ответил правильно'})
        }else{
            res.json({message:`Не верно,верный ответ: ${quers.answerQuestion}`})
        }
    } catch ({error}) {
        console.log(error);
    }
})





module.exports = router;
