import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { AuthUserContext } from "../../contexts/user-auth-context";
import { signOutUser } from "../../utils/firebase/firebase";
import ShopingBagIcon from "../../components/shoping-bag-icon/shoping-bag-icon";

import "./navbar.scss";

const Navbar = () => {
  // useing auth context
  const { curentUser } = useContext(AuthUserContext);

  // handeler function
  const handleSignOut = async () => {
    await signOutUser();

    console.log("Sign Out successfully!!!");
  };

  return (
    <Fragment>
      <div className="nav">
        <Link className="nav_logo_container" to="/">
          <Logo />
        </Link>
        <div className="nav_links_container">
          <Link className="nav_link" to="/shop">
            SHOP
          </Link>
          <Link className="nav_link" to="/contact">
            CONTACT
          </Link>
          {curentUser ? (
            <span className="nav_link" onClick={handleSignOut}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav_link" to="/auth">
              SIGN IN
            </Link>
          )}
          <ShopingBagIcon />
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
