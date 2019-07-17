import React from 'react';
import './Nutshell.css';

const Nutshell = (props) => {

    const {name} = props;
    return (
        <div className={name} id="nutshell_psl">
            <div className="nutshell__container">
                <div>
                    <h3 className="nutshell__title">in a Nutshell</h3>
                </div>
                <div className="nutshell__data">
                    <div className="nutshell__item">
                        <div className="nutshell__subtitle">650+</div>
                        <h4>engineers</h4>
                    </div>
                    <div className="nutshell__item">
                        <div className="nutshell__subtitle">33+</div>
                        <h4>Years’ experience</h4>
                    </div>
                    <div className="nutshell__item">
                        <div className="nutshell__subtitle p15">Agile</div>
                        <h4>experts + CMMi 5 + ISO27001</h4>
                    </div>
                    <div className="nutshell__item">
                        <div className="nutshell__subtitle p15">1.200+</div>
                        <h4>projects successfully delivered</h4>
                    </div>
                    <div className="nutshell__item">
                        <div className="nutshell__subtitle nb">5</div>
                        <h4>development centers in LATAM</h4>
                    </div>
                </div>
            </div>
        </div>
    );
    
}

export default Nutshell;
