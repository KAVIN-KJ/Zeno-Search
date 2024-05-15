import React, { useState } from "react";
import Bookmark from "./Bookmark";
import TabList from "./TabList";
import './Styles/Toolbar.css'
import {Link,  BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./Home";
function Toolbar() {
    const [tablist,setTabList] = useState([{}])
    function Refresh(event){
        window.location.reload()
    }
    function search(){
        window.location.search(document.getElementById("addressbar").value)
    }
    return(
        <>
        
        <div className="toolbar">
            <i id="leftarrow" className="fa-solid fa-circle-chevron-left"/>
            <i id="rightarrow" className="fa-solid fa-circle-chevron-right"/>
            <i onClick={Refresh} id="reload" className="fa-solid fa-arrows-rotate" title="Reload"/>
            <i className="fa-solid fa-house" title="HomePage"/>
            <i id="siteInfo" className="fa-solid fa-earth-asia"/>
            <input onKeyDown={(e) => {e.KeyboardEvent==KeyboardEvent.enter ? console.log(this.value) : console.log("Nothing")}} id ="addressbar" className="addressbar" type="text" title="Address bar"/>
            <i id = "bookmark" className="fa-solid fa-book-bookmark"/>
            <i onClick={search} id = "zoom" className="fa-solid fa-magnifying-glass" title="Zoom"/>
            <i id="extensions" className="fa-solid fa-plug" title="Plugins"/>
            <i id="profile" className="fa-solid fa-user" title="Profile"/>
            <i id="mute" className="fa-solid fa-volume-mute" title="Mute site"/>
            <i id="menu" className="fa-solid fa-bars" title="More Options"/>
        </div>
        </>
    );
}

export default Toolbar