import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact"
import Home from "./pages/Home"
import Projects from "./pages/Projects/Projects"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </div>
  )
}

export default App
