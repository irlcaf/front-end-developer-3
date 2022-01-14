import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Contact from "./contact";
import About from "./about";
import Projects from "./projects";

function Navbar(){
  return(
    <div>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default function App() {
  return (
      <main>
        <Navbar/>
        <Routes>
          <Route path='/about' component={About}/>
          <Route path='/projects' component={Projects}/>
          <Route path='/contact' component={Contact}/>
        </Routes>
      </main>
  );
}
