import { useContext } from "react";

import { CategoriesContext } from "../../../contexts/categories-context";
import CategoryPreview from "../../../components/category-preview/category-preview.component";

const CategoriesPreviewPage = () => {
  // use categories context
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <>
      {Object.keys(categoriesMap).map((category) => {
        return (
          <CategoryPreview
            title={category}
            key={category}
            products={categoriesMap[category]}
          />
        );
      })}
    </>
  );
};

export default CategoriesPreviewPage;
