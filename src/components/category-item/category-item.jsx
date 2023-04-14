import { Link } from "react-router-dom";

import "./category-item.scss";

const CategoryItem = ({ category }) => {
  // destructure frome category
  const { title, large, imageUrl } = category;

  return (
    <Link to={`/shop/${title}`} className={`category_card ${large}`}>
      <div
        className="category_card_img"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category_card_body">
        <h2 className="category_card_body-title">{title.toUpperCase()}</h2>
        <p className="category_card_body-subtitle">Shop Now</p>
      </div>
    </Link>
  );
};

export default CategoryItem;
