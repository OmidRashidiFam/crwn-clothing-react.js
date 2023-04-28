// import modules from react
import { useContext } from "react";

// Import components
import { DropdownContext } from "../../contexts/card.context";

// Import style
import {
  ShopingBagIconContainer,
  ShopingIcon,
  ShopingBagIconCounter,
} from "./shoping-bag-icon.style";

// Main component for the shoping bag icon
const ShopingBagIcon = () => {
  // Use dropdown context to access isVisible and setIsVisible state variables and cardDropdownItemsCount
  const { isVisible, setIsVisible, cardCount } = useContext(DropdownContext);

  // Handeler function to toggle the visibility of the dropdown
  const toggleIsVisible = () => {
    setIsVisible(!isVisible);
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
