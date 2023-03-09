import { useShoppingCart } from "@/context/ShoppingCartContext";
import CartItem from "./cartItem";

export default function Cart() {
  const { cartItems } = useShoppingCart();
  return (
    <div>
      {cartItems.map((item) => (
        <CartItem key={item.id} id={item.id} quantity={item.quantity} />
      ))}
    </div>
  );
}
