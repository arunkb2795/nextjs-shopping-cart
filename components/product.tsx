import Image from "next/image";
import { useShoppingCart } from "@/context/ShoppingCartContext";

export default function Product({ id, name, price, image }: ProductProps) {
  const { dispatch, getItemQuantity } = useShoppingCart();

  const itemQuantity = getItemQuantity(id);

  return (
    <div>
      <Image src={"/" + image} alt={name} width={200} height={200} priority />
      <div>Name: {name}</div>
      <div>Price: {price}</div>
      <div>Qty: {itemQuantity}</div>
      <button
        onClick={() =>
          dispatch({
            type: "INCREASE_ITEM_QUANTITY",
            payload: { id },
          })
        }
      >
        +
      </button>
      <button
        disabled={!!!itemQuantity}
        onClick={() =>
          dispatch({
            type: "DECREASE_ITEM_QUANTITY",
            payload: { id },
          })
        }
      >
        -
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "REMOVE_ITEM_FROM_CART",
            payload: { id },
          })
        }
      >
        Remove
      </button>
    </div>
  );
}
