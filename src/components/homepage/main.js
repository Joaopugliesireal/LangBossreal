import React from "react";
import './main.css';
import Country from "./country";
import data from "../../data";

export default function Main({ logo, name, slogan}) {

    const countries = data.map((country) => {
        return (
          <Country
            key={country.key} 
            country={country.country}
            name={country.name}
            translationBackground={country.translationBackground}
            id={country.key}
          />
        );
      });

    return (
        <div className="Main">
        <div className="symbol">
        <img className="logo" src={logo} alt="crownlogo"></img>
        <h1 className="name">{name}</h1>
        <h3 className="slogan">{slogan}</h3>
        </div>
        <div className="starting">
            <h2>Learn Languages immersing yourself</h2>
            <img className="culture" src="/img/homepage/border.png" alt="culture"></img>
            <h2>Choose The Language Below:</h2>
        </div>
        <div className="countries">
            {countries}
        </div>
        </div>
    )
}