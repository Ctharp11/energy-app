import React from 'react';

const LearnCard = (props) => (
    <div className="learn-card">
        <img className="learn-card-image" src={props.image} alt="learn more" />
        <div className="learn-card-head"> {props.head} </div>
        <div className="learn-card-text"> {props.text} </div>
    </div>
)

export default LearnCard