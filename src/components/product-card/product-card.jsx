import { useContext } from "react";

import Button from "../button/button";
import { DropdownContext } from "../../contexts/card-dropdown-context";

import "./product-card.scss";

const ProductCard = ({ product }) => {
  // destucture from product
  const { name, price, imageUrl } = product;

  // use card dropdown context
  const { setIsVisible, addItemToCardDropdown } = useContext(DropdownContext);

  // handler function
  const addProductToCardDropdown = () => {
    setIsVisible(true);
    addItemToCardDropdown(product);
  };

  return (
    <div className="product_card_container">
      <img src={imageUrl} alt={`product naem: ${name}`} />
      <div className="product_card_footer">
        <span className="product_card_footer_naem">{name}</span>
        <span className="product_card_footer_price">{`${price}$`}</span>
      </div>
      <Button
        children="Add to Card"
        buttonType="inverted"
        onClick={addProductToCardDropdown}
      />
    </div>
  );
};

export default ProductCard;
