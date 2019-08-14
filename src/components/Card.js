import React from "react";

const Card = (props) => {
    if (!props.getImage){
        return <h2>Loading...</h2>
    }

    return (
        <div class = "card">
            <div class = "card-heading">
                <h2>{props.getTitle}</h2>
            </div>
            <div class = "card-image">
                <img src = {props.getImage} alt = "NASA Image Of The Day!" />
            </div>
            <div class = "card-text">
                <h3>{props.getDate}</h3>
                <p>{props.getExplanation}</p>
            </div>
        </div>
    );
};



export default Card;