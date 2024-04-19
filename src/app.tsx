import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Skills } from "@/components/skills"
import { useRef, useState } from "react";
import { Projects } from "./components/projects"
import { Footer } from "./components/footer";

export function App() {
  const [darkMode, setDarkMode] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  return (
    <div key="1" className={`app ${darkMode ? 'dark' : ''}`}>
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        heroRef={heroRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
      />
      <main className="flex-1">
        <section className="w-full py-12 md:py-16 lg:py-20 xl:py-24 dark:text-zinc-200 dark:bg-zinc-900" id="hero" ref={heroRef}>
          <Hero Ref={projectsRef} goingsTo={"#projects"}/>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-200" id="skills" ref={skillsRef}>
          <Skills/>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 dark:text-zinc-200 dark:bg-zinc-900" id="projects" ref={projectsRef}>
          <Projects/>
        </section>
      </main>
      <Footer/>
    </div>
  )
}