// import modules from react
import { useContext } from "react";
// import react-router-dom packages
import { Outlet } from "react-router-dom";
// Import the useSelector hook from react-redux
import { useSelector } from "react-redux";
// Import the selectCurrentUser selector from the user.selector file
import { selectCurentUser } from "../../store/user/user.selector";

// import assets
import { ReactComponent as Logo } from "../../assets/crown.svg";

// import contexts
import { DropdownContext } from "../../contexts/card.context";

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
import { signOutUser } from "../../utils/firebase/firebase";

const Navbar = () => {
  const curentUser = useSelector(selectCurentUser);

  // use context to set dropdown visibility state
  const { isVisible } = useContext(DropdownContext);

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
