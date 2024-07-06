import styles from "./AboutItem.module.css";
import images from "../../constants/images";

const AboutItem = () => {
  return (
    <>
      <img src={images.dots} className={styles.dots3} />
      <img src={images.rectangle} className={styles.rectangle} />
      <div className={styles["about-container"]}>
        <div className={styles["text-container"]}>
          <p className={styles.text1}>Hello, I'm RealKal</p>
          <p className={styles.text2}>
            I'm self-taught full-stack developer based in Hossana, Ethiopia. I
            can develop responsive websites from scratch and raise them into
            modern user-friendly web experience.
          </p>
          <p className={styles.text3}>
            Transforming my creativity and knowledge into a websites has been my
            passion for over a year. I have been helping various clients to
            establish their presence online. I always strive to learn about the
            newest technologies and frameworks.
          </p>
        </div>
        <div className={styles["image-container"]}>
          <img src={images.image2} className={styles.image2} />
          <img src={images.dots} className={styles.dots1} />
          <img src={images.dots} className={styles.dots2} />
        </div>
      </div>
    </>
  );
};
export default AboutItem;
