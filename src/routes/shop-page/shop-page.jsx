import { Routes, Route } from "react-router-dom";

import CategoriesPreviewPage from "./categories-preview-page/categories-preview-page";

const ShopPage = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreviewPage />} />
    </Routes>
  );
};

export default ShopPage;
