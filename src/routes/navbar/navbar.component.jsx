// import react-router-dom packages
import { Outlet } from "react-router-dom";
// Import the useSelector hook from react-redux
import { useSelector } from "react-redux";
// Import the selectCurrentUser selector
import { selectCurentUser } from "../../store/user/user.selector";

// import assets
import { ReactComponent as Logo } from "../../assets/crown.svg";

// import selectIsVisible selector
import { selectIsVisible } from "../../store/cart/cart.selector";

// import components
import ShopingBagIcon from "../../components/shoping-bag-icon/shoping-bag-icon.component";
import CardDropdown from "../../components/card-dropdown/card-dropdown.component";

// import styles
import {
  NavbarContainer,
  NavbarLogoContainer,
  NavbarLinksContainer,
  NavbarLink,
} from "./navbar.style";

// import utils
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navbar = () => {
  // Get the current user from the store
  const curentUser = useSelector(selectCurentUser);

  // Get the visibility status from the store
  const isVisible = useSelector(selectIsVisible);

  // handler function to sign out user when clicked on sign out link
  const handleSignOut = async () => {
    await signOutUser();
  };

  return (
    <>
      <NavbarContainer>
        <NavbarLogoContainer to="/">
          <Logo />
        </NavbarLogoContainer>
        <NavbarLinksContainer>
          <NavbarLink to="/shop">SHOP</NavbarLink>
          <NavbarLink to="/contact">CONTACT</NavbarLink>
          {/* conditionally render sign in or sign out link based on current user */}
          {curentUser ? (
            <NavbarLink as="span" onClick={handleSignOut}>
              SIGN OUT
            </NavbarLink>
          ) : (
            <NavbarLink to="/auth">SIGN IN</NavbarLink>
          )}
          <ShopingBagIcon />
        </NavbarLinksContainer>
        {/* display dropdown component if visible */}
        {isVisible ? <CardDropdown /> : null}
      </NavbarContainer>
      {/* display outlet component */}
      <Outlet />
    </>
  );
};

// export Navbar component
export default Navbar;
