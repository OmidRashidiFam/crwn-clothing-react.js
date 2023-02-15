import './directory-menu.scss'
import CategoryItem from '../category-item/category-item'

const DirectoryMenu = ({ categories }) => {
  return (
    <div className="categories_container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}

export default DirectoryMenu;