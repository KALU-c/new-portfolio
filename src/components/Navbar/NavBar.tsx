import styles from "./NavBar.module.css";
import images from "../../constants/images";
import useCustomNavigate from "../../Hooks/useCustomNavigate";
import { useState } from "react";

const NavBar = () => {
  const [ menuOpen, isMenuOpen ] = useState(false);
  const { goToHome, goToProjects, goToAbout, goToContact, goToGithub, goToTelegram, goToLinkedin } = useCustomNavigate();

  function handleMenu() {
    isMenuOpen(!menuOpen);
  }
  
  return (
    <>
      <div className={styles["sticky-nav"]}>
        <img src={images.verticalLine} className={styles["vertical-line"]} />
        <img src={images.github} className={styles.github} onClick={goToGithub}/>
        <img src={images.telegram} className={styles.telegram} onClick={goToTelegram}/>
        <img src={images.linkedin} className={styles.linkedin} onClick={goToLinkedin}/>
      </div>
      <div className={styles["nav-container"]}>
        <div className={styles.logo}>
          <p className={styles.logo} onClick={goToHome}>Kalu</p>
          {
            menuOpen 
            ? <img src={images.xmark} onClick={handleMenu} className={styles.menu}/>
            : <img src={images.bars} onClick={handleMenu} className={styles.menu}/>
          }
        </div>
        <ul className={`${menuOpen ? styles.open : styles.close}`}>
          <li onClick={goToHome}><span className={styles["mini-hashtag"]}>#</span>home</li>
          <li onClick={goToProjects}><span className={styles["mini-hashtag"]}>#</span>projects</li>
          <li onClick={goToAbout}><span className={styles["mini-hashtag"]}>#</span>about-me</li>
          <li onClick={goToContact}><span className={styles["mini-hashtag"]}>#</span>contacts</li>
        </ul>
      </div>
    </>
  )
}
export default NavBar