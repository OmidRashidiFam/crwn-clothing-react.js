import { useState, createContext, useEffect } from "react";

import { getCollectionAndDocument } from "../utils/firebase/firebase";

export const CategoriesContext = createContext({
  categories: {},
  setCategories: () => null,
});

export const CategoriesContextProvider = ({ children }) => {
  // using State
  const [categoriesMap, setCategoriesMap] = useState({});

  // using Effect to (get all the categories)
  useEffect(() => {
    const getCategoryMaped = async () => {
      const categoryObj = await getCollectionAndDocument();
      setCategoriesMap(categoryObj);
    };
    getCategoryMaped();
  }, []);

  const value = { categoriesMap, setCategoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
