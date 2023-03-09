import { ProductContext } from "@/context/ProductContext";
import { useContext } from "react";

export default function CartItem({ id, quantity }: CartItemState) {
  const context = useContext(ProductContext);
  console.log(context?.products);
  const item = context?.products.find((product) => product.id === id);
  if (!item || quantity === 0) {
    return null;
  }
  console.log({ item });
  return (
    <div>
      {item.name}-{quantity}
    </div>
  );
}
