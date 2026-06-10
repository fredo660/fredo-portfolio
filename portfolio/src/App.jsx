import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Service from "./components/Service"
import Experience from "./components/Experience"

export default function App() {
  const [darkMode, setDarkMode] = useState(true) // dark par défaut

  // Charger thème sauvegardé
  useEffect(() => {
    const saved = localStorage.getItem("theme")
    // Si rien de sauvegardé → dark par défaut
    if (saved === "light") {
      setDarkMode(false)
      document.documentElement.classList.remove("dark")
    } else {
      setDarkMode(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleDarkMode = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    if (newMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  return (
    <div className="bg-white text-black dark:bg-gray-950 dark:text-white transition-colors duration-300">
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Hero />
      <About />
      <Service />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  )
}