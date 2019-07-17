import React from 'react';
import './About.css';


const About = (props) => {
    
    const {name}= props;
    return ( <div className ={name} id="about_psl">
        <div className="content">
            <div className="wrapper">
                <p className="about__sideTitles">
                    <span>Nearshore Software</span>
                    <span>Development </span>
                    <span>Outsourcing</span>
                    <span>Offshore Outsourcing </span>
                    <span>Development Center</span>
                </p>
            </div>
            <div className="wrapper">
                <p className="about__text">
                    PSL operates at the intersection of drive, quality, and innovation. 
                    As a purpose-led organization, we strive to become your software 
                    outsourcing development partner. Our goal is to provide the highest 
                    quality agile development services from nearshore centers in Latin America. <br/><br/>
                    Ready to deploy nearshore outsourcing teams?
                </p>
            </div>
        </div>
    </div>
    );
}

export default About;