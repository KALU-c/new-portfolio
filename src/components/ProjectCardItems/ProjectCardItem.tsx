import styles from "./ProjectCardItem.module.css";
import images from "../../constants/images";

interface Props {
  imgURL: string
  languages: string
  title: string
  description: string
}

const ProjectCardItem = ({ imgURL, languages, title, description }: Props) => {
  return (
    <div className={styles["card-items"]}>
      <img src={imgURL} className={styles["project-img"]} />
      <p className={styles.languages}>{languages}</p>
      <div className={styles["mini-container"]}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <div className={styles.buttons}>
          <button>
            Live{" "}
            <img src={images.twoSideArrow} className={styles["arrow-img"]} />
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProjectCardItem;
