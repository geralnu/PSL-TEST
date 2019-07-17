import React from 'react';
import './Clients.css';
import  logo1 from "../../assets/LogoBrinks.svg";
import  logo2 from "../../assets/LogoCopa.svg";
import  logo3 from "../../assets/LogoCoreOS.svg";
import  logo4 from "../../assets/LogoDeloitte.svg";
import  logo5 from "../../assets/LogoHere.svg";
import  logo6 from "../../assets/LogoBMC.svg";
import  logo7 from "../../assets/LogoMediabrands.svg";
import  logo8 from "../../assets/LogoMicrosoft.svg";
import  logo9 from "../../assets/LogoMulesoft.svg";
import  logo10 from "../../assets/logoSafeFleet.svg";
import  logo11 from "../../assets/LogoXenial.svg";
import  logo12 from "../../assets/LogoPowerplan.svg";
import  logo13 from "../../assets/LogoLoanlogics.svg";
import  logo14 from "../../assets/LogoFlex.svg";
import  logo15 from "../../assets/LogoLFL.svg";
const Clients = (props) => {

    const {name} = props;
    return (
        <div className={name} id="clients_psl">
            <div className="clients__container">

                <h3 className="clients__title">Our clients</h3>
                <div className="clients__wrapper">
                    <div><img src={logo1} alt=""/></div>
                    <div><img src={logo2} alt=""/></div>
                    <div><img src={logo3} alt=""/></div>
                    <div><img src={logo4} alt=""/></div>
                    <div><img src={logo5} alt=""/></div>
                    <div><img src={logo6} alt=""/></div>
                    <div><img src={logo7} alt=""/></div>
                    <div><img src={logo8} alt=""/></div>
                    <div><img src={logo9} alt=""/></div>
                    <div><img src={logo10} alt=""/></div>
                    <div><img src={logo11} alt=""/></div>
                    <div><img src={logo12} alt=""/></div>
                    <div><img src={logo13} alt=""/></div>
                    <div><img src={logo14} alt=""/></div>
                    <div><img src={logo15} alt="" /></div>
                </div>
            </div>

        </div>
    );
}

export default Clients;
