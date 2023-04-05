import { useContext, Fragment } from "react";

import { CategoriesContext } from "../../contexts/categories-context";
import CategoryPreview from "../../components/category-preview/category-preview";

import "./shop-page.scss";

const ShopPage = () => {
  // use categories context
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <div className="shopPage">
      {Object.keys(categoriesMap).map((category) => {
        return (
          <CategoryPreview
            title={category}
            key={category}
            products={categoriesMap[category]}
          />
        );
      })}
    </div>
  );
};

export default ShopPage;
