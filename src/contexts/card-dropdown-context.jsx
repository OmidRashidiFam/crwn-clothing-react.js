import { createContext, useState } from "react";

export const DropdownContext = createContext({
  isVisible: false,
  setIsVisible: () => {},
  cardDropdownItems: [],
  setDropdownItems: () => {},
  cardDropdownItemsCount: 0,
  setCardDropdownItemsCount: () => {},
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

  const addItemToCardDropdown = (productToAdd) => {
    setCardDropdownItems(addcardItem(cardDropdownItems, productToAdd));
    setCardDropdownItemsCount(cardDropdownItemsCount + 1);
  };

  const value = {
    isVisible,
    setIsVisible,
    cardDropdownItems,
    cardDropdownItemsCount,
    addItemToCardDropdown,
  };

  return (
    <DropdownContext.Provider value={value}>
      {children}
    </DropdownContext.Provider>
  );
};
