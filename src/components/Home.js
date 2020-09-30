import React from 'react';
import './home.css';
import { Link } from 'react-router-dom'

const Home = () => {
   
        return (
            <div className="home-continer">
               <h1 className="home-heading">Hello World</h1>
               <div className="load-animation">
                    <p>I'm Akash <br/> a Javascript Developer</p>
                    <Link className="learn-more-btn" to="/about">Learn More</Link>
               </div>
            </div>
        );
    
}

export default Home;