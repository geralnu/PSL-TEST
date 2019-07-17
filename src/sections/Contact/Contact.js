import React from 'react';
import img from '../../assets/logo.png';
import './Contact.css';
const Contact = (props) => {
    const { name } = props;
    return (
        <footer className={name} id="contact_psl" >
            <div className="contact_container">
                <div className="contact_col">
                    <img className="contact_logo" src={img} alt=""/>
                    <p>Tired of trying to coordinate time zones?</p>
                    <button className="contact_btn">Let’s chat</button>
                    <p>Lookinf to scale your software team? Leave it to the experts.</p>
                    <button className="contact_btn">Give us a Call</button>
                </div>
                <div className="contact_col">
                    <h3 className="contact_title">IT outsourcing services</h3>
                    <ul className="contact_it">
                        <li>Agile so are de elopment</li>
                        <li>Nearshore IT outsourcing team augmentation</li>
                        <li>Test Automation and QA outsourcing</li>
                        <li>DevOps transition support</li>
                        <li>Cloud architecture design and implementation</li>
                    </ul>
                </div>
                <div className="contact_col">
                    <h3 className="contact_title">Our DNA</h3>
                    <ul className="contact_it">
                        <li>About PSL Outsourcing</li>
                        <li>Culture</li>
                        <li>Telent</li>
                        <li>CSR</li>
                        <li>Contact us</li>
                    </ul>
                </div>
                <div className="contact_col">
                    <h3 className="contact_title">About PSL</h3>
                    <p>Building on over 30 years
                    of experience we employ
                    cu a technology to 
                    deli er orldass solutions from a neashore model
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Contact;