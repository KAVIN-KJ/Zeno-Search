import React from "react";
import './Styles/Bookmark.css'
function Bookmark(props){
    return(
        <div className="bookmark">
                <div className="container">
                    <div>
                    <i id="icon" className="fa-solid fa-bookmark"></i>
                    </div>
                    <div>
                    <a className="anchor" href={props.url}>{props.text}</a>
                    </div>
                </div>
        </div>
    )
}
Bookmark.defaultProps = {
    url:"#",
    text:"Bookmark"
}
export default Bookmark