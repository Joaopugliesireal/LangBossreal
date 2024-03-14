import React, {useState} from "react";
import { Link } from 'react-router-dom'; 
import './country.css';


const Country = ({ country, name, id, translationBackground }) => {
    const [currentCountry, setCurrentCountry] = useState({ name, id});
  
    const handleClick = () => {
      setCurrentCountry({name, id});
      console.log(`Current Country: ${currentCountry.name}, ID: ${currentCountry.id}`);
    };
  
    return (
      <div key={id} className="country" onClick={handleClick}>
        <Link to="/translator">
          <img className="country-image" src={country} alt="country" />
          <h3 className="country-name">{name}</h3>
          <img className="translationBackground" src={translationBackground} alt="translation.background"></img>
        </Link>
      </div>
    );
  };
  
  export default Country;