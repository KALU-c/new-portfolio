import styles from "./ContactItem.module.css";
import images from "../../constants/images";
import useCustomNavigate from "../../Hooks/useCustomNavigate";

const ContactItem = () => {
  const { goToTelegram, goToLinkedin } = useCustomNavigate();
  return (
    <div className={styles["contact-container"]}>
      <p className={styles.text}>
        I'm open to freelance opportunities. Feel free to reach out for any
        other requests or questions.
      </p>
      <div className={styles["contact-card"]}>
        <p className={styles.message}>Message me here</p>
        <div className={styles.telegram} onClick={goToTelegram}>
          <img src={images.telegram} />
          <p>@Real_Kal</p>
        </div>
        <div className={styles.linkedin} onClick={goToLinkedin}>
          <img src={images.linkedin} />
          <p>Endekalu Zemenu</p>
        </div>
      </div>
    </div>
  );
};
export default ContactItem;
