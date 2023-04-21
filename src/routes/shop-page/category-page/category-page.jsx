import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { CategoriesContext } from "../../../contexts/categories-context";
import ProductCard from "../../../components/product-card/product-card.component";

import "./category-page.scss";

const CategoryPage = () => {
  // using params
  const { categoryName } = useParams();
  // using params
  const { categoriesMap } = useContext(CategoriesContext);
  // using state
  const [products, setProducts] = useState([]);
  // using effect
  useEffect(() => {
    setProducts(categoriesMap[categoryName]);
  }, [categoryName, categoriesMap]);

  return (
    <div className="category_container">
      <h2>
        <span className="category_title">{categoryName.toUpperCase()}</span>
      </h2>
      <div className="category_items">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPage;
