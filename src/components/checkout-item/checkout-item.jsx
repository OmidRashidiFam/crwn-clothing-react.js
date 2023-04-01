import { useContext } from "react";
import { GrClose } from "react-icons/gr";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import { DropdownContext } from "../../contexts/card-dropdown-context";

import "./checkout-item.scss";

const CheckoutItem = ({ cardItem }) => {
  // useing card dropdown context
  const {
    addItemToCardDropdown,
    removeItemFromCardDropdown,
    deleteItemFromCardDropdown,
  } = useContext(DropdownContext);

  const { imageUrl, price, quantity, name } = cardItem;
  return (
    <div className="checkout_item_container">
      <div className="image-container">
        <img src={imageUrl} alt={`product name: ${name}`} />
      </div>
      <span className="name">{name}</span>

      <span className="quantity">
        <button
          onClick={() => {
            removeItemFromCardDropdown(cardItem);
          }}
        >
          <AiOutlineLeft />
        </button>

        <span className="value">{quantity}</span>
        <button
          onClick={() => {
            addItemToCardDropdown(cardItem);
          }}
        >
          <AiOutlineRight />
        </button>
      </span>
      <span className="price">{price}$</span>
      <div className="remove-button">
        <button
          onClick={() => {
            deleteItemFromCardDropdown(cardItem);
          }}
        >
          <GrClose className="value" />
        </button>
      </div>
    </div>
  );
};

export default CheckoutItem;
