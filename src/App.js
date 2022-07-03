import React,{lazy,Suspense} from 'react';
import './App.css';
import Navigation from './components/Navigation';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Footer from './components/Footer';
import Loader from './components/Loader'

const Home = lazy(()=> import('./components/Home'));
const About = lazy(()=> import('./components/About'));
const Skills = lazy(()=> import('./components/Skills'));
const Projects = lazy(()=> import('./components/Projects'));
const Contact = lazy(()=> import('./components/Contact'));
const Education = lazy(()=> import('./components/Education'));

const App= () => {
  return (
    <div className="App">
      <Suspense fallback={<Loader/>}>
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
      </Suspense>
     
    </div>
  );
}

export default App;
