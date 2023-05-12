import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getCategoriesArrAndDocument } from "../../utils/firebase/firebase.utils";
import { setCategoriesArr } from "../../store/categories/categories.action";

import CategoriesPreviewPage from "./categories-preview-page/categories-preview-page.component";
import CategoryPage from "./category-page/category-page.component";

const ShopPage = () => {
  const dispatch = useDispatch();

  // using Effect to (get all the categories)
  useEffect(() => {
    const getCategoriesArr = async () => {
      const categoriesArr = await getCategoriesArrAndDocument();
      dispatch(setCategoriesArr(categoriesArr));
    };

    getCategoriesArr();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreviewPage />} />
      <Route path=":category" element={<CategoryPage />} />
    </Routes>
  );
};

export default ShopPage;
