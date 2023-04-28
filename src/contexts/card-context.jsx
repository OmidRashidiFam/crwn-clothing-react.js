// import useReducer, createContext from react
import { createContext, useReducer } from "react";

// import custom hook :)
import { createAction } from "../utils/reducer/reducer.utils";

// Creating a context to store data which can be accessed globally throughout the app
export const DropdownContext = createContext({
  isVisible: false,
  cardItems: [],
  cardCount: 0,
  cardTotal: 0,
  setIsVisible: () => {},
});

// helper function to increment item count in cardItems
const incriment = (cardItems, productToAdd) => {
  // find if cardItems contains productToAdd
  const existingCardDropdownItem = cardItems.find(
    (cardDropdownItem) => cardDropdownItem.id === productToAdd.id
  );

  // if found, increse the quantity
  if (existingCardDropdownItem) {
    return cardItems.map((cardItem) =>
      cardItem.id === productToAdd.id
        ? {
            ...cardItem,
            quantity: cardItem.quantity + 1,
          }
        : cardItem
    );
  }

  // return the new array -> cardItems
  return [...cardItems, { ...productToAdd, quantity: 1 }];
};

// helper function to decriment item count in carItems
const decriment = (cardItems, productToRemove) => {
  // find the cardItems contains productToRemove
  const existingCardDropdownItem = cardItems.find(
    (cardItem) => cardItem.id === productToRemove.id
  );

  // delete when existingCardDropdownItem quantity is 1
  if (existingCardDropdownItem.quantity === 1) {
    return cardItems.filter((cardItem) => cardItem.id !== productToRemove.id);
  }

  // if found, decrese the quantity
  if (existingCardDropdownItem) {
    return cardItems.map((cardItem) =>
      cardItem.id === productToRemove.id
        ? {
            ...cardItem,
            quantity: cardItem.quantity - 1,
          }
        : cardItem
    );
  }
};

// helper function to remove item from cardItems
const remove = (cardItems, productToRemove) => {
  // find the cardItems contains productToRemove
  const existingCardDropdownItem = cardItems.find(
    (cardItem) => cardItem.id === productToRemove.id
  );

  // remove the card
  if (existingCardDropdownItem) {
    return cardItems.filter((cardItem) => cardItem.id !== productToRemove.id);
  }
};

// define initial state for the reducer
const INITIAL_STATE = {
  isVisible: false,
  cardItems: [],
  cardCount: 0,
  cardTotal: 0,
};

// define card action type
const CARD_DROPDOWN_ACTION_TYPE = {
  SET_IS_VISIBLE: "SET_IS_VISIBLE",
  SET_CARD_ITEM: "SET_CARD_ITEM",
};

// reducer function to handle state changes
const cardDeopdownReducer = (state, action) => {
  // destructure type and payload from action
  const { type, payload } = action;

  // Execute switch statement depending on action type
  switch (type) {
    case CARD_DROPDOWN_ACTION_TYPE.SET_IS_VISIBLE:
      return {
        ...state,
        isVisible: payload,
      };

    case CARD_DROPDOWN_ACTION_TYPE.SET_CARD_ITEM:
      return {
        ...state,
        ...payload,
      };

    default:
      throw new Error(`Unhnadled type: ${type}.
      in cardDeopdownReducer
      in card-dropdown-context.jsx`);
  }
};

// context provider
export const DropdownContextProvider = ({ children }) => {
  // destructure state and dispatch from userReducer
  const [state, dispatch] = useReducer(cardDeopdownReducer, INITIAL_STATE);
  const { isVisible, cardItems, cardCount, cardTotal } = state;

  // setIsVisible function action to update visiblelity of card dropdown
  const setIsVisible = (value) => {
    dispatch(createAction(CARD_DROPDOWN_ACTION_TYPE.SET_IS_VISIBLE, value));
  };

  // updateCardItems function action to update cardItems, cardCount, cardTotal
  const updateCardItemsReducer = (newCardItems) => {
    const newCount = newCardItems.reduce(
      (count, cardItems) => count + cardItems.quantity,
      0
    );

    const newTotal = newCardItems.reduce(
      (total, cardItems) => total + cardItems.quantity * cardItems.price,
      0
    );

    dispatch(
      createAction(CARD_DROPDOWN_ACTION_TYPE.SET_CARD_ITEM, {
        cardItems: newCardItems,
        cardCount: newCount,
        cardTotal: newTotal,
      })
    );
  };

  // add item to card dropdown
  const addItemToCardDropdown = (productToAdd) => {
    const newCardDropdownItems = incriment(cardItems, productToAdd);
    updateCardItemsReducer(newCardDropdownItems);
  };

  // remove item from card dropdown
  const removeItemFromCardDropdown = (productToRemove) => {
    const newCardDropdownItems = decriment(cardItems, productToRemove);
    updateCardItemsReducer(newCardDropdownItems);
  };

  // delete item from card dropdown
  const deleteItemFromCardDropdown = (productToRemove) => {
    const newCardDropdownItems = remove(cardItems, productToRemove);
    updateCardItemsReducer(newCardDropdownItems);
  };

  const value = {
    isVisible,
    cardItems,
    cardCount,
    cardTotal,
    setIsVisible,
    addItemToCardDropdown,
    removeItemFromCardDropdown,
    deleteItemFromCardDropdown,
  };

  return (
    <DropdownContext.Provider value={value}>
      {children}
    </DropdownContext.Provider>
  );
};
