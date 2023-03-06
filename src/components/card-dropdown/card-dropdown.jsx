import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../button/button";
import CardDropdowmItem from "../card-dropdown-item/card-dropdown-item";
import { DropdownContext } from "../../contexts/card-dropdown-context";

import "./card-dropdown.scss";

const CardDropdown = () => {
  // use product context
  const { cardDropdownItems } = useContext(DropdownContext);

  // use navigate
  const navigate = useNavigate();

  const handleGoTocheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="dropdown_container">
      <div className="dropdown_items">
        {cardDropdownItems
          ? cardDropdownItems.map((item) => (
              <CardDropdowmItem key={item.id} dropdowmItem={item} />
            ))
          : null}
      </div>
      <Button children="go to checkout" onClick={handleGoTocheckout} />
    </div>
  );
};

export default CardDropdown;
