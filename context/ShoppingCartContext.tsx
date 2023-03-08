import { PropsWithChildren, createContext, useContext, useState } from "react";

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: PropsWithChildren) {
  const [cartItems, setCartItems] = useState<CartItemState[]>([]);

  function getItemQuantity(id: string) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseItemQuantity(id: string) {
    console.log({ id });
    setCartItems((currentItem) => {
      if (currentItem.find((item) => item.id === id) == null) {
        return [...currentItem, { id, quantity: 1 }];
      } else {
        return currentItem.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseItemQuantity(id: string) {
    setCartItems((currentItem) => {
      if (currentItem.find((item) => item.id === id) == null) {
        return [...cartItems];
      } else {
        return currentItem.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id: string) {
    setCartItems((currentItem) => {
      return currentItem.filter((item) => item.id !== id);
    });
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        getItemQuantity,
        increaseItemQuantity,
        decreaseItemQuantity,
        removeFromCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
