import Button from "../button/button";

import "./product-card.scss";

const ProductCard = ({ product }) => {
  // destucture from product
  const { name, price, imageUrl } = product;

  return (
    <div className="product_card_container">
      <img src={imageUrl} alt={`product naem: ${name}`} />
      <Button children="Add to Card" buttonType="inverted" />
      <div className="product_card_footer">
        <span className="product_card_footer_naem">{name}</span>
        <span className="product_card_footer_price">{`${price}$`}</span>
      </div>
    </div>
  );
};

export default ProductCard;
