import { useContext } from "react";

import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../../store/categories/categories.selector";

import CategoryPreview from "../../../components/category-preview/category-preview.component";

const CategoriesPreviewPage = () => {
  // use categories context
  const categoriesMap = useSelector(selectCategoriesMap);

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
