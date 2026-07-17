import Preloader from "./components/Preloader.jsx";
import Cursor from "./components/Cursor.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import CursorGlow from "./components/CursorGlow.jsx";
import SocialRail from "./components/SocialRail.jsx";
import BackToTop from "./components/BackToTop.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Marquee from "./components/Marquee.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Journey from "./components/Journey.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import TerminalOverlay from "./components/TerminalOverlay.jsx";
import useCardSpotlight from "./hooks/useCardSpotlight";

export default function App() {
  useCardSpotlight();

  return (
    <>
      <Preloader />
      <Cursor />
      <CursorGlow />
      <ScrollProgress />
      <SocialRail />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <TerminalOverlay />
    </>
  );
}
