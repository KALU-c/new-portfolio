import styles from "./Show.module.css";

interface Props {
  text: string
}

const Show = ({ text }: Props ) => {
  return (
    <p className={styles.show}>
      <span className={styles.hashtag}>#</span>{text}
    </p>
  );
};
export default Show;
