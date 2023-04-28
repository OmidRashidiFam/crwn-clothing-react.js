// Import necessary components from react and react-router-dom
import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Import CategoriesContext context
import { CategoriesContext } from "../../../contexts/categories.context";

// Import necessary components
import ProductCard from "../../../components/product-card/product-card.component";

// import style components
import { CategoryContainer, CategoryItems } from "./category-page.style";

// Create a functional
const CategoryPage = () => {
  // Get the category name from the URL parameters
  const { categoryName } = useParams();

  // Get the categories map from the context
  const { categoriesMap } = useContext(CategoriesContext);

  // Set up state to store products
  const [products, setProducts] = useState([]);

  // Use effect hook to update the products state when the category name changes
  useEffect(() => {
    setProducts(categoriesMap[categoryName]);
  }, [categoryName, categoriesMap]);

  return (
    <CategoryContainer>
      <h2>
        <span>{categoryName.toUpperCase()}</span>
      </h2>
      <CategoryItems>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryItems>
    </CategoryContainer>
  );
};

// Export the component
export default CategoryPage;