// ArtikelContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const ArtikelContext = createContext();

export const useArtikel = () => {
  return useContext(ArtikelContext);
};

export const ArtikelProvider = ({ children }) => {
  const [artikel, setArtikel] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:5001/artikel/artikel`)
      .then(res => {
        setArtikel(res.data);
      })
      .catch(err => {
        console.log(err.message);
      });
  }, []);

  return (
    <ArtikelContext.Provider value={{ artikel }}>
      {children}
    </ArtikelContext.Provider>
  );
};
