import { createContext, useState, useEffect } from "react";

export const DropdownContext = createContext({
  isVisible: false,
  setIsVisible: () => {},
  cardDropdownItems: [],
  setDropdownItems: () => {},
  cardDropdownItemsCount: 0,
  setCardDropdownItemsCount: () => {},
  total: 0,
});

// helper function
const addcardItem = (cardDropdownItems, productToAdd) => {
  // find if card item contains productToAdd
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

  // return the new array
  return [...cardDropdownItems, { ...productToAdd, quantity: 1 }];
};

export const DropdownContextProvider = ({ children }) => {
  // useing state
  const [isVisible, setIsVisible] = useState(false);
  const [cardDropdownItems, setCardDropdownItems] = useState([]);
  const [cardDropdownItemsCount, setCardDropdownItemsCount] = useState(0);
  const [total, setTotal] = useState(0);

  // using effect
  useEffect(() => {
    const newCount = cardDropdownItems.reduce(
      (count, cardDropdownItems) => count + cardDropdownItems.quantity,
      0
    );
    setCardDropdownItemsCount(newCount);
  }, [cardDropdownItems]);

  useEffect(() => {
    const newTotal = cardDropdownItems.reduce(
      (total, cardDropdownItems) =>
        total + cardDropdownItems.quantity * cardDropdownItems.price,
      0
    );
    setTotal(newTotal);
  }, [cardDropdownItems]);

  const addItemToCardDropdown = (productToAdd) => {
    setCardDropdownItems(addcardItem(cardDropdownItems, productToAdd));
  };

  const value = {
    isVisible,
    setIsVisible,
    cardDropdownItems,
    setCardDropdownItems,
    cardDropdownItemsCount,
    setCardDropdownItemsCount,
    addItemToCardDropdown,
    total,
  };

  return (
    <DropdownContext.Provider value={value}>
      {children}
    </DropdownContext.Provider>
  );
};
