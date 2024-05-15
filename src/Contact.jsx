import React from "react";
import './Styles/Contact.css'
import Card from "./Card";
export default function Contact (){
    return(
        <div>
        <div className="Contact">
            <div className="heading"><h1>Contact US</h1></div>
            <div className="People">
                <Card name="Kavin Raja K J" desc="Ph : +91 9994755190" />
                <Card name="Sakresh S" desc="Ph : +91 6369763958" />
                <Card name="Sakthivel A" desc="Ph : +91 6379567820" />
            </div>
        </div>
        </div>
    )
}
