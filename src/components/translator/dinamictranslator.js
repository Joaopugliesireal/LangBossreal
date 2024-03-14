import React, { useState } from "react";
import "./dinamictranslator.css";
import Country1 from "./country1";
import Country2 from "./country2";



const Dinamictranslator = ({name, name2}) => {
    const [text, setText] = useState(""); 

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    function reverseLanguage() {
        
    }

    return (
        <div className="dinamicTranslator">
            <Country1 handleTextChange={handleTextChange} background={""} translationBackground={""}/>
            <div className="languagesChoice">
                <div className="language1"><h3>{name}</h3></div>
                <button  onClick={reverseLanguage} className="reverse"></button>
                <div className="language2"><h3>{name2}</h3></div>
            </div>
            <Country2 receivedText={text} background={""} translationBackground={""}/> 
        </div>
    );
};

export default Dinamictranslator;