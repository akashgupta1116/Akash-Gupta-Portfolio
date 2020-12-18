import React from 'react';
import './projects.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import details from '../projectDetails';

const Projects =()=> {
        return (
            <div className="container">
                <div className="heading">
                    <h1>Projects</h1>
                </div>
               
                <div className="projects-bottom load-animation">
                    {details.map((item,index)=>(
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
                            
                            <div className="project-image-part">
                                <a href={item.deployedLink} target="blank"><img className="project-image" src={item.imgSrc} alt={item.name}/></a>
                            </div>
                            
                        </div>
                    ))}
                </div>
            </div>
        );
    
}

export default Projects;
