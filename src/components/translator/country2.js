import React from "react";
import "./country2.css";

const Country2 = ({ receivedText, background, translationBackground }) => {
    

    
    return (
        <div className="country2"

        style={{background: `url(${background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundColor: 'blue',
         }} >

        <div className="input2Background"
            
            style={{background: `url(${translationBackground})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
                
            
        }}>
            <p className="input2">{receivedText}</p>
        </div>
        </div>
    );
};

export default Country2;