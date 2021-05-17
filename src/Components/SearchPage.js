import React, { Component } from 'react';
import "./SearchPage.css";

class SearchPage extends React.Component {
    render() {
        return <div style={{display: this.props.whiteScreen}} className="searchpage-container">
            <div className="searchpage-search-div">
                <img onClick={this.props.onBackSearch} src="https://img.icons8.com/android/18/000000/left.png" alt="back" />
                <input className="searchpage-input" type="search" />
                <img style={{marginLeft: 25}} src="https://img.icons8.com/fluent-systems-filled/22/000000/search.png" alt="search" />
            </div>
        </div>
    }
}

export default SearchPage;