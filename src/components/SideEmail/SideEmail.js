import React from 'react';
import "./SideEmail.css";

const  SideEmail = (props) => {
    let menuClasses = 'side-email';
    if(props.show){
        menuClasses = 'side-email open';
    }
    return (
        <nav className={menuClasses}>
           <div className="side-email_wrapper">
                <h3 className="side-email_title">Let's start a conversation</h3>
               <div className="side-email_form">
                   <form action="">
                        <input className="side-email_input" type="text" placeholder="Your Name"/>
                       <input className="side-email_input" type="text" placeholder="Email Address"/>
                       <input className="side-email_input" type="text" placeholder="Phone - City"/>
                        <textarea className="side-email_input" name="" id="" cols="30" rows="8" placeholder="Message"></textarea>
                        <button className="side-email_btn">Send</button>
                   </form>
               </div>
           </div>
            
        </nav>
        );
}

export default SideEmail;