import React from "react";
import './Styles/SearchResult.css'
function SearchResult(props){

    return(
        <div className="search-container">
            <img style={{width:"30px",height:"auto"}} src={props.icon} alt="" />
            <a target="blank" className="url" href={props.url}>
                <h1>{props.title}</h1>
            </a>
            <p>{props.desc}</p>
        </div>
    )

}

SearchResult.defaultProps = {
    title : "Title",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam iste minima dolorum, pariatur facilis nam provident vitae obcaecati sapiente quibusdam sequi praesentium adipisci. Ex hic vel voluptas distinctio dicta nihil.",
    url:"#"
}
export default SearchResult