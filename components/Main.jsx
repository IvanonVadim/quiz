const React = require("react");
const Layout = require("./Layout");
function Main({ title }) {
  
  return (
    <Layout title={title} >
      <div >
        <img  className="imga"src="https://games.mail.ru/hotbox/content_files/Stories/2023/05/17/26e919ccdef64d7aabf2aa70f49bb4a5.jpg" />
        <div>
        <form>
            <input/>
        </form>
    </div>
      </div>
    </Layout>
  );
}
module.exports = Main;
