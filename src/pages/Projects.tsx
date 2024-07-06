import Directory from "../components/Directory/Directory"
import Footer from "../components/Footer/Footer"
import NavBar from "../components/Navbar/NavBar"
import ProjectCardItem from "../components/ProjectCardItems/ProjectCardItem"
import Show from "../components/Show/Show"
import SmallProjectCard from "../components/SmallProjectCard/SmallProjectCard"
import data from "../constants/data"
import styles from "./Projects.module.css"

const Projects = () => {
  return (
    <div>
      <NavBar />
      <Directory title="projects" description="list of my projects"/>
      <Show text="complete-apps"/>
      <div className={styles["card-container"]}>
        {
          data.ProjectPageData.map(detail => (
            <ProjectCardItem
              imgURL={detail.imgURL}
              languages={detail.languages}
              title={detail.title}
              description={detail.description}
            />
          ))
        }
      </div>
      <Show text="small-projects"/>
      <div className={styles["small-card-container"]}>
        {
          data.SmallProjectsData.map(detail => (
            <SmallProjectCard
              languages={detail.languages}
              title={detail.title}
              description={detail.description} 
            />
          ))
        }
      </div>
      <Footer />
    </div>
  )
}
export default Projects