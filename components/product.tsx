import Image from "next/image";
import { useShoppingCart } from "@/context/ShoppingCartContext";

export default function Product({ id, name, price, image }: ProductProps) {
  const {
    getItemQuantity,
    increaseItemQuantity,
    decreaseItemQuantity,
    removeFromCart,
  } = useShoppingCart();

  const itemQuantity = getItemQuantity(id);

  return (
    <div>
      <Image src={"/" + image} alt={name} width={200} height={200} priority />
      <div>Name: {name}</div>
      <div>Price: {price}</div>
      <div>Qty: {itemQuantity}</div>
      <button onClick={() => increaseItemQuantity(id)}>+</button>
      <button
        disabled={!!!itemQuantity}
        onClick={() => decreaseItemQuantity(id)}
      >
        -
      </button>
      <button onClick={() => removeFromCart(id)}>Remove</button>
    </div>
  );
}
