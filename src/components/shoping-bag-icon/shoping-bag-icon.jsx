import { ReactComponent as ShopingIcon } from "../../assets/shopping-bag.svg";

import "./shoping-bag-icon.scss";

const ShopingBagIcon = () => {
  return (
    <div className="shoping_bag_icon_container">
      <ShopingIcon className="shoping_bag_icon" />
      <span className="shoping_bag_icon_counter">0</span>
    </div>
  );
};

export default ShopingBagIcon;
