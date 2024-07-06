import styles from "./Footer.module.css"
import images from "../../constants/images"

const Footer = () => {
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
            <img src={images.telegram} className={styles.telegram}/>
            <img src={images.email} className={styles.email}/>
            <img src={images.linkedin} className={styles.linkedin}/>
          </div>
        </div>
      </div>
      <p className={styles.copyright}>@ copyright 2024. Made by Kalu</p>
    </>
  );
};
export default Footer;
