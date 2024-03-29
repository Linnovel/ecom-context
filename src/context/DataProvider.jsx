import React, { createContext, useContext, useEffect, useState } from "react";

export const DataContext = createContext({});

const DataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      //   console.log(data.products);
      setProducts(data.products);
    } catch (error) {
      console.log("hubo un error", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ products }}>{children}</DataContext.Provider>
  );
};

export default DataProvider;
