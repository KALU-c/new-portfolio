import styles from "./Directory.module.css";

interface Props {
  title: string;
  description: string;
}

const Directory = ({ title, description }: Props) => {
  return (
    <div className={styles["directory-container"]}>
      <p className={styles.directory}>
        <span className={styles.slash}>/</span>
        {title}
      </p>
      <p className={styles.description}>{description}</p>
    </div>
  );
};
export default Directory;
