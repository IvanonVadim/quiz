const React = require("react");
const Layout = require("./Layout");

function RegForm({ title }) {
  return (
    <Layout title={title}>
      <div className="divReg">
          <form  action='/regForm' method="POST" className="formdiv">
            <div className="divInput">
              <input className="inputName" name="name" />
         <button className="inputBtn" type="submit">Жми</button>
            </div>
          </form>
      </div>
    </Layout>
  );
}
module.exports = RegForm;
