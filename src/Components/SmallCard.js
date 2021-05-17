import React, { Component } from 'react';
import "./SmallCard.css";

class SmallCard extends React.Component {
    render(){
        return <div className="smallcard-div">
            <div className="smallCard-img-div">
                <img className="smallCard-img" src={this.props.img} alt="card-img" />
            </div>
            <p className="smallCard-title">{this.props.title}</p>
        </div>
    }
}

export default SmallCard;