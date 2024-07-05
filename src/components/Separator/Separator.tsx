import "./Separator.css";
import images from "../../constants/images";

const Separator = () => {
  return (
    <div className="separator-container">
      <div className="text">
        <p><span className="hashtag">#</span>Projects</p>
        <img src={images.horizontalLine} className="line"/>
      </div>
      <div className="view-all">
        <p>View all</p>
        <img src={images.arrow} className="arrow" />
      </div>
    </div>
  )
}
export default Separator