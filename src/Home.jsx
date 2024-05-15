import React from "react";
import logo from './assets/Logo.png'
import './Styles/Home.css'
import Search from "./Search";
import DuckDuckGoSearch from "./DuckDuckGoSearch";
function Home(){
      return(
       <div>

          <div className='Home'>
            <img className='image' src={logo} alt="logo" title="Zeno"/>
            <label className="label" htmlFor="image">powered by DuckDuckGo</label>
            <DuckDuckGoSearch/>
          </div> 
          <div className="background"></div>
      </div>
      );
}

export default Home