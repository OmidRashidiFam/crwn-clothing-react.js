// Import styles
import {
  CategoryCardContainer,
  CategoryCardIMG,
  CategoryCardBody,
  CategoryCardBodyTitle,
  CategoryCardBodySubtitle,
} from "./category-item.style";

// Create a functional component to display a category item
const CategoryItem = ({ category }) => {
  // destructure title and imageUrl from category
  const { title, imageUrl } = category;

  return (
    // Create a link to the shop page for the category
    <CategoryCardContainer to={`/shop/${title}`}>
      {/* Set the background image of the card to the provided imageUrl */}
      <CategoryCardIMG style={{ backgroundImage: `url(${imageUrl})` }} />
      <CategoryCardBody>
        {/* Display the title in uppercase */}
        <CategoryCardBodyTitle>{title.toUpperCase()}</CategoryCardBodyTitle>
        <CategoryCardBodySubtitle>Shop Now</CategoryCardBodySubtitle>
      </CategoryCardBody>
    </CategoryCardContainer>
  );
};

// Export CategoryItem component
export default CategoryItem;
