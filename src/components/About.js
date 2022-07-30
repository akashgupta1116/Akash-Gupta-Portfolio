import React from 'react';
import './about.css'

const About = () => {
        return (
            <div className="container" >
                <div className="heading">
                    <h1>About</h1>
                    <p className="load-animation">Hi, I am Akash Gupta. I am a 
                        Software Engineer that is passionate
                        about coding and creating awesome software. I love learning new
                        technologies and building stuff from start to finish, specially 
                        web applications!
                    </p>

                </div>
                <div className="about-content load-animation">
                    <div className="about-content-left">
                        <h3>Favourites</h3>
                        <p><strong>Food: </strong>Pizza, Chocolate, Indian</p>
                        <p><strong>Sports: </strong>Cricket, Basketball</p>
                        <p><strong>Video Games: </strong>FIFA, GTA</p>
                        <p><strong>Movie Genres: </strong>Sci-Fi,Action,History</p>
                    </div>
                    <div className="about-content-right">
                        <div className="my-image-div">
                            <img className="my-image"src={require('../assets/akash-profile.jpeg')} alt="me"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


export default About;