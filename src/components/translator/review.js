import React from "react";
import './review.css';
import Footer from "../homepage/footer"

const Review = ({stars, challenge, months, monthsImage, planet, country1, country2, country3, country4, reviewImage, review}) => {

    
    return (
        <div className="Review">
            <div className="languageInformations">
                <div className="challenge">
                    <img className="challengeImage" src={challenge} alt="challengeImage"></img>
                    <p className="stars">{stars}</p>
                    <div className="monthsDuration">
                        <p>{months}</p>
                        <img className="monthsImage" src={monthsImage} alt="months"></img>
                    </div>
                </div>
                <div className="reachness">
                <div className="planetOrbit">
                <img className="planet" src={planet} alt="planet"></img>
                <h3>8TH</h3>
                </div>
                <div className="countries">
                <img className="countrySpeaker1" src={country1} alt="country1"></img>
                <img className="countrySpeaker2" src={country2} alt="country2"></img>
                <img className="countrySpeaker3" src={country3} alt="country3"></img>
                <img className="countrySpeaker4" src={country4} alt="country4"></img>
                </div>
                </div>
                <div className="experience">
                <img className="reviewImage" src={reviewImage} alt="reviewImage"></img>
                <p className="reviewText">{review}</p>
                </div>
            </div>
            <Footer
            languages="/img/homepage/languages.png"
            translator="/img/homepage/language.png"
            learning="/img/homepage/language-learning.png"
            />
        </div>
    )
}

export default Review;