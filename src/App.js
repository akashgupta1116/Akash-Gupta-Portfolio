import React from 'react';
import './App.css';
import Home from './components/Home';
import Navigation from './components/Navigation';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
        <Switch>
          <Route exact path="/about">
            <About/> 
          </Route>
          <Route exact path="/skills">
            <Skills/> 
          </Route>
          <Route exact path="/projects">
            <Projects/>
          </Route>
          <Route exact path="/education">
            <Education/>
          </Route>
          <Route exact path="/contact">
            <Contact/>
          </Route>
          <Route exact path="/">
            <Home/> 
          </Route>
        </Switch>
        <Footer/>
      </Router>
     
    </div>
  );
}

export default App;
