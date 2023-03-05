import { useContext } from "react";

import Button from "../button/button";
import CardDropdowmItem from "../card-dropdown-item/card-dropdown-item";
import { DropdownContext } from "../../contexts/card-dropdown-context";

import "./card-dropdown.scss";

const CardDropdown = () => {
  // use product context
  const { cardDropdownItems } = useContext(DropdownContext);

  return (
    <div className="dropdown_container">
      <div className="dropdown_items">
        {cardDropdownItems
          ? cardDropdownItems.map((item) => (
              <CardDropdowmItem key={item.id} dropdowmItem={item} />
            ))
          : null}
      </div>
      <Button children="go to checkout" />
    </div>
  );
};

export default CardDropdown;
