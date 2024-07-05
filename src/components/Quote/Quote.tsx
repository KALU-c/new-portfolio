import styles from "./Quote.module.css";
import images from "../../constants/images";

const Quote = () => {
  return (
    <div className={styles["quote-main-container"]}>
      <div className={styles["semi-rectangle"]}>
        <img
          src={images.semiRectangle}
          className={styles["semi-rectangle-img"]}
        />
      </div>
      <div className={styles["quote-container"]}>
        <div className={styles["mini-container"]}>
          <div className={styles["quotation-title"]}>
            <img src={images.quotationMark} className={styles.img1} />
            <p>With great power comes great electricity bill</p>
            <img src={images.quotationMark} className={styles.img2} />
          </div>
          <p className={styles.author}>- Dr. Who</p>
        </div>
      </div>
    </div>
  );
};
export default Quote;
