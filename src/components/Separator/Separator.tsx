import styles from "./Separator.module.css";
import images from "../../constants/images";
import useCustomNavigate from "../../Hooks/useCustomNavigate";

interface Props {
  text: string;
  show?: boolean;
}

const Separator = ({ text, show }: Props) => {
  const { goToProjects } = useCustomNavigate();
  return (
    <div className={styles["separator-container"]}>
      <div className={styles.text}>
        <p>
          <span className={styles.hashtag}>#</span>
          {text}
        </p>
        <img src={images.horizontalLine} className={styles.line} />
      </div>
      {show && (
        <div className={styles["view-all"]} onClick={goToProjects}>
          <p>View all</p>
          <img src={images.arrow} className={styles.arrow} />
        </div>
      )}
    </div>
  );
};
export default Separator;
