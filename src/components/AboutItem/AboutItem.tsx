import styles from "./AboutItem.module.css";
import images from "../../constants/images";
import useCustomNavigate from "../../Hooks/useCustomNavigate";

interface Props {
  hideButton?: boolean;
}

const AboutItem = ({ hideButton }: Props) => {
  const { goToAbout } = useCustomNavigate();

  return (
    <>
      <div className={styles["about-container"]}>
        <div className={styles["text-container"]}>
          <p className={styles.text1}>Hello, I'm Kalu</p>
          <p className={styles.text2}>
            I'm a self-taught full-stack developer based in Hossana, Ethiopia. I
            specialize in developing responsive websites from scratch and
            transforming them into modern, user-friendly web experiences.
          </p>
          <p className={styles.text3}>
            For over a year, I've been passionate about turning my creativity
            and knowledge into websites. I've helped various clients establish
            their online presence and always strive to stay updated with the
            latest technologies and frameworks.
          </p>
          {!hideButton && (
            <button onClick={goToAbout}>
              Read more <img src={images.arrow} />
            </button>
          )}
        </div>
        <div className={styles["about-image-container"]}>
          <img src={images.image2} className={styles.image2} />
          <img src={images.dots} className={styles.dots1} />
          <img src={images.dots} className={styles.dots2} />
          <img
            src={images.longHorizontalLine}
            className={styles["horizontal-line"]}
          />
        </div>
      </div>
    </>
  );
};
export default AboutItem;
