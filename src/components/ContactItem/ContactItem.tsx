import styles from "./ContactItem.module.css";
import images from "../../constants/images";

const ContactItem = () => {
  return (
    <div className={styles["contact-container"]}>
      <p className={styles.text}>
        I'm interested in freelance opportunities. However, if you have other
        requests or questions, don't hesitate to contact me
      </p>
      <div className={styles["contact-card"]}>
        <p className={styles.message}>Message me here</p>
        <div className={styles.telegram}>
          <img src={images.telegram} />
          <p>@Real_Kal</p>
        </div>
        <div className={styles.email}>
          <img src={images.email} />
          <p>endekaluzemenu2134@gmail.com</p>
        </div>
        <div>
          <p className={styles.phone}>+251 934-898-608</p>
        </div>
      </div>
    </div>
  );
};
export default ContactItem;
