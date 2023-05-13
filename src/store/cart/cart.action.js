// import cart action types and createAction from reducer.utils
import { CART_ACTION_TYPE } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";

// helper function to increment item count in cartItems
const incriment = (cartItems, productToAdd) => {
  // find if cartItems contains productToAdd
  const existingcartDropdownItem = cartItems.find(
    (cartDropdownItem) => cartDropdownItem.id === productToAdd.id
  );
  // if found, increse the quantity
  if (existingcartDropdownItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          }
        : cartItem
    );
  }
  // return the new array -> cartItems
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

// helper function to decriment item count in carItems
const decriment = (cartItems, productToRemove) => {
  // find the cartItems contains productToRemove
  const existingcartDropdownItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );
  // delete when existingcartDropdownItem quantity is 1
  if (existingcartDropdownItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }
  // if found, decrese the quantity
  if (existingcartDropdownItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToRemove.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity - 1,
          }
        : cartItem
    );
  }
};

// helper function to delete item from cartItems
const remove = (cartItems, productToDelete) => {
  // find the cartItems contains productToRemove
  const existingcartDropdownItem = cartItems.find(
    (cartItem) => cartItem.id === productToDelete.id
  );
  // delete the cart
  if (existingcartDropdownItem) {
    return cartItems.filter((cartItem) => cartItem.id !== productToDelete.id);
  }
};

// toggle visibility of cart
export const setIsVisible = (value) => {
  return createAction(CART_ACTION_TYPE.SET_IS_VISIBIL, value);
};

// add item to cart
export const addItemTocart = (cartItems, productToAdd) => {
  const newcartItems = incriment(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPE.SET_CART_ITEM, newcartItems);
};

// remove item from cart
export const removeItemFromcart = (cartItems, productToRemove) => {
  const newcartItems = decriment(cartItems, productToRemove);
  return createAction(CART_ACTION_TYPE.SET_CART_ITEM, newcartItems);
};

// delete item from cart
export const deleteItemFromcart = (cartItems, productToDelete) => {
  const newcartItems = remove(cartItems, productToDelete);
  return createAction(CART_ACTION_TYPE.SET_CART_ITEM, newcartItems);
};
