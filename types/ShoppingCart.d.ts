type CartItemState = {
  id: string;
  quantity: number;
};

type ShoppingCartContext = {
  cartItems: CartItemState[];
  getItemQuantity: (id: string) => number;
  increaseItemQuantity: (id: string) => void;
  decreaseItemQuantity: (id: string) => void;
  removeFromCart: (id: string) => void;
};
