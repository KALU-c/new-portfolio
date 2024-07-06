import ContactItem from "../../components/ContactItem/ContactItem"
import Separator from "../../components/Separator/Separator"
import images from "../../constants/images"
import styles from "./Contact.module.css"

const Contact = () => {
  return (
    <>
      <Separator text="contacts"/>
      <img src={images.dots} className={styles.dots}/>
      <ContactItem />
    </>
  )
}
export default Contact