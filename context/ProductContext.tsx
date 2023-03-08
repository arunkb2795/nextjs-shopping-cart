import { createContext, PropsWithChildren, useState } from "react";

export interface ProductState {
  id: string;
  name: string;
  price: number;
  image: string;
}

export interface ProductContextType {
  products: ProductState[] | null;
  addProduct: (product: ProductState) => void;
  removeProduct: (productId: string) => void;
}

const initialState: ProductState[] = [
  {
    id: "item001",
    name: "Watch",
    price: 9.99,
    image: "watch.jpg",
  },
  {
    id: "item002",
    name: "Phone",
    price: 66.32,
    image: "mobile.jpg",
  },
  {
    id: "item003",
    name: "Laptop",
    price: 128.34,
    image: "laptop.jpg",
  },
];

export const ProductContext = createContext<ProductContextType | null>({
  products: null,
} as ProductContextType);

export function ProductProvider({ children }: PropsWithChildren) {
  const [products, setProducts] = useState<ProductState[] | null>(initialState);

  const addProductHandler = (products: ProductState) => {};

  const removeProductHandler = (products: string) => {};

  const context = {
    products: products,
    addProduct: addProductHandler,
    removeProduct: removeProductHandler,
  };

  return (
    <ProductContext.Provider value={context}>
      {children}
    </ProductContext.Provider>
  );
}
