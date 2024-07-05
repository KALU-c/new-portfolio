import "./Hero.css";
import images from "../../constants/images";

const Hero = () => {
  return (
    <div className="hero-container">
      <div>
        <p className="hero-header">
          RealKal is a <span className="header-color">web designer</span> and a{" "}
          <span className="header-color">front-end developer</span>
        </p>
        <p className="desc">
          He crafts a responsive website where technologies meets creativity
        </p>
        <button>Contact me!!</button>
      </div>
      <div className="image-container">
        <img src={images.randomLines} className="random-lines" />
        <img src={images.image1} className="image1" />
        <img src={images.dots} className="dots" />
        <p className="working-on">
          <div className="rectangle"></div> Currently working on{" "}
          <span className="focus">Portfolio</span>
        </p>
      </div>
    </div>
  );
};
export default Hero;
