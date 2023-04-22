//import CategoryItem component
import CategoryItem from "../category-item/category-item.component";

//import styles
import { DirectoryMenuContiner } from "./directory-menu.style";

//DirectoryMenu functional component
const DirectoryMenu = ({ categories }) => {
  return (
    //render DirectoryMenuContiner
    <DirectoryMenuContiner>
      {/* map over the categories array and render each category with CategoryItem component */}
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </DirectoryMenuContiner>
  );
};

//export DirectoryMenu component
export default DirectoryMenu;
