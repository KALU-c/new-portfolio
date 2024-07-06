import styles from "./NavBar.module.css";
import images from "../../constants/images";

const NavBar = () => {
  return (
    <>
      <div className={styles["sticky-nav"]}>
        <img src={images.verticalLine} className={styles["vertical-line"]} />
        <img src={images.github} className={styles.github} />
        <img src={images.telegram} className={styles.telegram} />
        <img src={images.linkedin} className={styles.linkedin} />
      </div>
      <div className={styles["nav-container"]}>
        <p className={styles.logo}>Kalu</p>
        <ul>
          <li><span className={styles["mini-hashtag"]}>#</span>home</li>
          <li><span className={styles["mini-hashtag"]}>#</span>works</li>
          <li><span className={styles["mini-hashtag"]}>#</span>about-me</li>
          <li><span className={styles["mini-hashtag"]}>#</span>contacts</li>
        </ul>
      </div>
    </>
  )
}
export default NavBar