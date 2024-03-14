import React, { createContext, useContext, useState } from "react";

const SelectedCountryContext = createContext();

export const SelectedCountryProvider = ({ children }) => {
  const [selectedCountry, setSelectedCountry] = useState("");

  return (
    <SelectedCountryContext.Provider
      value={{ selectedCountry, setSelectedCountry }}
    >
      {children}
    </SelectedCountryContext.Provider>
  );
};

export const useSelectedCountry = () => useContext(SelectedCountryContext);