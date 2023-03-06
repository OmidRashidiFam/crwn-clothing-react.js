import { useEffect, useContext } from "react";

import { DropdownContext } from "../../contexts/card-dropdown-context";

import "./checkout-page.scss";

const CheckoutPage = () => {
  // useing card dropdown context
  const { cardDropdownItems, setIsVisible } = useContext(DropdownContext);

  // effect
  useEffect(() => {
    setIsVisible(false);
  }, []);

  return (
    <div className="checkout_container">
      {cardDropdownItems.map((item) => {
        const { id, imageUrl, price, quantity, name } = item;
        return (
          <div className="checkout_item" key={id}>
            <img src={imageUrl} alt={`product name: ${name}`} />
            <span>{name}</span>

            <span>
              <button>+</button>
              {quantity}
              <button>-</button>
            </span>
            <span>{price}</span>
          </div>
        );
      })}
    </div>
  );
};

export default CheckoutPage;
