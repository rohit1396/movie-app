import React, { createContext, useContext, useState } from "react";

const movieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [query, setQuery] = useState("");

  return (
    <movieContext.Provider value={{ query, setQuery }}>
      {children}
    </movieContext.Provider>
  );
};

export const GlobalMovie = () => {
  return useContext(movieContext);
};
