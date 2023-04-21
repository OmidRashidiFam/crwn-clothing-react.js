import { useEffect, useContext } from "react";

import { DropdownContext } from "../../contexts/card-dropdown-context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import "./checkout-page.scss";

const CheckoutPage = () => {
  // useing card dropdown context
  const { cardDropdownItems, setIsVisible, total } =
    useContext(DropdownContext);

  // useing effect
  useEffect(() => {
    setIsVisible(false);
  }, []);

  return (
    <div className="checkout_container">
      <div className="checkout_header">
        <div className="header_block">
          <span>product</span>
        </div>
        <div className="header_block">
          <span>description</span>
        </div>
        <div className="header_block">
          <span>quantity</span>
        </div>
        <div className="header_block">
          <span>price</span>
        </div>
        <div className="header_block">
          <span>remove</span>
        </div>
      </div>

      {cardDropdownItems.map((cardItem) => {
        return <CheckoutItem key={cardItem.id} cardItem={cardItem} />;
      })}

      <span className="total">Total: {total}$</span>
    </div>
  );
};

export default CheckoutPage;
