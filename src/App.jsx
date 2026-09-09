import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Education from "./components/Education.jsx";
import Certifications from "./components/Certifications.jsx";
import Achievements from "./components/Achievements.jsx";
import Resume from "./components/Resume.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import BackToTop from "./components/BackToTop.jsx";
import { useTheme } from "./hooks/useTheme.js";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Achievements />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
