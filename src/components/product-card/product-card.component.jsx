// import components
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

// Import the useDispatch hook from react-redux
import { useSelector, useDispatch } from "react-redux";

// import selectIsVisible, and selectCartCount selector
import { selectCartItems } from "../../store/cart/cart.selector";

// import setIsVisible and addItemTocart action
import { setIsVisible, addItemTocart } from "../../store/cart/cart.action";

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

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  // handler function to add product to card dropdown
  const addProductToCardDropdown = () => {
    // set dropdown visibility to true
    dispatch(setIsVisible(true));
    // add product to card dropdown
    dispatch(addItemTocart(cartItems, product));
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
