import Hero from "./components/Hero/Hero"
import NavBar from "./components/Navbar/NavBar"
import ProjectCard from "./components/Project-Card/ProjectCard"
import Quote from "./components/Quote/Quote"
import Separator from "./components/Separator/Separator"

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Quote />
      <Separator />
      <ProjectCard />
    </div>
  )
}

export default App
