import {
  PropsWithChildren,
  createContext,
  useContext,
  useReducer,
  Dispatch,
} from "react";

import cartReducer, { initialState } from "../lib/cart-reducer";

type ShoppingCartContext = {
  cartItems: CartItemState[];
  dispatch: Dispatch<CartActions>;
  getItemQuantity: (id: string) => number;
};

export const ShoppingCartContext = createContext<ShoppingCartContext>(
  {} as ShoppingCartContext
);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export const ShoppingCartProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  function getItemQuantity(id: string) {
    return state.cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems: state.cartItems,
        dispatch: dispatch,
        getItemQuantity,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
