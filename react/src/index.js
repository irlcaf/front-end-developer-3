import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./index.css";
import Contact from "./routes/contact";
import About from "./routes/about";
import Projects from "./routes/projects";
// ========================================

function Navbar() {
  return (
    <div>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </Routes>
    </div>
  );
}

function routing(){
  return(
    <Router>
      <App/>
    </Router>
  );
};

function Pills(){
  return(
    <h1>Im a pill</h1>
  )
}

function Project(props){
  return(
    /*Able to build reuisable components (with and without JSX) */
    <div className="project-container">
      <div className="project-info">
        <h1 className="project-title">{props.project.title}</h1>
        <img className="project-image">{props.project.image}</img>
        <p className="project-description">{props.project.description}</p>
      </div>
      <div className = "project-technical-info">
        <a>Link to github</a>
        <Pills >Programming Languages Used</Pills>
      </div>
    </div>
  );
}

/**HANDLING EVENTS Not usre if this is how to manage events, just an example */
function Buttonproject(){
  function handleClick(e){
    e.preventDefault();
    console.log("you clicked me, going to the next project");
  }
  return(
    <form onClick={handleClick}>
      <button type="submit">Submit</button>
    </form>
  )
}

/*Converting a function to a ES6  class */
class Project extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      project: {
        title: "Im just a title",
        image: "Im just the soruce to an image",
        description: "Im just a description"
      },
      click: true,
    }
    this.anotherHandleClick = this.anotherHandleClick.bind(this);
  }
  //Demostrating lifecycle
  componentDidMount(){
    this.timerID = setInterval(
      () => this.click(),
      1000
    );
  }
  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  click(){
    this.setState({
      project:{
        title:"Just another title",
        image:"Just another image",
        description:"Just another description"
      },
    });
  }
  //Example for handling events from a component
  handleClick(){
    this.setState(prevState => ({
      click: !prevState.click
    }));
  }

  render(){
    return(
      <div className="project-container">
      <div className="project-info">
        <h1 className="project-title">{this.state.project.title}</h1>
        <img className="project-image">{this.state.project.image}</img>
        <p className="project-description">{this.state.project.description}</p>
      </div>
      <div className = "project-technical-info">
        <a>Link to github</a>
        <Pills >Programming Languages Used</Pills>
      </div>
      <Buttonproject onClick={this.anotherHandleClick}>Just a button</Buttonproject>
    </div>
    );
  }
}


ReactDOM.render(
  /* Able to pass components to other comopnents in props */
  <Project />, /*project={'title:"My title"','image:"src={}','description: "Im just a project description"'} */
  document.getElementById("root")
);
