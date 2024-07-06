import styles from "./ProjectCard.module.css";
import images from "../../constants/images";
import data from "../../constants/data";
import Separator from "../../components/Separator/Separator";
import ProjectCardItem from "../../components/ProjectCardItems/ProjectCardItem";

const ProjectCard = () => {
  return (
    <>
      <Separator text="projects" show={true}/>
      <div className={styles.decoration}>
        <img src={images.dots} className={styles.dots} />
        <img src={images.semiRectangle} className={styles["semi-rectangle"]} />
      </div>
      <div className={styles["card-container"]}>
        {data.ProjectCardData.map((detail) => (
          <ProjectCardItem
            imgURL={detail.imgURL}
            languages={detail.languages}
            title={detail.title}
            description={detail.description} 
          />
        ))}
      </div>
    </>
  );
};
export default ProjectCard;
