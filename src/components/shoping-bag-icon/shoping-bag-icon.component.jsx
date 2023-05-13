// Import the useSelector hook from react-redux
import { useSelector, useDispatch } from "react-redux";

// import selectIsVisible, and selectCartCount selector
import {
  selectIsVisible,
  selectCartCount,
} from "../../store/cart/cart.selector";

// import setIsVisible action
import { setIsVisible } from "../../store/cart/cart.action";

// Import style
import {
  ShopingBagIconContainer,
  ShopingIcon,
  ShopingBagIconCounter,
} from "./shoping-bag-icon.style";

// Main component for the shoping bag icon
const ShopingBagIcon = () => {
  // Get the visibility status from the store
  const isVisible = useSelector(selectIsVisible);
  // Get the visibility status from the store
  const cardCount = useSelector(selectCartCount);

  // Handeler function to toggle the visibility of the cart using dispatch
  const dispatch = useDispatch();
  const toggleIsVisible = () => {
    dispatch(setIsVisible(!isVisible));
  };

  return (
    // On click of the container will call the toggleIsVisible handler
    <ShopingBagIconContainer onClick={toggleIsVisible}>
      <ShopingIcon />
      {/* Display the count of the items in the dropdown */}
      <ShopingBagIconCounter>{cardCount}</ShopingBagIconCounter>
    </ShopingBagIconContainer>
  );
};

export default ShopingBagIcon;
