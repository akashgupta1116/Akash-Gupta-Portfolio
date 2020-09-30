import React from 'react';
import './contact.css';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const Contact = () => {
    return (
        <div className="container">
            <div className="heading">
                <h1>Contact</h1>
            </div>
            <div className="contacts-bottom load-animation">
                <div className="contact-div">
                    <MailOutlineIcon style={{fontSize:'200px'}}/>
                    <a className="contact-btn" href="mailto:guptaakash1116@gmail.com" target="blank">Email me</a>
                </div>
                <div className="contact-div">
                    <WhatsAppIcon style={{fontSize:'200px'}}/>
                    <a className="contact-btn" href="https://wa.me/9953415001" target="blank">Let's Chat</a>
                </div>
            </div>
        </div>
    );
};

export default Contact;