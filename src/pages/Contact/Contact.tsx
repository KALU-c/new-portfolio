import ContactItem from "../../components/ContactItem/ContactItem";
import styles from "./Contact.module.css";
import NavBar from "../../components/Navbar/NavBar";
import Directory from "../../components/Directory/Directory";
import Show from "../../components/Show/Show";
import images from "../../constants/images";
import Footer from "../../components/Footer/Footer";
import useCustomNavigate from "../../Hooks/useCustomNavigate";

const Contact = () => {
  const { goToTelegram, goToLinkedin } = useCustomNavigate();
  return (
    <div>
      <NavBar />
      <Directory title="contacts" description="How to contact me?" />
      <ContactItem />
      <Show text="all-media" />
      <div className={styles["contact-images"]}>
        <div className={styles["contact-images-item"]} onClick={goToTelegram}>
          <img src={images.telegram} />
          <p>@Real_Kal</p>
        </div>
        <div className={styles["contact-images-item"]} onClick={goToLinkedin}>
          <img src={images.linkedin} />
          <p>Endekalu Zemenu</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Contact;
