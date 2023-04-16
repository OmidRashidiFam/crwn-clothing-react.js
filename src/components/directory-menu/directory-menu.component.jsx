import CategoryItem from "../category-item/category-item";

import { DirectoryMenuContiner } from "./directory-menu.style";

const DirectoryMenu = ({ categories }) => {
  return (
    <DirectoryMenuContiner>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </DirectoryMenuContiner>
  );
};

export default DirectoryMenu;
