// Importcomponents
import ProductCard from "../product-card/product-card.component";

// Import style components
import {
  CategoryPreviewContainer,
  CategoryTitle,
  PreviewItem,
} from "./category-preview.style";

// Create a functional component
const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <CategoryTitle to={title}>{title.toUpperCase()}</CategoryTitle>
      </h2>
      <PreviewItem>
        {products
          // Filter out the first four products
          .filter((_, index) => index < 4)
          // Map through the filtered products and render the product card
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </PreviewItem>
    </CategoryPreviewContainer>
  );
};

// Export component
export default CategoryPreview;
