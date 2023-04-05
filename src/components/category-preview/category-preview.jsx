import ProductCard from "../product-card/product-card";

import "./category-preview.scss";

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="categoryPreview_container">
      <h2>
        <span className="category_title">{title.toUpperCase()}</span>
      </h2>
      <div className="preview_item">
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
