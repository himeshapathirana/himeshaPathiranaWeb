import React from "react";
import Navbar from "./components/nabbar/navbar";
import Hero from "./components/nabbar/Hero/Hero";
import About from "./components/nabbar/About/About";
import Projects from "./components/nabbar/Projects/projects";
import Education from "./components/nabbar/Projects/Education/Education";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <About/>
      <Projects/>
      <Education/>
      <Contact/>
     
    </div>
  );
}

export default App;
