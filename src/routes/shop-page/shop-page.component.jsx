import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getCollectionAndDocument } from "../../utils/firebase/firebase";
import { setCategoriesMap } from "../../store/categories/categories.action";

import CategoriesPreviewPage from "./categories-preview-page/categories-preview-page.component";
import CategoryPage from "./category-page/category-page.component";

const ShopPage = () => {
  const dispatch = useDispatch();

  // using Effect to (get all the categories)
  useEffect(() => {
    const getCategoryMaped = async () => {
      const categoryObj = await getCollectionAndDocument();
      dispatch(setCategoriesMap(categoryObj));
    };

    getCategoryMaped();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreviewPage />} />
      <Route path=":categoryName" element={<CategoryPage />} />
    </Routes>
  );
};

export default ShopPage;
