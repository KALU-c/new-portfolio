import Hero from "../components/Hero/Hero"
import NavBar from "../components/Navbar/NavBar"
import ProjectCard from "../container/ProjectCard/ProjectCard"
import Quote from "../components/Quote/Quote"
import Skills from "../container/Skills/Skills"
import AboutContainer from "../container/About/AboutContainer"
import Contact from "../container/Contact/Contact"
import Footer from "../components/Footer/Footer"

function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Quote />
      <ProjectCard />
      <Skills />
      <AboutContainer />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home