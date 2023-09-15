const React = require("react");
const Layout = require("./Layout");

function ThemesCard ({title,user,themes}) {
    return(
        <Layout title={title} user={user} >
        <div className="ThemesCard">
          <div className="choseCard">
          {themes.map(el=><a href={`/themes/${el.id}/question/0`}>{el.name}<p></p></a>)}
          </div>
      
        </div>
        </Layout>
    )
}

module.exports = ThemesCard