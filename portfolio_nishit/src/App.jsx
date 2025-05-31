import Home from "./Components/Home/Home"
import Navbar from "./Components/Navbar/Navbar"
import About from "./Components/About/About"
import Skills from "./Components/Skills/Skills"
import Projects from "./Components/Projects/Projects"
import Contact from "./Components/Contact/Contact"
function App() {
  return (
    <div className="bg-[#171d32]  h-auto w-full overflow-hidden">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects/>
      <br/>
      <Contact/>
    </div>
  )
}

export default App
