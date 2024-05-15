import React from "react";
import './Styles/NewsArticle.css'
import reactlogo from './assets/react.svg'
export default function NewsArticle(props){
    return(
        <div className="news-article">
            <label htmlFor="">{props.data.relativeTime}</label>
            <div className="contents">
                <img className="coverImage" src={props.data.image ? props.data.image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoRcee70YRLUGs7U9EE-wBr9v_qj_eOf_hD2EU33jDjqKsXBsD4s8aUy8whlEOJCBe_Sg&usqp=CAU"} alt="Image Not Found" />
                <a href={props.data.url} target="blank"><h1>{props.data.title}</h1></a> 
            </div>
                <p style={{textOverflow:"hidden"}}>{props.data.excerpt.replace(/<\/?[^>]+(>|$)/g," ")}</p>
        </div>
    )
}