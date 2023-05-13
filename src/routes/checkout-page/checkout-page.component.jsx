// import useEffect hook from react
import { useEffect } from "react";

// Import the useDispatch and useSelector hooks from react-redux
import { useSelector, useDispatch } from "react-redux";

// Import CheckoutItem component
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

// import setIsVisible and addItemTocart action
import { setIsVisible } from "../../store/cart/cart.action";

// import selectCartItems and selectCartTotal selector
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";

// import styled components
import {
  CheckoutContainer,
  CheckoutHeader,
  CheckoutBlock,
  Total,
} from "./checkout-page.style";

const CheckoutPage = () => {
  // Get the dispatch function from react-redux
  const dispatch = useDispatch();

  // Get the cart items and total from store selector
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  // useing effect to dispatch setIsVisible action
  useEffect(() => {
    dispatch(setIsVisible(false));
  }, []);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <CheckoutBlock>
          <span>product</span>
        </CheckoutBlock>
        <CheckoutBlock>
          <span>description</span>
        </CheckoutBlock>
        <CheckoutBlock>
          <span>quantity</span>
        </CheckoutBlock>
        <CheckoutBlock>
          <span>price</span>
        </CheckoutBlock>
        <CheckoutBlock>
          <span>remove</span>
        </CheckoutBlock>
      </CheckoutHeader>

      {/* Map through the cart items and render CheckoutItem component */}
      {cartItems.map((cardItem) => {
        return <CheckoutItem key={cardItem.id} cardItem={cardItem} />;
      })}

      {/* Render the total price of the cart items */}
      <Total>Total: {cartTotal}$</Total>
    </CheckoutContainer>
  );
};

export default CheckoutPage;
