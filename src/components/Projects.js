import React, { Component } from 'react';
import './projects.css';
import GitHubIcon from '@material-ui/icons/GitHub';

class Projects extends Component {
    state={
        projectsInfo:[{name:'Akash Gupta',tech:['HTML','CSS','Javascript','React.js'],link:'https://github.com/akashgupta111/Covid-Tracker'},{name:'India Corona Tracker',tech:['HTML','CSS','Javascript','React.js'],link:'https://github.com/akashgupta111/Covid-Tracker'},{name:'Netflix-Clone',tech:['HTML','CSS','Javascript','React.js'],link:'https://github.com/akashgupta1116/Netflix-Clone'},{name:'Royal Traders Site',tech:['HTML','CSS','Javascript','React.js'],link:'https://github.com/akashgupta111/Covid-Tracker'}]
    }
    render() {
        return (
            <div className="container">
                <div className="heading">
                    <h1>Projects</h1>
                </div>
               
                <div className="projects-bottom load-animation">
                    {this.state.projectsInfo.map((item,index)=>(
                        <div key={item+index} className="card">
                            <div className="card-top">
                                <h4 className="project-name">{item.name}</h4>
                                <div className="github-icon-div">
                                   <a href={item.link} target="blank"><GitHubIcon/></a>
                                </div>
                            </div>
                            <hr/>
                            <div className="tech-div">
                                {item.tech.map(tech=>(
                                    <span key={tech} className="tech-span">{tech}</span>
                                ))}
                            </div>
                            <div>
                                
                            </div>
                            
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Projects;