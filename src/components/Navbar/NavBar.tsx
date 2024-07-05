import "./NavBar.css";
import images from "../../constants/images";

const NavBar = () => {
  return (
    <>
      <div className="sticky-nav">
        <img src={images.verticalLine} className="vertical-line" />
        <img src={images.github} className="github socials" />
        <img src={images.telegram} className="telegram socials" />
        <img src={images.linkedin} className="linkedin socials" />
      </div>
      <div className="nav-container">
        <p className="logo">RealKal</p>
        <ul>
          <li><span className="mini-hashtag">#</span>home</li>
          <li><span className="mini-hashtag">#</span>works</li>
          <li><span className="mini-hashtag">#</span>about-me</li>
          <li><span className="mini-hashtag">#</span>contacts</li>
        </ul>
      </div>
    </>
  )
}
export default NavBar