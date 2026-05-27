import Home from "./Components/Home/Home"
import Navbar from "./Components/Navbar/Navbar"
import About from "./Components/About/About"
import Skills from "./Components/Skills/Skills"
import Projects from "./Components/Projects/Projects"
import Contact from "./Components/Contact/Contact"

function App() {
  return (
    <div className="min-h-screen w-full overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(110,168,254,0.18),_transparent_28%),linear-gradient(180deg,_#09111f_0%,_#0f1729_45%,_#0b1220_100%)] text-white">
      <div className="pointer-events-none fixed inset-0 -z-0 opacity-70">
        <div className="absolute left-[6%] top-20 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute right-[8%] top-[24rem] h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-24 left-1/3 h-64 w-64 rounded-full bg-teal-300/10 blur-3xl" />
      </div>

      <Navbar />

      <main className="relative z-10">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
