import { useState, createContext, useEffect } from "react";

import { getCollectionAndDocument } from "../utils/firebase/firebase";

import SHOP_DATA from "../data/shop-data.js";

export const CategoriesContext = createContext({
  categories: {},
  setCategories: () => null,
});

export const CategoriesContextProvider = ({ children }) => {
  // using State
  const [categories, setCategories] = useState({});

  // using Effect to (get all the categories)
  useEffect(() => {
    const getCategoryMapedObj = async () => {
      const categoryObj = await getCollectionAndDocument();
      console.log(categoryObj);
    };
    getCategoryMapedObj();
  }, []);

  const value = { categories, setCategories };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
