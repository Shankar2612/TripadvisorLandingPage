import React, { Component } from 'react';
import "./Home.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import SmallCards from "../Components/SmallCards";
import tripadvisorBgOne from "../Images/tripadvisor_background_one.png";
import tripadvisorBgTwo from "../Images/tripadvisor_background_two.jpeg";
import Cards from "../Components/Cards";
import SmallCard from "../Components/SmallCard";
import travellerGuides from "../Data/TravellerGuides";
import destinations from "../Data/DestinationsData";
import SearchPage from "../Components/SearchPage";

class Home extends React.Component {
    constructor() {
        super();
        this.state={
          search: "",
          leftbtn: false,
          rightbtn: false,
          smallSearch: false,
          blackScreen: "none",
          openMenu: "",
          whiteScreen: "none"
        }
    }

    componentDidMount() {
        window.addEventListener("scroll", () => {
            if(window.scrollY >= 350) {
                this.setState({smallSearch: true});
            } else {
                this.setState({smallSearch: false});
            }
        })

        const destinationsDiv = document.getElementsByClassName("destinations-div")[0];
        const rightBtn = document.getElementsByClassName("right-btn")[0];
        const leftBtn = document.getElementsByClassName("left-btn")[0];
        rightBtn.addEventListener("click", () => {
            destinationsDiv.scrollTo(1160, 0);
        });

        leftBtn.addEventListener("click", () => {
            destinationsDiv.scrollTo(0, 0);
        });
    };

    onInputChange = (event) => {
        this.setState({search: event.target.value});
    };
    
    onHoverLeftBtn = () => {
        this.setState({leftbtn: !this.state.leftbtn});
    };
    
    onHoverRightBtn = () => {
        this.setState({rightbtn: !this.state.rightbtn});
    };
    
    getSponsorDetails = () => {
        const str = "Whether you want to take a walk on the wild side, enjoy action-packed theme parks, soak up the emirate's famous 365-days-a-year sunshine live in the lap of luxury at exclusive resorts, or indulge in spas and shopping malls. Abu Dhabi's unique blend of cities, beaches and desert has it all. From family adventures to romantic trips for two, create your perfect blend of relaxation and exploration with our pick of not-to-miss experiences in the emirate. Abu Dhabi remains to be the safe, awe-inspiring and culturally rich destination you last visited. Read more about our Covid-19 procedures to keep you safe while travelling to and across our Emirate.";
        return str.substring(0,127);
    };

    onOpenMenu = () => {
        this.setState({blackScreen: "block", openMenu: "open"});
    };

    onCloseMenu = () => {
        this.setState({blackScreen: "none", openMenu: ""});
    }

    onOpenSearchBox = () => {
        this.setState({whiteScreen: "flex"});
    }

    onBackSearch = () => {
        this.setState({whiteScreen: "none"});
    }

