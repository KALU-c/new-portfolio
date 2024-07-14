import styles from "./Hero.module.css";
import images from "../../constants/images";
import useCustomNavigate from "../../Hooks/useCustomNavigate";

const Hero = () => {
  const { goToContact } = useCustomNavigate();
  return (
    <div className={styles["hero-container"]}>
      <div>
        <p className={styles["hero-header"]}>
         I am Kalu, a <span className={styles["header-color"]}>software engineer</span> and {" "}
          <span className={styles["header-color"]}>full-stack developer</span>
        </p>
        <p className={styles.desc}>
        I use tech and creativity to make responsive, unique websites that shine.
        </p>
        <button onClick={goToContact}>Contact me!!</button>
      </div>
      <div className={styles["image-container"]}>
        <img src={images.randomLines} className={styles["random-lines"]} />
        <img src={images.image1} className={styles.image1} />
        <img src={images.dots} className={styles.dots} />
        <p className={styles["working-on"]}>
          <div className={styles.rectangle}></div> Currently working on a{" "}
          <span className={styles.focus}>project</span>
        </p>
      </div>
    </div>
  );
};
export default Hero;
