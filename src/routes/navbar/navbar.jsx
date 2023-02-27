import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { AuthContext } from "../../contexts/auth-context";
import { signOutUser } from "../../utils/firebase/firebase";

import "./navbar.scss";

const Navbar = () => {
  // useing auth context
  const { curentUser, setCurentUser } = useContext(AuthContext);

  // handeler function
  const handleSignOut = async () => {
    await signOutUser();
    setCurentUser(null);
    console.log("Sign Out successfully!!!");
    alert("Sign Out successfully");
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
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
