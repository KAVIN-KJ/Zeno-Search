import React from "react";
import logo from './assets/Logo.png'
import './Styles/About.css'
function About(){
    return(
        <div className="about">
            <i id="bolt" class="fa-solid fa-bolt"></i>  
            <div className="aboutContent">

            <img src={logo} alt="logo" className="logo"/>
               <p className="aboutParagraph">Welcome to Zeno Search — your destination for a streamlined
                search experience. Born out of a passion for innovation, Zeno
                Search is committed to delivering fast, accurate results while
                prioritizing user privacy and security. Our dedicated team
                combines expertise in                                      
 search technology to redefine your 
                online exploration. We thrive on transparency, value user
                feedback, and continually evolve to be your trusted search
                companion. Choose Zeno Search for an efficient, relevant, 
                and secure journey through the web. Thank you for being 
                part of our search community.</p>
            </div>
        </div>
    )
}

export default About