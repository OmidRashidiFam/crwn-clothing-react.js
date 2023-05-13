// Import the useDispatch hook from react-redux
import { useSelector, useDispatch } from "react-redux";

// import icons from react-icons
import { GrClose } from "react-icons/gr";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

// import setIsVisible and addItemTocart action
import {
  addItemTocart,
  removeItemFromcart,
  deleteItemFromcart,
} from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

// Importing style component
import {
  CheckoutItemContainer,
  ImageContainer,
  Name,
  Quantity,
  Value,
  Price,
  RemoveButton,
} from "./checkout-item.style";

// Creating component
const CheckoutItem = ({ cardItem }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  // Destructuring props
  const { imageUrl, price, quantity, name } = cardItem;

  // This component renders a single item in the Checkout page
  return (
    <CheckoutItemContainer>
      {/* This will render an image of the product */}
      <ImageContainer>
        <img src={imageUrl} alt={`product name: ${name}`} />
      </ImageContainer>
      {/* This will render the product name */}
      <Name>{name}</Name>
      <Quantity>
        {/* This button will decrease the quantity of the product */}
        <button
          onClick={() => {
            dispatch(removeItemFromcart(cartItems, cardItem));
          }}
        >
          <AiOutlineLeft />
        </button>
        {/* This will render the quantity of the product */}
        <Value>{quantity}</Value>
        {/* This button will increase the quantity of the product */}
        <button
          onClick={() => {
            dispatch(addItemTocart(cartItems, cardItem));
          }}
        >
          <AiOutlineRight />
        </button>
      </Quantity>
      {/* This will render the price of the product */}
      <Price>{price}$</Price>
      {/* This button will delete the product from the card dropdown */}
      <RemoveButton>
        <button
          onClick={() => {
            dispatch(deleteItemFromcart(cartItems, cardItem));
          }}
        >
          <GrClose className="value" />
        </button>
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
