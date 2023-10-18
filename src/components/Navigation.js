import React,{useState} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import './navigation.css';
import {Link} from 'react-router-dom';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    
    return (
            <Navbar dark className="navbar-div"  expand="md">
                    <NavbarBrand href="/"><img className="home-icon"src={require('../assets/bear-icon.png')} alt="logo"/></NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <Link className="links" to="/about">About</Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="links" to="/skills">Skills</Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="links" to="/projects">Projects</Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="links" to="/education">Education</Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="links" to="/contact">Contact</Link>
                                </NavItem>
                            </Nav>
                            <Nav>
                                <NavLink className="resume-btn" href="https://drive.google.com/file/d/1QjjWi6wH14yEVbYq22etJI7E1_nDj3_o/view" target="blank">Resume</NavLink>
                                <NavLink className="nav-social-icons" href="https://github.com/akashgupta1116" target="blank"><GitHubIcon/></NavLink>
                                <NavLink className="nav-social-icons" href="https://www.linkedin.com/in/akash-gupta-134a50187/" target="blank"><LinkedInIcon/></NavLink>
                                <NavLink className="nav-social-icons" href="https://www.instagram.com/akashgupta6/" target="blank"><InstagramIcon/></NavLink>
                            </Nav>
                    </Collapse>
            </Navbar>
            
    );
};

export default Navigation;
