import styles from "./SmallProjectCard.module.css";
import images from "../../constants/images";

interface Props {
  languages: string;
  title: string;
  description: string;
}

const SmallProjectCard = ({ languages, title, description }: Props) => {
  return (
    <div className={styles["card-container"]}>
      <p className={styles.language}>{languages}</p>
      <div className={styles["mini-container"]}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
        <button>
          Github <img src={images.twoSideArrow} />
        </button>
      </div>
    </div>
  );
};
export default SmallProjectCard;
