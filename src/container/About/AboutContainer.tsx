import AboutItem from "../../components/AboutItem/AboutItem"
import Separator from "../../components/Separator/Separator"
import images from "../../constants/images"
import styles from "./AboutContainer.module.css"

const AboutContainer = () => {
  return (
    <>
      <Separator text="about-me"/>
      <img src={images.dots} className={styles.dots} />
      <img src={images.rectangle} className={styles.rectangle} />
      <div>
        <AboutItem />
      </div>
    </>
  )
}
export default AboutContainer