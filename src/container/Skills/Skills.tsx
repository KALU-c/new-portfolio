import Separator from "../../components/Separator/Separator";
import styles from "./Skills.module.css";
import images from "../../constants/images";
import SkillBox from "../../components/SkillBox/SkillBox";

const Skills = () => {
  return (
    <>
      <Separator text="Skills" />
      <div className={styles["skill-container"]}>
        <div className={styles.images}>
          <img src={images.dots} className={styles.img1} />
          <img src={images.dots} className={styles.img2} />
          <img src={images.rectangle} className={styles.img3} />
          <img src={images.rectangle} className={styles.img4} />
          <img src={images.randomLines} className={styles.img5} />
        </div>
        <div className={styles.card}>
          <div className={styles["skill-box"]}>
            <div className={styles.box}>
              <SkillBox
                title="Languages"
                description="Typescript C++ Java Javascript"
              />
            </div>
            <div className={[styles["skill-box-2"], styles.box].join(" ")}>
              <SkillBox
                title="Databases"
                description="MSSQL MySQL PostgreSQL Mongo"
              />{" "}
              <SkillBox title="Other" description="HTML CSS EJS SCSS REST" />
            </div>
            <div className={[styles["skill-box-2"], styles.box].join(" ")}>
              <SkillBox
                title="Tools"
                description="VSCode Linux Figma Arc Git Font Awesome"
              />{" "}
              <SkillBox
                title="Frameworks"
                description="React Vue Discord.js Express.js Flask"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Skills;
