import React from "react";
import Card from "./Card";

const CardList = (props) => {
    const {cards}=props
    return cards.map((data)=> <Card card={data} />)
}

export default CardList