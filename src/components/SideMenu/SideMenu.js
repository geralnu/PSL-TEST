import React from 'react';
import "./SideMenu.css";

const  SideMenu = (props) => {
    let menuClasses = 'side-menu';
    if(props.show){
        menuClasses = 'side-menu open';
    }
    return (
        <nav className={menuClasses}>
            <div className="menuWrapper">
                <ul>
                    <li className="side-menu_list"><a href="https://www.pslcorp.com/about" >our DNA</a></li>
                    <li className="side-menu_list"><a href="https://www.pslcorp.com/what-we-do/capabilities" >What we do</a></li>
                    <li className="side-menu_list"><a href="https://www.pslcorp.com/careers" >Careers</a></li>
                    <li className="side-menu_list"><a href="https://www.pslcorp.com/insights" >Our Insights</a></li>
                    <li className="side-menu_list"><a href="https://www.pslcorp.com/contact" >Contact</a></li>
                </ul>
            </div>
        </nav>
        );
}

export default SideMenu;