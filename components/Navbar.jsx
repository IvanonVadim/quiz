const React = require("react");
let playerName='maan'
function Navbar() {
  return (
    <nav>
    <div className="nav-wrapper">
      <a href="/regForm" className="brand-logo right">Rega</a>
      <ul id="nav-mobile" className="left hide-on-med-and-down">
        <li><a href="collapsible.html">{`Hello ${playerName}!`}</a></li>
      </ul>
    </div>
  </nav>
  );
}
module.exports = Navbar;
