import { Routes, Route } from "react-router-dom";

import CategoriesPreviewPage from "./categories-preview-page/categories-preview-page";
import CategoryPage from "./category-page/category-page";

const ShopPage = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreviewPage />} />
      <Route path=":categoryName" element={<CategoryPage />} />
    </Routes>
  );
};

export default ShopPage;
