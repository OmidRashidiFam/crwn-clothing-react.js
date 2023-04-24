import { useEffect, useContext } from "react";

import { DropdownContext } from "../../contexts/card-context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import {
  CheckoutContainer,
  CheckoutHeader,
  CheckoutBlock,
  Total,
} from "./checkout-page.style";

const CheckoutPage = () => {
  // useing card dropdown context
  const { cardItems, setIsVisible, cardTotal } = useContext(DropdownContext);

  // useing effect
  useEffect(() => {
    setIsVisible(false);
  }, []);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <CheckoutBlock>
          <span>product</span>
        </CheckoutBlock>
        <CheckoutBlock>
          <span>description</span>
        </CheckoutBlock>
        <CheckoutBlock>
          <span>quantity</span>
        </CheckoutBlock>
        <CheckoutBlock>
          <span>price</span>
        </CheckoutBlock>
        <CheckoutBlock>
          <span>remove</span>
        </CheckoutBlock>
      </CheckoutHeader>

      {cardItems.map((cardItem) => {
        return <CheckoutItem key={cardItem.id} cardItem={cardItem} />;
      })}

      <Total>Total: {cardTotal}$</Total>
    </CheckoutContainer>
  );
};

export default CheckoutPage;
