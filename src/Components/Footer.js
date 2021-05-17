import React, { Component } from 'react';
import "./Footer.css";

class Footer extends React.Component {
    constructor() {
        super();
        this.state={
            expand: ""
        }
    }

    onExpandSection = (id) => {
        if(this.state.expand === id) {
            this.setState({expand: ""});
        } else {
            this.setState({expand: id});
        }
    }

    render(){
        return <div className="footer">
            <div className="footer-container">
                <div className="footer-items-grid-two">
                    <div id="about-tripadvisor" className="footer-item-div-two">
                        <div onClick={() => this.onExpandSection("about-tripadvisor")} className="footer-grid-header">
                            {this.state.expand === "about-tripadvisor" ? <img className="expand-icon" src="https://img.icons8.com/android/13/000000/minus.png" alt="contract" /> : <img className="expand-icon" src="https://img.icons8.com/android/13/000000/plus.png" alt="expand" />}
                            <p className="about-tripadvisor-two">About Tripadvisor</p>
                        </div>
                        <div style={{display: this.state.expand === "about-tripadvisor" ? "block" : "none"}} className="expand-div">
                            <p className="about-us">About Us</p>
                            <p className="about-us">Press</p>
                            <p className="about-us">Resources and Policies</p>
                            <p className="about-us">Careers</p>
                            <p className="about-us">Content Integrity</p>
                        </div>
                    </div>
                    <div id="explore" className="footer-item-div-two">
                        <div onClick={() => this.onExpandSection("explore")} className="footer-grid-header">
                            {this.state.expand === "explore" ? <img className="expand-icon" src="https://img.icons8.com/android/13/000000/minus.png" alt="contract" /> : <img className="expand-icon" src="https://img.icons8.com/android/13/000000/plus.png" alt="expand" />}
                            <p className="about-tripadvisor-two">Explore</p>
                        </div>
                        <div style={{display: this.state.expand === "explore" ? "block" : "none"}} className="expand-div">
                            <p className="about-us">Write a review</p>
                            <p className="about-us">Add a Place</p>
                            <p className="about-us">Join</p>
                            <p className="about-us">Travellers' Choice</p>
                            <p className="about-us">GreenLeaders</p>
                            <p className="about-us">Help Centre</p>
                        </div>
                    </div>
                    <div id="do-business" className="footer-item-div-two">
                        <div onClick={() => this.onExpandSection("do-business")} className="footer-grid-header">
                            {this.state.expand === "do-business" ? <img className="expand-icon" src="https://img.icons8.com/android/13/000000/minus.png" alt="contract" /> : <img className="expand-icon" src="https://img.icons8.com/android/13/000000/plus.png" alt="expand" />}
                            <p className="about-tripadvisor-two">Do Business With Us</p>
                        </div>
                        <div style={{display: this.state.expand === "do-business" ? "block" : "none"}} className="expand-div">
                            <p className="about-us">Owners & DMO/CVB</p>
                            <p className="about-us">Business Advantage</p>
                            <p className="about-us">Sponsored Placements</p>
                        </div>
                    </div>
                    <div id="get-app" className="footer-item-div-two">
                        <div onClick={() => this.onExpandSection("get-app")} className="footer-grid-header">
                            {this.state.expand === "get-app" ? <img className="expand-icon" src="https://img.icons8.com/android/13/000000/minus.png" alt="contract" /> : <img className="expand-icon" src="https://img.icons8.com/android/13/000000/plus.png" alt="expand" />}
                            <p className="about-tripadvisor-two">Get The App</p>
                        </div>
                        <div style={{display: this.state.expand === "get-app" ? "block" : "none"}} className="expand-div">
                            <p className="about-us">iPhone App</p>
                            <p className="about-us">Android App</p>
                        </div>
                    </div>
                    <div id="tripadvisor-sites" className="footer-item-div-two">
                        <div onClick={() => this.onExpandSection("tripadvisor-sites")} className="footer-grid-header">
                            {this.state.expand === "tripadvisor-sites" ? <img className="expand-icon" src="https://img.icons8.com/android/13/000000/minus.png" alt="contract" /> : <img className="expand-icon" src="https://img.icons8.com/android/13/000000/plus.png" alt="expand" />}
                            <p className="about-tripadvisor-two">Tripadvisor Sites</p>
                        </div>
                        <div style={{display: this.state.expand === "tripadvisor-sites" ? "block" : "none"}} className="expand-div">
                            <p style={{fontWeight: 400}} className="about-us-unhover">Book tours and attraction tickets on Viator</p>
                        </div>
                    </div>
                </div>
                <div className="footer-items-grid">
                    <div className="footer-item-div">
                        <p className="about-tripadvisor">About Tripadvisor</p>
                        <p className="about-us">About Us</p>
                        <p className="about-us">Press</p>
                        <p className="about-us">Resources and Policies</p>
                        <p className="about-us">Careers</p>
                        <p className="about-us">Content Integrity</p>
                    </div>
                    <div className="footer-item-div">
                        <p className="about-tripadvisor">Explore</p>
                        <p className="about-us">Write a review</p>
                        <p className="about-us">Add a Place</p>
                        <p className="about-us">Join</p>
                        <p className="about-us">Travellers' Choice</p>
                        <p className="about-us">GreenLeaders</p>
                        <p className="about-us">Help Centre</p>
                    </div>
                    <div className="footer-item-div">
                        <p className="about-tripadvisor">Do Business With Us</p>
                        <p className="about-us">Owners & DMO/CVB</p>
                        <p className="about-us">Business Advantage</p>
                        <p style={{marginBottom: 15}} className="about-us">Sponsored Placements</p>
                        <p className="about-tripadvisor">Get The App</p>
                        <p className="about-us">iPhone App</p>
                        <p className="about-us">Android App</p>
                    </div>
                    <div className="footer-item-div">
                        <p className="about-tripadvisor">Tripadvisor Sites</p>
                        <p style={{fontWeight: 400}} className="about-us-unhover">Book tours and attraction tickets on Viator</p>
                    </div>
                </div>
                <div className="footer-terms-conditions-div">
                    <div className="footer-terms-condition">
                        <div className="footer-terms-conditions-two">
                            <svg style={{marginRight: 15}} width="42" height="42" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M72 36C72 55.9 55.9 72 36 72C16.1 72 0 55.9 0 36C0 16.1 16.1 0 36 0C55.9 0 72 16.1 72 36Z" fill="#34E0A1"/>
                                <path d="M58.2 28.9L62.5 24.2H52.9C48.1 20.9 42.3 19 36 19C29.7 19 23.9 20.9 19.1 24.2H9.5L13.8 28.9C11.1 31.3 9.5 34.8 9.5 38.7C9.5 46 15.4 51.9 22.7 51.9C26.2 51.9 29.3 50.6 31.7 48.4L36 53L40.2 48.4C42.6 50.6 45.7 51.9 49.2 51.9C56.5 51.9 62.4 46 62.4 38.7C62.5 34.8 60.8 31.3 58.2 28.9ZM22.8 47.6C17.8 47.6 13.8 43.6 13.8 38.6C13.8 33.6 17.8 29.6 22.8 29.6C27.8 29.6 31.8 33.6 31.8 38.6C31.7 43.6 27.7 47.6 22.8 47.6ZM36 38.4C36 32.5 31.7 27.4 26.1 25.3C29.2 24 32.5 23.3 36 23.3C39.5 23.3 42.9 24 45.9 25.3C40.3 27.5 36 32.5 36 38.4ZM49.2 47.6C44.2 47.6 40.2 43.6 40.2 38.6C40.2 33.6 44.2 29.6 49.2 29.6C54.2 29.6 58.2 33.6 58.2 38.6C58.2 43.6 54.2 47.6 49.2 47.6ZM49.2 34C46.6 34 44.5 36.1 44.5 38.7C44.5 41.3 46.6 43.4 49.2 43.4C51.8 43.4 53.9 41.3 53.9 38.7C53.9 36.1 51.8 34 49.2 34ZM27.5 38.7C27.5 41.3 25.4 43.4 22.8 43.4C20.2 43.4 18.1 41.3 18.1 38.7C18.1 36.1 20.2 34 22.8 34C25.4 34 27.5 36.1 27.5 38.7Z" fill="black"/>
                            </svg>
                            <div className="footer-rights-reserved-div">
                                <p className="footer-rights">© 2021 Tripadvisor LLC All rights reserved.</p>
                                <div className="footer-terms-privacy-cookie">
                                    <p className="footer-terms">Terms of Use</p>
                                    <p className="footer-terms">Privacy and Cookies Statement</p>
                                    <p className="footer-terms">Cookie consent</p>
                                    <p className="footer-terms">Site Map</p>
                                    <p style={{marginRight: 0}} className="footer-terms">How the site works</p>
                                </div>
                            </div>
                        </div>
                        <p className="last-line">This is the version of our website addressed to speakers of English in India. If you are a resident of another country or region, please select the appropriate version of Tripadvisor for your country or region in the drop-down menu. <span style={{fontWeight: 500}}>more</span></p>
                    </div>
                    <div className="footer-country-currency">
                        <div className="country-currency">
                            <button className="country" type="button">
                                <p className="country-with-currency">₹ INR</p>
                                <img src="https://img.icons8.com/material/26/000000/sort-down.png" alt="dropdown" />
                            </button>
                            <button className="country" type="button">
                                <p className="country-with-currency">India</p>
                                <img src="https://img.icons8.com/material/26/000000/sort-down.png" alt="dropdown" />
                            </button>
                        </div>
                        <div className="footer-social-div">
                            <img className="social-icons" src="https://img.icons8.com/material/22/000000/facebook-new.png" alt="facebook" />
                            <img className="social-icons" src="https://img.icons8.com/material/22/000000/twitter-squared.png" alt="twitter" />
                            <img className="social-icons" src="https://img.icons8.com/material/22/000000/pinterest.png" alt="pinterest" />
                            <img style={{marginRight: 0}} className="social-icons" src="https://img.icons8.com/material-outlined/22/000000/instagram-new.png" alt="instagram" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Footer;