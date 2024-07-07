import styles from "./Footer.module.css"
import images from "../../constants/images"
import useCustomNavigate from "../../Hooks/useCustomNavigate";

const Footer = () => {
  const { goToGithub, goToTelegram, goToLinkedin } = useCustomNavigate();
  return (
    <>
      <hr className={styles["horizontal-line"]}/>
      <div className={styles["footer-container"]}>
        <div className={styles.text}>
          <div className={styles.top}>
            <p className={styles.logo}>Kalu</p>
            <p>endekaluzemenu2134@gmail.com</p>
          </div>
          <p className={styles.title}>Web designer and full-stack developer</p>
        </div>
        <div className={styles.images}>
          <p>Media</p>
          <div className={styles["image-list"]}>
            <img src={images.telegram} className={styles.telegram} onClick={goToTelegram}/>
            <img src={images.linkedin} className={styles.linkedin} onClick={goToLinkedin}/>
            <img src={images.github} className={styles.github} onClick={goToGithub}/>
          </div>
        </div>
      </div>
      <p className={styles.copyright}>&copy; copyright {new Date().getFullYear()}. Made by Kalu</p>
    </>
  );
};
export default Footer;
