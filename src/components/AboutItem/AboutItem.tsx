import styles from "./AboutItem.module.css";
import images from "../../constants/images";

const AboutItem = () => {
  return (
    <>
      <div className={styles["about-container"]}>
        <div className={styles["text-container"]}>
          <p className={styles.text1}>Hello, I'm Kalu</p>
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
          <button>Read more <img src={images.arrow} /></button>
        </div>
        <div className={styles["about-image-container"]}>
          <img src={images.image2} className={styles.image2} />
          <img src={images.dots} className={styles.dots1} />
          <img src={images.dots} className={styles.dots2} />
          <img src={images.longHorizontalLine} className={styles["horizontal-line"]} />
        </div>
      </div>
    </>
  );
};
export default AboutItem;
