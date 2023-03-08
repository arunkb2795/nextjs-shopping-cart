import { useShoppingCart } from "@/context/ShoppingCartContext";

export default function Cart() {
  const {
    cartItems,
    getItemQuantity,
    increaseItemQuantity,
    decreaseItemQuantity,
    removeFromCart,
  } = useShoppingCart();

  const itemQuantity = getItemQuantity();
  console.log({ itemQuantity });
  console.log({ cartItems });
  return <div>cart{itemQuantity}</div>;
}
