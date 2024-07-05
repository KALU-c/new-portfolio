import styles from "./Hero.module.css";
import images from "../../constants/images";

const Hero = () => {
  return (
    <div className={styles["hero-container"]}>
      <div>
        <p className={styles["hero-header"]}>
          RealKal is a <span className={styles["header-color"]}>web designer</span> and a{" "}
          <span className={styles["header-color"]}>front-end developer</span>
        </p>
        <p className={styles.desc}>
          He crafts a responsive website where technologies meets creativity
        </p>
        <button>Contact me!!</button>
      </div>
      <div className={styles["image-container"]}>
        <img src={images.randomLines} className={styles["random-lines"]} />
        <img src={images.image1} className={styles.image1} />
        <img src={images.dots} className={styles.dots} />
        <p className={styles["working-on"]}>
          <div className={styles.rectangle}></div> Currently working on{" "}
          <span className={styles.focus}>Portfolio</span>
        </p>
      </div>
    </div>
  );
};
export default Hero;
