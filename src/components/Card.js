import React from "react";
import { Card } from "semantic-ui-react";

const MakeCard = (props) => {
    if (!props.getImage){
        return <h2>Loading...</h2>
    }

    return (
        <div class="ui card">
            <div class="image">
                <img src={props.getImage}/>
            </div>
            <div class="content">
                <a class="header">{props.getTitle}</a>
                <div class="meta">
                    <span class="date">{props.getDate}</span>
                </div>
                <div class="description">
                    {props.getExplanation}
                </div>
            </div>
        </div>
    );
};



export default MakeCard;