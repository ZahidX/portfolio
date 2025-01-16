import About from "./pages/About";
import Skills from "./pages/Skill";
import Experence from "./pages/Experience";
import Services from "./pages/Services";
import Project from "./pages/Project";
import Extra from "./pages/Extra";
import Hobby from "./pages/Hobby";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Home from "./pages/Home"; // Corrected import path
import "@fortawesome/fontawesome-free/css/all.min.css";


export default function Page() {
  return (
    <div>
      <Home /> {/* Call the Home2 component here */}

      <About />
      <Skills />
      <Experence />
      <Services />
      <Project />
      <Extra />
      <Hobby />
      <Contact />
      <Footer />
    </div>
  );
}
