import Button from "../button/button";

import "./card-dropdown.scss";

const CardDropdown = () => {
  return (
    <div className="dropdown_container">
      <div className="dropdown_items" />
      <Button children="go to checkout" />
    </div>
  );
};

export default CardDropdown;
