import { useContext } from "react";

import { ReactComponent as ShopingIcon } from "../../assets/shopping-bag.svg";
import { DropdownContext } from "../../contexts/card-dropdown-context";

import "./shoping-bag-icon.scss";

const ShopingBagIcon = () => {
  // use dropdown context
  const { isVisible, setIsVisible, cardDropdownItemsCount } =
    useContext(DropdownContext);

  // handeler function
  const toggleIsVisible = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="shoping_bag_icon_container" onClick={toggleIsVisible}>
      <ShopingIcon className="shoping_bag_icon" />
      <span className="shoping_bag_icon_counter">{cardDropdownItemsCount}</span>
    </div>
  );
};

export default ShopingBagIcon;
