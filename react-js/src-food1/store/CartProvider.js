import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_TYPE") {
    const updatedItems = state.items.concat(action.item);
    const updatedTotal = state.totalAmount + action.item.price * action;
    return {
      items: updatedItems,
      totalAmount: updatedTotal,
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, setCartSate] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    setCartSate({ type: "ADD_ITEMS", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    setCartSate({ type: "REMOVE_ITEMS", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.items,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
