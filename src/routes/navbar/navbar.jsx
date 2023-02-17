import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from '../../assets/crown.svg'
import './navbar.scss'

const Navbar = () => {
  return (
    <Fragment>
      <div className="nav">
        <Link className="nav_logo_container" to='/'>
          <Logo />
        </Link>
        <div className="nav_links_container">
          <Link className="nav_link" to='/shop' >SHOP</Link>
          <Link className="nav_link" to='/contact' >CONTACT</Link>
          <Link className="nav_link" to='/signup-login' >SIGN UP</Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navbar;