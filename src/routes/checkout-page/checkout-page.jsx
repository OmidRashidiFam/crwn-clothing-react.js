import { useEffect, useContext } from "react";

import { DropdownContext } from "../../contexts/card-dropdown-context";

import "./checkout-page.scss";

const CheckoutPage = () => {
  // useing card dropdown context
  const {
    cardDropdownItems,
    setCardDropdownItems,
    cardDropdownItemsCount,
    setCardDropdownItemsCount,
    setIsVisible,
  } = useContext(DropdownContext);

  // useing effect
  useEffect(() => {
    setIsVisible(false);
  }, []);

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

    // remove the card and decrese the quantity
    if (existingCardDropdownItem) {
      setCardDropdownItemsCount(
        cardDropdownItemsCount - existingCardDropdownItem.quantity
      );
      return cardDropdownItems.filter(
        (cardDropdownItem) => cardDropdownItem.id !== productToRemove.id
      );
    }
  };

  // handeler functions
  const handleIncrement = (productToAdd) => {
    setCardDropdownItems(incriment(cardDropdownItems, productToAdd));
    setCardDropdownItemsCount(cardDropdownItemsCount + 1);
  };

  const handleDecrement = (productToRemove) => {
    setCardDropdownItems(decriment(cardDropdownItems, productToRemove));
    setCardDropdownItemsCount(cardDropdownItemsCount - 1);
  };

  const handleRemove = (productToRemove) => {
    setCardDropdownItems(remove(cardDropdownItems, productToRemove));
  };

  return (
    <div className="checkout_container">
      {cardDropdownItems.map((item) => {
        const { id, imageUrl, price, quantity, name } = item;
        return (
          <div className="checkout_item" key={id}>
            <img src={imageUrl} alt={`product name: ${name}`} />
            <span>{name}</span>

            <span>
              <button
                onClick={() => {
                  handleIncrement(item);
                }}
              >
                +
              </button>
              {quantity}
              <button
                onClick={() => {
                  handleDecrement(item);
                }}
              >
                -
              </button>
            </span>
            <span>{price}$</span>
            <span>
              <button
                onClick={() => {
                  handleRemove(item);
                }}
              >
                X
              </button>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default CheckoutPage;
