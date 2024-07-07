import AboutItem from "../../components/AboutItem/AboutItem";
import Directory from "../../components/Directory/Directory";
import NavBar from "../../components/Navbar/NavBar";
import Show from "../../components/Show/Show";
import SkillBox from "../../components/SkillBox/SkillBox";
import images from "../../constants/images";
import styles from "./About.module.css";
import data from "../../constants/data";
import Footer from "../../components/Footer/Footer";

const About = () => {
  return (
    <>
      <NavBar />
      <Directory title="about-me" description="who am i?" />
      <AboutItem hideButton={true} />
      <Show text="skills" />
      <div className={styles["skill-container"]}>
        {data.SkillPageData.map((detail, index) => (
          <SkillBox
            title={detail.title}
            description={detail.description}
            key={index}
          />
        ))}
      </div>
      <Show text="my-fun-facts" />
      <div className={styles["fun-fact-container"]}>
        <div className={styles.text}>
          <p>I like winter more than summer</p>
          <p>I often bike with my friends</p>
          <p>I like <span className={styles.focus}>pizza</span> and <span className={styles.focus}>pasta</span></p>
          <p>
            I was in <span className={styles.focus}>Egypt</span>,{" "}
            <span className={styles.focus}>Poland</span> and{" "}
            <span className={styles.focus}>Turkey</span>
          </p>
          <p>My favorite movie is <span className={styles.focus}>Game of Thrones</span></p>
          <p>I am still in school</p>
          <p>I don't have any siblings</p>
        </div>
        <div className={styles.images}>
          <img src={images.randomLines} className={styles["random-line"]} />
          <img src={images.dots} className={styles.dots} />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default About;
