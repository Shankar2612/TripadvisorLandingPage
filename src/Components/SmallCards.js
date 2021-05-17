import React, { Component } from 'react';
import "./SmallCards.css";

class SmallCards extends React.Component {
    constructor() {
        super();
        this.state={
            hover: false
        }
    }

    onChangeHoverTrue = () => {
        this.setState({hover: true});
    }

    onChangeHoverFalse = () => {
        this.setState({hover: false});
    }

    render() {
        return <div onMouseEnter={this.onChangeHoverTrue} onMouseLeave={this.onChangeHoverFalse} className="small-card-container">
            <p className="small-card-text">{this.props.cardname}</p>
            <img className="small-card-icon" src={this.state.hover ? this.props.cardiconwhite : this.props.cardiconblack} alt={this.props.cardname} />
        </div>
    }
}

export default SmallCards;