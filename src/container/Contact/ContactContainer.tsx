import ContactItem from "../../components/ContactItem/ContactItem"
import Separator from "../../components/Separator/Separator"
import images from "../../constants/images"
import styles from "./ContactContainer.module.css"

const ContactContainer = () => {
  return (
    <>
      <Separator text="contacts"/>
      <img src={images.dots} className={styles.dots}/>
      <ContactItem />
    </>
  )
}
export default ContactContainer