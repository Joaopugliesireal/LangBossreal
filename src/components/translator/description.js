import React from "react";
import "./description.css"

const Description = ({data1, name, description}) => {
    return (
        <div className="languageDescription">
            <h3 className="language">{name}</h3>
            <div className="languageHistory">
                <img className="descriptionImage" src={data1} alt="descriptionLanguage"></img>
                <div className="textHistory"><p className="description">{description}</p></div>
            </div>
        </div>
    )
}

export default Description;
