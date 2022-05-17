import React from "react";
import App from "../App";

const Card = (props) =>{
    const {card}=props
    console.log(card)
    return(
        <div className="card">
            <div className="card-body">
                <button className="remove-button">x</button>
                <p className="date"></p>
                <h2 className="location">{card.location}</h2>
                <p className="city-country">{card.city},United Kingdom</p>
                <p className="values">Values: {card.parameter}:{card.value}</p>
            </div>
        </div>
         )
};

export default Card