import React from 'react';
import './Main.css';

const Main = (props) => {

    const {name} = props;
    return (
        <div className={name} id="main">
            <div className="main__wrapper">

                <h3 className="main__title">Our passion is coding the future.</h3>
                <button className="psl_button_outline">Contact Us Today!</button>
            </div>

        </div>
    );
}

export default Main;
