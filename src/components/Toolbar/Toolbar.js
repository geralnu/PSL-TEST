import React from 'react';
import { ToggleButton } from "../SideMenu/ToggleButton";
import './Toolbar.css';
import img from '../../assets/logo.png';
import message from '../../assets/message.svg'
import menu from '../../assets/nav.svg';
const Toolbar = (props) => {

    return (
        <header className="toolbar">
            <nav className="toolbar__navigation">
                
                <div className="toolbar__logo"><img src={img} alt="psl_logo"/></div>
                <div className="spacer"></div>
                
                <div>
                    <ToggleButton click={props.menuClickHandler} image={menu} type={"toggle-button"}/>
                </div>
            </nav>
            <div>
                <ToggleButton click={props.emailClickHandler} image={message} type={"toggle-button email"}/>
            </div>
        </header>
    );
}

export default Toolbar;