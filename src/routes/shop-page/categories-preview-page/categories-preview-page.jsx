import { useContext, Fragment } from "react";

import { CategoriesContext } from "../../../contexts/categories-context";
import CategoryPreview from "../../../components/category-preview/category-preview";

const CategoriesPreviewPage = () => {
  // use categories context
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((category) => {
        return (
          <CategoryPreview
            title={category}
            key={category}
            products={categoriesMap[category]}
          />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreviewPage;
