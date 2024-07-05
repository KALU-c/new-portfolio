import styles from "./ProjectCard.module.css";
import images from "../../constants/images";
import data from "../../constants/data";

const ProjectCard = () => {
  return (
    <>
      <div className={styles.decoration}>
        <img src={images.dots} className={styles.dots} />
        <img src={images.semiRectangle} className={styles["semi-rectangle"]} />
      </div>
      <div className={styles["card-container"]}>
        {data.ProjectCardData.map((detail) => (
          <div className={styles["card-items"]}>
            <img src={detail.imgURL} className={styles["project-img"]} />
            <p className={styles.languages}>{detail.languages}</p>
            <div className={styles["mini-container"]}>
              <h2 className={styles.title}>{detail.title}</h2>
              <p className={styles.description}>{detail.description}</p>
              <div className={styles.buttons}>
                <button>
                  Live <img src={images.twoSideArrow} className={styles["arrow-img"]} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default ProjectCard;
