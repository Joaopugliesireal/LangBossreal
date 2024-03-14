import React from "react";
import "./country1.css";

const Country1 = ({ handleTextChange, background, translationBackground, trashEraser }) => {


    return (
        <div className="country1" 
        
        style={{background: `url(${background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundColor: 'red',
        
        }}>
            
        <div className="input1Background" 
            
        style={{background: `url(${translationBackground})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
            
        
        }}>
                <textarea maxLength="1024" className="input1" placeholder="Enter your text here" onChange={handleTextChange}>
                    <img className="trashEraser" src={trashEraser} alt="eraser"></img>
                </textarea>
            </div>
        </div>
    );
};

export default Country1;