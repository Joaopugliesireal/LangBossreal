import React, {useEffect, useState} from "react";
import './translator.css';
import Header from '../homepage/header'
import Dinamictranslator from "./dinamictranslator";
import Description from "./description";
import Review from "./review";


export default function Translator() {

    const [darkMode, setDarkMode] = useState(() => {
        const storedTheme = localStorage.getItem("theme");
        return storedTheme ? JSON.parse(storedTheme) : false;
      });
    
      useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(darkMode));
      }, [darkMode]);
    
      const toggleDarkMode = () => {
        setDarkMode((prevDarkMode) => !prevDarkMode);
      };


    return (
        <div className="translator" style={{
            backgroundColor: darkMode ? "black" : "white",
            color: darkMode ? "white" : "black"}}>
            <Header
                logo="/img/homepage/crown.png"
                name="LangBoss"
                slogan="Discovering seas"  
                darkMode={darkMode}  
                toggleDarkMode={toggleDarkMode}  
            />
            <div>
            <Dinamictranslator />
            </div>
            <div>
            <Description
            data1="/img/translator/data.png"
            name="Russian"
            description="Russian is a Slavic language that is the official language in Russia, Belarus, Kazakhstan and Kyrgyzstan, as well as one of the official languages in several other countries. It has a rich history, including different dialects and influences from different cultures."
            />
            </div>
            <div>
            <Review
            stars="⭐⭐⭐⭐⭐"
            challenge="/img/translator/goal.png"
            monthsImage="/img/translator/month.png"
            months="24 - 36"
            planet="/img/translator/advertising.png"
            country1="/img/homepage/russia.png"
            country2="/img/translator/ukraine.png"
            country3="/img/translator/belarus.png"
            country4="/img/translator/kazakhstan.png"
            reviewImage="/img/translator/badge.png"
            review="“ A huge language! There is Always a richness being  expressed ”."
            />  
            </div>
        </div>
    )
}