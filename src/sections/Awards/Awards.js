import React from 'react';
import './Awards.css';
import clutch from '../../assets/Clutch.png';
import esi from '../../assets/ESI.png';
import iaop from '../../assets/IAOP.png';
import devops from '../../assets/devops.png';
import forbes from '../../assets/forbes.png';
import hr from '../../assets/hr.png';
import nearshore from '../../assets/nearshore.png';
import techbeacon from '../../assets/techbeacon.png';
import fortune from '../../assets/fortune.png';

const Awards = (props) => {

    const {name} = props;
    return (
        <div className={name} id="awards_psl">
            <div className="awards__wrapper">

               <div className="award_first-row">
                    <div>
                        <h3 className="awards__title">Awards & Rankings</h3>
                        <div className="award_big-container">
                            <div>
                                <img src={clutch} alt="" />
                            </div>
                            <div>
                                <ul className="awards_text_rankin">
                                    <li>Global Leader</li>
                                    <li>Top Ten Outsourcing Companies Worldwide</li>
                                    <li>Top Latin American Outsourcing Company</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="awards_items_container">
                        <div className="awards_item">
                            <img src={esi} alt="" />
                            <p className="award_text">Software Excellence Award</p>
                        </div>
                        <div className="awards_item">
                            <img src={iaop} alt="" />
                            <p className="award_text">Top 100 Outsourcing Companies Worldwide (IAOP, 2018)</p>
                        </div>
                        <div className="awards_item">
                            <p className="award_text center">Watts Humphrey Software Process Achievement Award (IEEE & SEI)</p>
                        </div>
                    </div>
               </div>

               <div className="award_second-row">
                    <h3 className="awards_second-title">As seen in</h3>
                   <div className="awards_imgwrapper">
                        <div><img src={devops} alt="logo_devops"/></div>
                        <div><img src={forbes} alt="logo_forbes"/></div>
                        <div><img src={hr} alt="logo_hr"/></div>
                        <div><img src={nearshore} alt="logo_nearshore"/></div>
                        <div><img src={techbeacon} alt="logo_techbeacon"/></div>
                        <div><img src={fortune} alt="logo_fortune"/></div>
                   </div>
               </div>
            </div>

        </div>
    );
}

export default Awards;