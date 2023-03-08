import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ProductProvider } from "@/context/ProductContext";
import { ShoppingCartProvider } from "@/context/ShoppingCartContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProductProvider>
      <ShoppingCartProvider>
        <Component {...pageProps} />
      </ShoppingCartProvider>
    </ProductProvider>
  );
}
