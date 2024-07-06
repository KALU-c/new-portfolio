import Home from "./pages/Home"
import Projects from "./pages/Projects"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/projects" element={<Projects />}/>
      </Routes>
    </div>
  )
}

export default App
