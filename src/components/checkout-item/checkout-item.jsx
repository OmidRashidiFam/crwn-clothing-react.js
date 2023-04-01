import { useContext } from "react";
import { GrClose } from "react-icons/gr";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import { DropdownContext } from "../../contexts/card-dropdown-context";

import "./checkout-item.scss";

const CheckoutItem = ({ cardItem }) => {
  // useing card dropdown context
  const { cardDropdownItems, setCardDropdownItems } =
    useContext(DropdownContext);

  // helper functions
  const incriment = (cardDropdownItems, productToAdd) => {
    // find the card item contains productToAdd
    const existingCardDropdownItem = cardDropdownItems.find(
      (cardDropdownItem) => cardDropdownItem.id === productToAdd.id
    );
    // if found, increse the quantity
    if (existingCardDropdownItem) {
      return cardDropdownItems.map((cardDropdownItem) =>
        cardDropdownItem.id === productToAdd.id
          ? {
              ...cardDropdownItem,
              quantity: cardDropdownItem.quantity + 1,
            }
          : cardDropdownItem
      );
    }
  };

  const decriment = (cardDropdownItems, productToRemove) => {
    // find the card item contains productToRemove
    const existingCardDropdownItem = cardDropdownItems.find(
      (cardDropdownItem) => cardDropdownItem.id === productToRemove.id
    );
    // remove when card item quantity is 1
    if (existingCardDropdownItem.quantity === 1) {
      return cardDropdownItems.filter(
        (cardDropdownItem) => cardDropdownItem.id !== productToRemove.id
      );
    }
    // if found, decrese the quantity
    if (existingCardDropdownItem) {
      return cardDropdownItems.map((cardDropdownItem) =>
        cardDropdownItem.id === productToRemove.id
          ? {
              ...cardDropdownItem,
              quantity: cardDropdownItem.quantity - 1,
            }
          : cardDropdownItem
      );
    }
  };

  const remove = (cardDropdownItems, productToRemove) => {
    // find the card item contains productToRemove
    const existingCardDropdownItem = cardDropdownItems.find(
      (cardDropdownItem) => cardDropdownItem.id === productToRemove.id
    );
    // remove the card
    if (existingCardDropdownItem) {
      return cardDropdownItems.filter(
        (cardDropdownItem) => cardDropdownItem.id !== productToRemove.id
      );
    }
  };

  // handeler functions
  const handleIncrement = (productToAdd) => {
    setCardDropdownItems(incriment(cardDropdownItems, productToAdd));
  };

  const handleDecrement = (productToRemove) => {
    setCardDropdownItems(decriment(cardDropdownItems, productToRemove));
  };

  const handleRemove = (productToRemove) => {
    setCardDropdownItems(remove(cardDropdownItems, productToRemove));
  };

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
            handleDecrement(cardItem);
          }}
        >
          <AiOutlineLeft />
        </button>

        <span className="value">{quantity}</span>
        <button
          onClick={() => {
            handleIncrement(cardItem);
          }}
        >
          <AiOutlineRight />
        </button>
      </span>
      <span className="price">{price}$</span>
      <div className="remove-button">
        <button
          onClick={() => {
            handleRemove(cardItem);
          }}
        >
          <GrClose className="value" />
        </button>
      </div>
    </div>
  );
};

export default CheckoutItem;
