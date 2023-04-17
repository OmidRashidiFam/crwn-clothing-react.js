// Import styles
import {
  CategoryCardContainer,
  CategoryCardIMG,
  CategoryCardBody,
  h2,
  CategoryCardBodySubtitle,
} from "./category-item.style";

// Create a functional component to display a category item
const CategoryItem = ({ category }) => {
  // destructure title and imageUrl from category
  const { title, imageUrl } = category;

  return (
    // Create a link to the shop page for the category
    <CategoryCardContainer to={`/shop/${title}`}>
      {/* Set the background image of the card with imageUrl prop */}
      <CategoryCardIMG imageUrl={imageUrl} />
      <CategoryCardBody>
        {/* Display the title in uppercase */}
        <h2>{title.toUpperCase()}</h2>
        <p>Shop Now</p>
      </CategoryCardBody>
    </CategoryCardContainer>
  );
};

// Export CategoryItem component
export default CategoryItem;
