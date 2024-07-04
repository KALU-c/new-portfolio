import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="nav-container">
      <p className="logo">RealKal</p>
      <ul>
        <li><span className="mini-hashtag">#</span>home</li>
        <li><span className="mini-hashtag">#</span>works</li>
        <li><span className="mini-hashtag">#</span>about-me</li>
        <li><span className="mini-hashtag">#</span>contacts</li>
      </ul>
    </div>
  )
}
export default NavBar