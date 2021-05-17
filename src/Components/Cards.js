import React, { Component } from 'react';
import "./Cards.css";

class Cards extends React.Component {
    render() {
        return <div className="card-div">
            <img className="card-img" src={this.props.img} alt="card-img" />
            <p className="card-title">{this.props.title}</p>
            <p className="card-items">{this.props.items}</p>
            <div className="card-logo-name-div">
                <img className="card-logo" src={this.props.logo} alt="logo" />
                <p className="card-logoName">By <span style={{fontWeight: 600}}>{this.props.logoName}</span></p>
            </div>
        </div>
    }
}

export default Cards;