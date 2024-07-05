import styles from "./SkillBox.module.css"

interface Props {
  title: string
  description: string
}

const SkillBox = ({ title, description }: Props) => {
  return (
    <div className={styles["skill-box-container"]}>
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
    </div>
  )
}
export default SkillBox