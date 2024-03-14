import React from "react";
import './header.css'

 const Header = (props) => {

    return (
    <div className="header" style={{
        backgroundColor: props.darkMode ? 'black' : 'white',
        color: props.darkMode ? 'white' : 'black'
    }}>
        <div className="symbol">
        <img src={props.logo} className="logo-1" alt="logocrown"></img>
        <h1 className="name-1">{props.name}</h1>
        <h3 className="slogan-1">{props.slogan}</h3>
        </div>
        <div onClick={props.toggleDarkMode} >
        <div className="button" style={{backgroundImage: props.darkMode ? `url("/img/homepage/nightfall.png")` : `url("/img/homepage/sunrise.jpg")` }}>
            <button style={{marginLeft: props.darkMode ? "30px" : "0px"}} className="toggle">
                <img className="button-icon" src={props.darkMode ? "/img/homepage/moon(1).png" : "/img/homepage/sun(1).png"} alt="darkorlight" width="20" height="20"></img>
            </button>
        </div>
        </div>
    </div>
    )
}

export default Header;