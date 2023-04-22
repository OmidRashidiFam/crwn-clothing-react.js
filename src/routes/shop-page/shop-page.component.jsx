import { Routes, Route } from "react-router-dom";

import CategoriesPreviewPage from "./categories-preview-page/categories-preview-page.component";
import CategoryPage from "./category-page/category-page.component";

const ShopPage = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreviewPage />} />
      <Route path=":categoryName" element={<CategoryPage />} />
    </Routes>
  );
};

export default ShopPage;