    render() {
        return <div className="home">
            <div className="app-second-container">
                <Navbar onOpenMenu={this.onOpenMenu} smallSearch={this.state.smallSearch} onOpenSearchBox={this.onOpenSearchBox} />
                <div className="small-cards-div">
                    <SmallCards cardname={"Hotels"} cardiconblack={"https://img.icons8.com/material-outlined/26/000000/bed.png"} cardiconwhite={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABmJLR0QA/wD/AP+gvaeTAAABPUlEQVRIie2TL08DQRTEf6+pKDgSQFEESQUhGBQIJCCrqlCoirryPVAoDJ8BA2kQTTBgQDWVGDBVVSUIwmD2ks1l90puTzSEMbs3czvz3v6Bfyw6zP+QVAO6wCFQL+n5BTwAV2b2HfxD0rmqQ9/3zld97MZ74KVkR3vAEXACXMQ6GrpqeiVDkNRzHkOfj56DpLqratmjn8zszelNYN/TPoBBzK/owLvAZY4bAztuPgC2c3p0J2oFQWtzuNWAvh4zi3W0BDQCvElayeYBveHWxiGpJWlS4fWeSGqFgu4qDMlwG9q6phvPgJvC9uejDVwDm6GgDDMzm6akSJrluaJbVyn+XlDojNqSthJ9d38TdJoYEkQo6BF4T/TdAA6CiqSRe2SdxBAkdZzXKOP8jsbAJ5D0hhymwDPwWoHXguIH7tVWge7zaJcAAAAASUVORK5CYII="} />
                    <SmallCards cardname={"Holiday Homes"} cardiconblack={"https://img.icons8.com/material-outlined/26/000000/home--v2.png"} cardiconwhite={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABmJLR0QA/wD/AP+gvaeTAAABYElEQVRIie2VPUsDQRRF71tCQBTEzsJOEBsbg5VpLAQhqexs0mmphWCdvyAp7dJYBBRLQRD8ATYpbSwsRFAMBsSgORaZ6CDZzWw+QNALD5bde9+ZnZ2Zlf68gAJQGDekBLSAd2B7XJA9oM232kB5lIAIqHiAqquuKkA0LCQLHHtNDx3YgLJ3/wSYGBQyBZx703TQw7MLfDjPJTCdFjILXLsGb8BWgncTeHXeOjAXCpkHblzwBdgIyKwBzy5zCyz2C6wADy5wDywHja6TXQLuXPYRWI0zFoCm94FTL90fC6SJt7EjZyhJOpU0mbZ5giYlneE2diRJZlY1s6yZmaTaCCA16yhjZkdfoH4C8sBTTOVDemQCR5iRNDNMj7RHR0PSuqtGmmDoG3XVMrMLSQJaaYLDHYa/EZQ0dTlgx10vJPiKQPd5bhBQ0VU/7Qd4eoLqil/K/kq7khT3W6iHwP8VpE+7K25xlof5dQAAAABJRU5ErkJggg=="} />
                    <SmallCards cardname={"Things to Do"} cardiconblack={"https://img.icons8.com/material-outlined/26/000000/survey.png"} cardiconwhite={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABmJLR0QA/wD/AP+gvaeTAAABe0lEQVRIie2Vvy9DURTHPwe1M1j9EcYmQuhuqaR/gcUoMagEm3a2IFaDP0CkEiI6GMREDB0Ig8TQhISifA29L6mn9732xa/BN7m5Ofd9z/nee/J9OfDXICklaVHSmVsLklLfIbShz1hvN99CxXqBWSANdId4o0AXMOPiIvAG7AFq4r4Ch0DBzJ59t55vcetmPLgW9kp6jOHmo15UAsaBTWDf04Wy29Oe7yNADtg1s0xw2BMiBXHZzFY9hQKctjp0BsmFa3fFFPsy/JhQuHUfIClDw4UHZrbkXDnsoZ+b2XUiIWANGATGJG0DF0DJw50GVpIKXTqhGnBD43+peri1qEJxQhNAFjgysyt31h+T07mQmVWBOJu3hT/juiwN1x2b2ZSkPvxmWDazrURCwAAwBNw38YciuF7ECe0Ak8Cti+9c3AoniYXMrAJUmuInwNueKPyaGepuT0t6SVgzGB91L0NSPmaYdYK5qBcVaAzD8CjvBMEoLybM/8dHvAOWKRd5TNRgnwAAAABJRU5ErkJggg=="} />
                    <SmallCards cardname={"Restaura..."} cardiconblack={"https://img.icons8.com/material-outlined/26/000000/cutlery.png"} cardiconwhite={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABmJLR0QA/wD/AP+gvaeTAAABJElEQVRIie2WPS9EURCGnxGRXaK4lYZGwlaqLTUKf0GnEL9A5x+IbmNXY2tRKNUSJcXqJBsKEhERBdHjVdwjueTO/disTSxvM5N5Z85zb87JyYE/IUmbkjohLof8UFIU8o6kKPTuSWrkrTnq1GeAOnAGXIe8Evrr32bngSVJN2bW9EAjhX6xmLYkTQ8CNAFsDAIEsCopdc08UJV4bz7zak7/FLBQBvQe4hrQDvks0E30vDmztTKgbsKvJOrjIT6Y2ZMzO1cGdADcOh7AdoYXFQaZ2QuwCOwD96H8CpwC62a2kwEay/B8SVpRrAvHP9FX7ab19ft4uxo+kHep9qIWcATc/TTo0syOPXP49ugf1LOKnLpn4Jz47ZCmK2ASeOzXR/0OfQDd4m6lBXI3/QAAAABJRU5ErkJggg=="} />
                    <SmallCards cardname={"Write a review"} cardiconblack={"https://img.icons8.com/material-outlined/26/000000/task.png"} cardiconwhite={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABmJLR0QA/wD/AP+gvaeTAAABcUlEQVRIie2VT0rDUBCHv2lt8SZeQehGQXfiPv4BwYUXEFxYQbftDYqoYEGxKxE3KtiFBS9Qd4KnUNTWnwtfIMamL0kruPAHIXmTmfnevAwZ+GuSVJK0J+nBXbuSSr8BOtBP7aeNt1iyMrAFVIBizG8WKACbbl0HPoBbQBHfPnAH1MzsLWnXOwN2HdWzO8KypBePb3VYRdfAHHACtBNOoePulYT3M0AA3JjZfGiciDmF646ZNRISheoOMroGCeK5C55kQyWpKGlRkjfPSCDgEDgHGj5YLpCrZAq4AHrAOrAwVpCkInAM3ANPwBLQBC6HxcWbIS0kcKYrYNrMWr7Y1BU5yFEEEoIe08SnAkUgKxHzGbBsZr2xgMYB8YISIK2sEC8IWItBToEgKyQNaDLy3AJWzayfFQL+9m4DG8Ar0MwL8YLMrEvCz3NUUHj2FUnvOXOG4yP5O0qqeoZZFm0Pq6jG1zCMj/IsCkd5PWf8v77rEzjCLonme2GSAAAAAElFTkSuQmCC"} />
                    <SmallCards cardname={"Travel Forums"} cardiconblack={"https://img.icons8.com/material-outlined/26/000000/comment-discussion.png"} cardiconwhite={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABmJLR0QA/wD/AP+gvaeTAAABKklEQVRIie2Vr0pEQRTGf58sFkHwAcRoEBHZvhiMgqjYNsqi+w5Gq39Yk9FiNxsMYjH7BBZ9AYvL/QzOFXXvuMwwoKBfOdw5w/fjnDl3Bv6VKcUStnvAOjCZ4WvgDjiQ9BzfZW+6jI5rz1aE1QnxGrjIqKgN9ICVcaB6/V7SWSrF9nYAvftPpJrkKgaaLg0aaZ3tPtANn7O2VzN8F0OsGrO2+7arQhNn2+e1tz5AusAJ3/xbCRoCN8CepKcCfr9QjW2y3QIOgQ1gKsN3CNwCu5Ieo7ts75QehtjNsBTiJTDIqKgD7APL40B1Sx8kXaVSbM988fnBK8i2gLnSoE+tC5ABsBaWFvz2AKaqHeLLSMa2bJ8WmrZaR00VbQHzQPLhN6giPOUFvP66XgEkDnlp6cT6aAAAAABJRU5ErkJggg=="} />
                    <SmallCards cardname={"More"} cardiconblack={"https://img.icons8.com/material-outlined/26/000000/more.png"} cardiconwhite={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABmJLR0QA/wD/AP+gvaeTAAAAfUlEQVRIie2SQQqAMAwEi31BPdt3Sv2EPk/7lzIeVIgatd4zkEMSlu2GOmcYhlEF4IEIeGXXAuGP5skkApmNDHRiNwBlr1SjeTOaODOKJEXMy5HsSSNpNK+PXpvXak6JIrDsL5svp0vidH2N5svMAx1wSwyEl8+gagzDMHRWtSXW65dJJe0AAAAASUVORK5CYII="} />
                </div>
                <div className="background-one-img-div">
                    <img className="background-one-img" src={tripadvisorBgOne} alt="background" />
                    <div className="home-search-bar">
                    <img className="home-search-icon" src="https://img.icons8.com/ios-glyphs/26/000000/search.png" alt="search" />
                    <input className="home-search-field" onChange={this.onInputChange} type="text" title="Search" placeholder="Where to?" value={this.state.search} />
                    </div>
                </div>
                <p className="keep-planning-text">Traveller Guides</p>
                <div className="traveller-guides-div">
                    {travellerGuides.map(guide => {
                    return <Cards img={guide.img} title={guide.title} items={guide.items} logo={guide.logo} logoName={guide.logoName} />
                    })}
                </div>
                <p className="destinations-title">Destinations travellers love</p>
                <div className="destinations-div-first">
                    <div className="destinations-div">
                    {destinations.map(destination => {
                        return <SmallCard img={destination.img} title={destination.title} />
                    })}
                    </div>
                    <button onMouseEnter={this.onHoverLeftBtn} onMouseLeave={this.onHoverLeftBtn} className="left-btn" type="button">
                    {this.state.leftbtn ? <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABmJLR0QA/wD/AP+gvaeTAAAAi0lEQVRIie2VMQ7CMAwAz9BPMPEfJgZQP8jIH/qMMsHMzAjSsTBEqBIiNEhVc1vkyGdHlgOVyreoW3VdWtKqd/VcTKbuXxLVXl1NVrJLJKfJSGJA0gIHoAEuwAa4ZuR+RMRtMPLWya90ae5FRqVZNOkhIo7qkpGe7uONv0xclY0tK79UE1n5b6IyD56+gxkVwO7HGAAAAABJRU5ErkJggg=="></img> 
                                        : <img className="left-icon" src="https://img.icons8.com/material-outlined/26/000000/left.png" alt="left arrow" />}       
                    </button>
                    <button onMouseEnter={this.onHoverRightBtn} onMouseLeave={this.onHoverRightBtn} className="right-btn" type="button">
                    {this.state.rightbtn ? <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABmJLR0QA/wD/AP+gvaeTAAAAfElEQVRIie3VMQ6CMBhA4VfD6oqj4UZsDnBBL+DqIdy9CCSPgcVIwvArJSH99ub9bZoWiuJX6lVtc0Te6qDetgzV6svZqPaHjXW7x9LXojNQBXoX4AE0wAj0KaX72nRP/2Oxs1Ng+pB9ji4iy80rkUgoz6P6Edv2myiOaQLmJBW3EN87QgAAAABJRU5ErkJggg=="></img> 
                                        : <img className="right-icon" src="https://img.icons8.com/material-outlined/26/000000/right.png"/>}
                    </button>
                </div>
                <div className="sponsor-div">
                    <div className="sponsor-card">
                        <img className="sponsor-img" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-c/2560x500/1c/b3/bd/e6/caption.jpg?w=600&h=600&s=1" alt="sponsor img" />
                        <div className="sponsor-details-div">
                            <p className="sponsor-card-title">By Visit Abu Dhabi</p>
                            <p className="sponsor-relax-explore">Relax & Explore</p>
                            <p className="sponsor-details-text">{this.getSponsorDetails()}...</p>
                            <img className="sponsor-heart" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAABh0lEQVQ4jc3TMShEcRzA8e/vOc5tYvCexaIU4xXJKYMshEVmBovEZNSxKinZnCQWBuquLmUQd0oxGgzCdKIk6i68dz/Duesc5/AWv+Xf+/1/v8//93/1h/8eUpi47WtrcLSsWxGvaPr83vew17x19gJwNthcUZ2q6lIxGgV9Nuz0bm306OJLUIMYNyeBOWASMPJqrkWMEVRF0RBQn7fnICyY/tiUBEl/ABM97TOITBe5yfP76i2yP2NFYsEceDnQWVVp2wmgskhDqUhVOK9mTfT40QDwOi8tLjAAn13uaYX3fyVImQsMAMfOGBnQo6eA48YTldMcaG4f3QIbLsA1K3p4lwMBRIwgkPwDlsTjmc1+5EAzfHCp6OivOZExa2f/6hMIUBeJbwBLP8d00QofruanjMIaMxIbB1ZKD6brpj8+WZj/BAqo6bNGv5tU0eXap/Lh7HMr6C8eN72BCYX5vIMVmM0+sy8n/w7MoO1DioQy1TpiheObpXpKRqK/oynR39HkGvoX8QZ4d3hYJzb+hwAAAABJRU5ErkJggg=="></img>
                            <p className="sponsor-items">14 items</p>
                            <img className="sponsor-visit-dubai-logo" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/dd/f6/9a/visitabudhabi.jpg?w=100&h=-1&s=1" alt="visit dubai logo" />
                        </div>
                    </div>
                    <div className="sponsor-main-title">
                        <p className="sponsor-title-text">Sponsored by Visit Abu Dhabi</p>
                    </div>
                </div>
                <div className="achievements-div">
                    <div className="achievements-card">
                    <div className="achievements-card-logo-title">
                        <svg className="achievement-logo-svg" width="112" height="70" viewBox="0 0 112 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0)">
                            <path d="M56.2979 0C48.4191 0.00120815 40.7733 2.61525 34.6074 7.41574C28.4416 12.2162 24.1196 18.9199 22.3464 26.4333C21.375 23.3504 19.6287 20.5657 17.273 18.3436C16.8903 21.869 17.1486 25.4342 18.0356 28.8685C18.5189 31.4181 19.7345 33.7734 21.535 35.649C21.5834 36.759 21.6872 37.8661 21.846 38.9663C19.8807 36.8966 17.4827 35.2823 14.8215 34.2377C15.7418 37.6768 17.2946 40.9162 19.401 43.7915C20.7355 45.8203 22.5847 47.4452 24.7407 48.5385C25.0972 49.2593 25.4795 49.9677 25.8869 50.6622C23.2454 48.3307 20.0077 46.7722 16.5319 46.1591C18.1529 49.294 20.3331 52.1092 22.966 54.4671C25.3408 56.8533 28.5047 58.3001 31.87 58.539C31.836 58.4666 31.7979 58.3966 31.7627 58.3242C32.6587 59.1968 33.6026 60.021 34.5901 60.7932C32.5975 60.3159 30.5312 60.2247 28.504 60.5245C30.501 62.0342 32.7235 63.2225 35.0906 64.0458C36.9683 64.8111 39.0332 65.0537 41.0456 64.7725C42.2494 65.348 43.486 65.8551 44.7494 66.2912C43.4328 66.5504 42.1769 66.9959 41.0444 67.62C43.0214 68.1285 45.0612 68.3529 47.102 68.2862C48.2049 68.2592 49.2956 68.0482 50.3285 67.6621C52.2982 68.0157 54.2954 68.2025 56.2979 68.2203C58.0461 68.2043 59.7906 68.0595 61.5166 67.7873C62.4996 68.1106 63.5552 68.2862 64.6311 68.2862C66.6817 68.352 68.7305 68.126 70.6875 67.62C69.7057 67.0713 68.6262 66.6631 67.4943 66.3956C68.8243 65.9591 70.1262 65.4445 71.3928 64.8544C73.1655 64.994 74.9462 64.7166 76.5913 64.0447C78.9708 63.2128 81.2093 62.025 83.2297 60.5221C81.5879 60.2831 79.9191 60.2949 78.2808 60.5571C79.0881 59.9119 79.8653 59.2316 80.6102 58.5182C83.7891 58.2453 86.7702 56.8157 89.0042 54.4671C91.5542 52.0907 93.6535 49.2764 95.2018 46.1591C92.2749 46.6936 89.5291 47.9547 87.1884 49.8121C87.4653 49.2974 87.7287 48.7757 87.9784 48.2478C89.8375 47.1505 91.4023 45.6216 92.5394 43.7915C94.5605 40.8939 96.0413 37.6577 96.911 34.2377C94.6424 35.1691 92.5948 36.5619 90.8648 38.3072C91.0263 37.0335 91.1142 35.7519 91.1281 34.4685C92.414 32.8269 93.298 30.9095 93.71 28.8685C94.5971 25.4341 94.8463 21.8672 94.4452 18.3436C92.4529 20.2304 90.9031 22.5316 89.9062 25.0831C87.8854 17.876 83.5022 11.518 77.4302 6.98627C71.3583 2.45455 63.9338 3.31975e-05 56.2979 0V0ZM31.87 58.539C31.8872 58.5746 31.9063 58.6102 31.9236 58.6464V58.5443C31.9057 58.5431 31.8878 58.5402 31.87 58.5384V58.539ZM56.2085 4.15254C64.3928 4.15254 72.243 7.3322 78.03 12.9915C83.8177 18.6514 87.0681 26.3283 87.0681 34.3326C87.0681 40.3016 85.2582 46.1359 81.8672 51.0994C78.4763 56.0623 73.6573 59.9313 68.0186 62.2152C62.3688 64.5004 56.1727 65.097 50.1879 63.932C44.2019 62.7675 38.7037 59.8945 34.3882 55.6737C30.072 51.453 27.132 46.0754 25.9417 40.2203C24.751 34.3645 25.3629 28.2871 27.6974 22.7832C30.0327 17.2686 33.9896 12.5549 39.0642 9.23881C44.1393 5.92271 50.1051 4.15254 56.2085 4.15254ZM55.9148 7.52559C54.2276 7.54595 52.5457 7.71849 50.8897 8.0411C45.5667 9.07924 40.6774 11.6366 36.8397 15.3899C33.0019 19.1438 30.3866 23.9246 29.3255 29.1301C28.2643 34.3373 28.8047 39.7421 30.8763 44.6386C32.9488 49.5446 36.4602 53.7398 40.9694 56.6953C45.4963 59.6558 50.7925 61.2363 56.2085 61.2429C59.8206 61.2503 63.3997 60.5592 66.7472 59.2081C70.0791 57.8642 73.1141 55.8828 75.6804 53.3762C78.2304 50.886 80.2579 47.9159 81.645 44.6386C83.0239 41.3765 83.7309 37.8719 83.7242 34.3326C83.7104 29.0129 82.0903 23.8202 79.0744 19.4292C76.0522 15.0197 71.7628 11.5844 66.7466 9.55797C63.3076 8.1701 59.6252 7.47917 55.9148 7.52559V7.52559ZM5.13115 12.0993C5.63578 16.4587 6.91214 20.6945 8.90102 24.6103C10.4884 28.3522 13.4094 31.3773 17.102 33.1035C16.7422 29.0649 15.6185 25.1306 13.7903 21.5078C11.8365 17.6324 8.83827 14.3747 5.13115 12.0993V12.0993ZM107.172 12.0993C103.277 14.3411 100.111 17.602 98.0417 21.5078C96.1628 25.1171 95.0048 29.0551 94.6317 33.1035C98.4998 31.4045 101.583 28.3797 103.29 24.6103C105.305 20.6968 106.619 16.4629 107.172 12.0993V12.0993ZM56.3116 20.9027C61.1491 20.8996 65.8772 22.336 69.8892 25.0274H77.6565L74.1583 28.7492C75.2472 29.7212 76.1182 30.9108 76.7146 32.2403C77.308 33.5631 77.6116 34.9964 77.6053 36.4451C77.6078 38.4788 77.0047 40.4677 75.8723 42.1602C74.7299 43.8662 73.1131 45.2038 71.2195 46.0096C69.3142 46.8222 67.2146 47.073 65.1703 46.7321C63.1313 46.3944 61.2338 45.477 59.7061 44.0905L56.3116 47.7127L52.8652 44.0905C51.3375 45.477 49.44 46.3943 47.401 46.7321C45.3558 47.0732 43.2534 46.8211 41.3518 46.0096C39.4583 45.2038 37.8415 43.8662 36.6991 42.1602C35.5665 40.4677 34.9634 38.4789 34.966 36.4451C34.9458 34.9911 35.249 33.5502 35.8531 32.2214C36.4597 30.8889 37.3505 29.704 38.4637 28.7492L34.9666 25.0274H42.7328C46.7452 22.3359 51.4737 20.8995 56.3116 20.9027V20.9027ZM56.286 24.3256C53.5414 24.3256 50.823 24.8547 48.2881 25.8828C50.5081 26.6292 52.4539 28.0185 53.8762 29.8728C55.2851 31.7115 56.0986 33.9337 56.2085 36.244C56.3277 33.9221 57.1629 31.6886 58.604 29.8396C60.0556 27.9832 62.0344 26.6046 64.2832 25.8828C61.7436 24.8538 59.0277 24.325 56.286 24.3256V24.3256ZM2.85064 25.722C3.82859 29.9327 5.57206 33.9296 7.99489 37.5153C9.98706 41.0271 13.2291 43.699 17.102 45.0225C16.4024 41.0965 14.8959 37.3568 12.6769 34.0378C10.276 30.4067 6.86774 27.5213 2.85064 25.722ZM109.453 25.722C105.486 27.526 102.11 30.4084 99.7151 34.0378C97.56 37.3612 96.0817 41.0739 95.3644 44.9649C99.1855 43.666 102.394 41.0147 104.381 37.5147C106.756 33.9119 108.473 29.9197 109.453 25.722V25.722ZM95.3644 44.9661C95.3096 44.9845 95.2566 45.0059 95.2018 45.0236H95.3531L95.365 44.9661H95.3644ZM45.8283 29.3051C45.2926 29.2897 44.7568 29.3325 44.2305 29.4326C42.8251 29.698 41.529 30.3688 40.5035 31.3618C39.4876 32.3459 38.7914 33.6107 38.5048 34.9929C38.2208 36.3701 38.3616 37.8006 38.9087 39.0968C39.4604 40.4012 40.39 41.5124 41.5788 42.2883C42.7772 43.071 44.1794 43.4876 45.6126 43.4866C46.5618 43.4937 47.5033 43.3168 48.3846 42.9658C49.2618 42.6161 50.0616 42.0983 50.7384 41.4418C51.4108 40.79 51.946 40.0114 52.3129 39.1514C52.6775 38.2936 52.8652 37.3741 52.8652 36.4451C52.8745 35.0372 52.4571 33.6593 51.6677 32.4913C50.8712 31.3138 49.7425 30.3974 48.4239 29.8574C47.5994 29.5184 46.7199 29.3315 45.8283 29.3057V29.3051ZM67.001 29.3051C66.4646 29.2908 65.9283 29.3347 65.4014 29.4362C63.9948 29.706 62.6991 30.3821 61.6757 31.3802C60.6617 32.3689 59.9694 33.638 59.6883 35.0231C59.4099 36.4044 59.558 37.8371 60.113 39.133C60.6732 40.4363 61.6112 41.5437 62.807 42.3132C64.0122 43.09 65.4195 43.4981 66.8551 43.4872C68.7581 43.4899 70.5862 42.7494 71.9469 41.4246C72.6131 40.7758 73.1427 40.0012 73.5048 39.1462C73.8669 38.2913 74.0542 37.373 74.0558 36.4451C74.0652 35.0351 73.6468 33.6552 72.8554 32.4859C72.0562 31.3071 70.9241 30.3905 69.602 29.852C68.7757 29.5141 67.8946 29.3288 67.0016 29.3051H67.001ZM45.6126 32.7232C46.6224 32.7232 47.5905 33.1153 48.3042 33.8136C48.6564 34.1564 48.9363 34.5656 49.1277 35.0175C49.3191 35.4694 49.4181 35.9547 49.4188 36.4451C49.4184 37.1828 49.195 37.9034 48.7778 38.5131C48.3565 39.1274 47.7623 39.6042 47.0698 39.8834C46.3729 40.1655 45.6086 40.2393 44.8703 40.0958C44.1347 39.9536 43.4573 39.5994 42.9222 39.0772C42.3914 38.5598 42.0283 37.8959 41.8797 37.1712C41.7329 36.449 41.8085 35.6995 42.0965 35.0208C42.3872 34.3377 42.8753 33.7562 43.4989 33.3503C44.1271 32.9407 44.8617 32.7228 45.6126 32.7232ZM66.9581 32.7232C67.9679 32.7232 68.9348 33.1153 69.6485 33.8136C70.0007 34.1564 70.2807 34.5656 70.4721 35.0175C70.6635 35.4694 70.7624 35.9547 70.7631 36.4451C70.7627 37.1828 70.5394 37.9034 70.1221 38.5131C69.7012 39.1273 69.1074 39.6041 68.4153 39.8834C67.718 40.1655 66.9533 40.2393 66.2146 40.0958C65.4791 39.9535 64.8018 39.5993 64.2666 39.0772C63.7362 38.5596 63.3737 37.8958 63.2258 37.1712C63.0785 36.4492 63.1534 35.6997 63.4408 35.0208C63.7318 34.3379 64.2199 33.7564 64.8432 33.3503C65.4719 32.9407 66.2069 32.7227 66.9581 32.7232V32.7232ZM0 39.3471C2.00415 43.0746 4.67172 46.4084 7.87277 49.1863C10.749 52.0883 14.6541 53.8442 18.8124 54.1058V53.9575C17.1277 50.4101 14.7101 47.2304 11.7064 44.6108C8.38272 41.8523 4.33106 40.0305 0 39.3471ZM111.734 39.3471C107.47 40.0531 103.49 41.8736 100.23 44.6108C97.2029 47.2209 94.7675 50.4018 93.0732 53.9575L92.9213 54.1058C97.0796 53.8448 100.985 52.0889 103.861 49.1863C107.062 46.4084 109.73 43.0746 111.734 39.3471V39.3471ZM11.4484 55.2413C9.90059 55.236 8.35636 55.3901 6.84034 55.701C9.82758 58.3365 13.2639 60.419 16.9871 61.8503C20.5613 63.4127 24.5873 63.6132 28.3003 62.4139H28.504C25.7628 59.8581 22.5373 57.8722 19.0162 56.5725C16.589 55.6997 14.029 55.2494 11.4484 55.2413V55.2413ZM100.296 55.2413C97.7337 55.2496 95.1797 55.6951 92.7455 56.5725C89.2205 57.8815 85.9875 59.8663 83.2297 62.4145C86.9337 63.6137 90.9513 63.4128 94.5161 61.8503C98.3225 60.4476 101.839 58.3636 104.893 55.701C103.381 55.3902 101.84 55.2361 100.296 55.2413V55.2413ZM27.104 64.3264C23.5633 64.2715 20.0848 65.2556 17.102 67.1561C20.6403 68.5105 24.3413 69.3984 28.1108 69.7971C31.7401 70.3375 35.4487 69.7894 38.7639 68.2227V68.0708C35.7417 66.0275 32.2538 64.77 28.6184 64.4131C28.115 64.363 27.6098 64.3341 27.104 64.3264V64.3264ZM84.7214 64.3264C84.2222 64.3353 83.7218 64.3668 83.2214 64.4202C79.6231 64.7856 76.1677 66.0764 73.1694 68.1753H72.968C76.2358 69.7816 79.9212 70.3463 83.5228 69.7924C87.3271 69.459 91.066 68.5988 94.6317 67.2368C91.6672 65.2673 88.2179 64.2612 84.7214 64.3264Z" fill="#FAF1ED"/>
                        </g>
                        <defs>
                            <clipPath id="clip0">
                            <rect width="112" height="70" fill="white"/>
                            </clipPath>
                        </defs>
                        </svg>
                        <p className="achievements-title">Travellers' Choice Best of the Best</p>
                        <button className="achievements-winners-btn" type="button">See the winners</button>
                    </div>
                    <img className="achievement-background-img" src={tripadvisorBgTwo} alt="achievement-img" />
                    </div>
                </div>
                <Footer />
            </div>
            <div style={{display: this.state.blackScreen}} className="black-screen"></div>
            <div className={"menu-container " + this.state.openMenu}>
                <img onClick={this.onCloseMenu} className="close-icon" src="https://img.icons8.com/material/22/000000/multiply--v2.png" alt="close" />
                <button className="menu-sign-in-btn" type="button">Sign in</button>
                <div className="menu-main-items">
                    <div className="menu-review">
                        <p className="menu-review-text">Review</p>
                        <img src="https://img.icons8.com/metro/14/000000/chevron-down.png" alt="dropdown" />
                    </div>
                    <p className="menu-review-text alerts">ALerts</p>
                    <p className="menu-review-text trips">Trips</p>
                    <p className="menu-review-text bookings">Bookings</p>
                </div>
                <div className="menu-second-items">
                    <p className="second-item">Hotels</p>
                    <p className="second-item">Things to do</p>
                    <p className="second-item">Restaurants</p>
                    <p className="second-item">Flights</p>
                    <p className="second-item">Holiday homes</p>
                    <p className="second-item">Shopping</p>
                    <p className="second-item">Package Holidays</p>
                    <p className="second-item">Cruises</p>
                    <p className="second-item">Car Hire</p>
                    <div className="menu-review">
                        <p style={{marginBottom: 0}} className="second-item">More</p>
                        <img src="https://img.icons8.com/metro/14/000000/chevron-down.png" alt="dropdown" />
                    </div>
                </div>
            </div>
            <SearchPage whiteScreen={this.state.whiteScreen} onBackSearch={this.onBackSearch} />
        </div>
    }
}

export default Home;