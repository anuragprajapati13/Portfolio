import React from "react";
import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Education from "./Components/Education/Education";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import Achievements from "./Components/Achievements/Achievements";
import Certificates from "./Components/Certificates/Certificates";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div>
      <Nav />
      <Home />
      <About />
      <Education />
      <Skills />
      <Achievements />
      <Projects />
      <Certificates />
      <Contact />
    </div>
  );
}

export default App;
