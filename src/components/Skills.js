import React from 'react';
import './skills.css'

const Skills = () => {
    
        return (
            <div className="container">
                <div className="heading">
                    <h1>Skills</h1>
                </div>
                <div className="skills-bottom load-animation">
                    <div>
                        <h4>Languages</h4>
                        <ul className="skills-list">
                            <li>Javascript</li>
                            <li>HTML</li>
                            <li>CSS</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Web Dev</h4>
                        <ul className="skills-list">
                            <li>Javascript</li>
                            <li>React.js</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Bootstrap</li>
                            <li>Git</li>
                            <li>Github</li>
                            <li>Restful Api</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Tools</h4>
                        <ul className="skills-list">
                            <li>Git</li>
                            <li>Github</li>
                            <li>VS Code</li>
                            <li>Postman</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Others</h4>
                        <ul className="skills-list">
                            <li>Data Structures</li>
                            <li>Problem Solving</li>
                            <li>OOP</li>
                            <li>Functional Programming</li>
                        </ul>
                    </div>                    
                </div>
            </div>
        );
    
}

export default Skills;