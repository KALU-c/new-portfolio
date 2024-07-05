import "./ProjectCard.css";
import images from "../../constants/images";

const ProjectCard = () => {
  return (
    <div className="card-container">
      <div className="card-items">
        <img src={images.project1} className="project-img" />
        <p className="languages">HTML CSS JAVASCRIPT</p>
        <div>
          <h2 className="title">ChertNodes</h2>
          <p className="description">Minecraft servers hosting</p>
          <div className="buttons">
            <button>
              Live <img src={images.twoSideArrow} className="arrow-img" />
            </button>

            <button>
              Cached{" "}
              <img src={images.greaterThanOrEqual} className="greater-img" />
            </button>
          </div>
        </div>
      </div>
      <div className="card-items">
        <img src={images.project2} className="project-img" />
        <p className="languages">React Express Discord.js Node.js SCSS Python Flask </p>
        <div className="mini-container">
          <h2 className="title">ChertNodes</h2>
          <p className="description">Minecraft servers hosting</p>
          <div className="buttons">
            <button>
              Live <img src={images.twoSideArrow} className="arrow-img" />
            </button>

            <button>
              Cached{" "}
              <img src={images.greaterThanOrEqual} className="greater-img" />
            </button>
          </div>
        </div>
      </div>
      <div className="card-items">
        <img src={images.project3} className="project-img" />
        <p className="languages">HTML CSS JAVASCRIPT</p>
        <div>
          <h2 className="title">ChertNodes</h2>
          <p className="description">Minecraft servers hosting</p>
          <div className="buttons">
            <button>
              Live <img src={images.twoSideArrow} className="arrow-img" />
            </button>

            <button>
              Cached{" "}
              <img src={images.greaterThanOrEqual} className="greater-img" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
