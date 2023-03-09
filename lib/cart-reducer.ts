export const initialState: CartState = {
  cartItems: [],
};

const cartReducer = (state: CartState = initialState, action: CartActions) => {
  if (action.type === "INCREASE_ITEM_QUANTITY") {
    const { id } = action.payload;
    if (state.cartItems.find((item) => item.id === id) == null) {
      let data = [...state.cartItems, { id, quantity: 1 }];
      return { ...state, cartItems: data };
    } else {
      let data = state.cartItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      return { ...state, cartItems: data };
    }
  }
  if (action.type === "DECREASE_ITEM_QUANTITY") {
    const { id } = action.payload;
    if (state.cartItems.find((item) => item.id === id) == null) {
      return { ...state };
    } else {
      let data = state.cartItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
      return { ...state, cartItems: data };
    }
  }

  if (action.type === "REMOVE_ITEM_FROM_CART") {
    const { id } = action.payload;
    let data = state.cartItems.filter((item) => item.id !== id);
    return { ...state, cartItems: data };
  }

  return state;
};

export default cartReducer;
