
import React from "react"
import './Styles/Card.css'
function Card(props){
      return(

    <div className="Container">
          <img src={props.profile} alt=""></img>
          <h3>{props.name}</h3>
          <p className="desc">{props.desc}</p>
    </div>
    );
}
Card.defaultProps = {
      name:"Guest",
      profile: "https://cdn-icons-png.flaticon.com/512/2919/2919906.png",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
}
export default Card