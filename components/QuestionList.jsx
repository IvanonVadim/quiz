const React = require("react");
const Layout = require("./Layout");


function Question ({title,question,indexquestion, user}) {
return(

    <Layout title={title} user={user}>
        <div className="questionPage">

            <h1>{question.textQuestion}</h1>
            <div className="inputForm">
                <form id='formId' action="" data-id={question.id}>
                <input name='answer'type="text" /> <button type='submit' className="send">отправить ответ</button>
                </form>
            </div>
            <a href={`/themes/${question.idTheme}/question/${indexquestion}`}><button className="check">следующий</button></a>
            <div id='errorQuestion'></div>
        </div>
        

    </Layout>
)
}

module.exports=Question