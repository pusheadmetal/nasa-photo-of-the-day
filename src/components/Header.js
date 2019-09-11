import React from "react";
import $ from 'jquery';
import { Menu } from "semantic-ui-react"
import MakeCard from "./Card";

const Header = (props) => {

    return (
        <>
            <div class="ui top attached tabular menu">
                <a class="active item" data-tab="tab1">
                    Info
                </a>
                <a class="item" data-tab="tab2">
                    Photo
                </a>
                <div class="right menu">
                    <div class="item">
                        <div class="ui transparent icon input">
                            <input type="text" placeholder="Search photos..." />
                                <i class="search link icon">
                                </i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ui bottom attached segment">
                <div class = "card-tab" data-tab="tab1">
                    <div class = "cards">
                        <MakeCard getTitle = {props.getTitle} getImage = {props.getImage} getDate = {props.getDate} getExplanation = {props.getExplanation} getType = {props.getType} />
                        <MakeCard getTitle = {props.getTitle} getImage = {props.getImage} getDate = {props.getDate} getExplanation = {props.getExplanation} getType = {props.getType} />
                        <MakeCard getTitle = {props.getTitle} getImage = {props.getImage} getDate = {props.getDate} getExplanation = {props.getExplanation} getType = {props.getType} /> 
                    </div>
                </div>
                <div class = "photo-tab" data-tab="tab2">
                    <img class="ui medium circular image" src = {props.getImage} alt = "NASA Image Of The Day!"/>
                    <img class="ui medium circular image" src = {props.getImage} alt = "NASA Image Of The Day!"/>
                    <img class="ui medium circular image" src = {props.getImage} alt = "NASA Image Of The Day!"/>
                </div>
            </div>
        </>
    );
};


export default Header;