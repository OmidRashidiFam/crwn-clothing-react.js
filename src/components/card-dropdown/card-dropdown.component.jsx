// import useNavigate from react-router-dom
import { useNavigate } from "react-router-dom";
// Import the useSelector hook from react-redux
import { useSelector } from "react-redux";

// import components
import Button from "../button/button.component";
import CardDropdowmItem from "../card-dropdown-item/card-dropdown-item.component";
// import selectCartItems selector
import { selectCartItems } from "../../store/cart/cart.selector";

// import styles
import {
  DropdownContainer,
  DropdownItems,
  EmptyMessage,
} from "./card-dropdown.style";

// function component for card dropdown
const CardDropdown = () => {
  // use product context
  const cartItems = useSelector(selectCartItems);

  // use navigate
  const navigate = useNavigate();

  // handle go to checkout
  const handleGoTocheckout = () => {
    navigate("/checkout");
  };

  // return jsx
  return (
    <DropdownContainer>
      <DropdownItems>
        {/* check if there are items in the card dropdown */}
        {cartItems.length ? (
          // map through the items and render them
          cartItems.map((item) => (
            <CardDropdowmItem key={item.id} dropdowmItem={item} />
          ))
        ) : (
          // display empty message if there are no items
          <EmptyMessage>Your card is empty !!!</EmptyMessage>
        )}
      </DropdownItems>
      {/* button to go to checkout */}
      <Button children="go to checkout" onClick={handleGoTocheckout} />
    </DropdownContainer>
  );
};

export default CardDropdown;
