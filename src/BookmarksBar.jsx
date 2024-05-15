import React from "react";
import Bookmark from "./Bookmark";
import Search from "./Search";
import { Link } from "react-router-dom";
import './Styles/BookmarksBar.css'
import Contact from "./Contact";
function BookmarksBar(){
   const NavlinkStyle = {textDecoration : "none",color:"black"}
    return(
        <div className="bookmarksContainer">

        <div className="bookmarksbar">
            <Link style={NavlinkStyle} to='/Home'><Bookmark text="Zeno Search"/></Link>
            <Link style={NavlinkStyle} to='/ImageSearch'><Bookmark text="Image Search"/></Link>
            <Link style={NavlinkStyle} to='/Dictionary'><Bookmark text="Zeno Word"/></Link>
            <Link style={NavlinkStyle} to='/Weather'><Bookmark text="Zeno Weather"/></Link>
            <Link style={NavlinkStyle} to='/ZenoNews'><Bookmark text="Zeno News"/></Link>
            <Link style={NavlinkStyle} to='/About'><Bookmark text="About Zeno"/></Link>
            <Link style={NavlinkStyle} to='/Contact'><Bookmark text="Contact us"/></Link>

        </div>
        </div>
    )
}

export default BookmarksBar