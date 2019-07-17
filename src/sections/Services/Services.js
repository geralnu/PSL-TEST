import React from 'react';
import './Services.css';

const Services = (props) => {

    const {name} = props;
    return (
        <div className={name} id="services_psl">
            <div className="services__container">
                <div className="services__wrapper">
                    <h3 className="services__title">Services</h3>
                    <div className="services__info">
                        <p>Enhance your team with 
                            top-talent, cost effective, 
                            nearshore software 
                            development outsourcing 
                            services:</p>
                    </div>
                </div>
                <div className="services__list-wrapper">
                    <ul className="services__list">
                        <li>Agile - Software - Development </li>
                        <li>Nearshore IT | Outsourcing | Team augmentation</li>
                        <li>Test Automation and QA Outsourcing</li>
                        <li>DevOps transition</li>
                        <li>Cloud architecture design and implementation</li>
                        <li>Software Re-engineering </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Services;
