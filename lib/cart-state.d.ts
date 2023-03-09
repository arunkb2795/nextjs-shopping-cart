type CartItemState = {
  id: string;
  quantity: number;
};

type CartState = {
  cartItems: CartItemState[];
};

type IncreaseItemQuantityAction = {
  type: "INCREASE_ITEM_QUANTITY";
  payload: {
    id: string;
  };
};

type DecreaseItemQuantityAction = {
  type: "DECREASE_ITEM_QUANTITY";
  payload: {
    id: string;
  };
};

type GetItemQuantityAction = {
  type: "GET_ITEM_QUANTITY";
  payload: {
    id: string;
  };
};

type RemoveItemFromCartAction = {
  type: "REMOVE_ITEM_FROM_CART";
  payload: {
    id: string;
  };
};

type CartActions =
  | IncreaseItemQuantityAction
  | DecreaseItemQuantityAction
  | RemoveItemFromCartAction;
