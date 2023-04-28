// import useContext from react
import { useContext } from "react";
// import components
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

// import DropdownContext
import { DropdownContext } from "../../contexts/card.context";

// import style
import {
  ProductCardContainer,
  ProductCardFooter,
  Name,
  Price,
} from "./product-card.style";

// define ProductCard component
const ProductCard = ({ product }) => {
  // destucture from product
  const { name, price, imageUrl } = product;

  // use card dropdown contex
  const { setIsVisible, addItemToCardDropdown } = useContext(DropdownContext);

  // handler function to add product to card dropdown
  const addProductToCardDropdown = () => {
    // set dropdown visibility to true
    setIsVisible(true);
    // add product to card dropdown
    addItemToCardDropdown(product);
  };

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`product naem: ${name}`} />
      <ProductCardFooter>
        <Name>{name}</Name>
        <Price>{`${price}$`}</Price>
      </ProductCardFooter>
      <Button
        children="Add to Card"
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCardDropdown}
      />
    </ProductCardContainer>
  );
};

// export component
export default ProductCard;
