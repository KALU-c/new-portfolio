import Hero from "./components/Hero/Hero"
import NavBar from "./components/Navbar/NavBar"
import ProjectCard from "./container/ProjectCard/ProjectCard"
import Quote from "./components/Quote/Quote"
import Skills from "./container/Skills/Skills"

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Quote />
      <ProjectCard />
      <Skills />
    </div>
  )
}

export default App
