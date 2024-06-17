import { Product } from "../types/product.type";
import { products as initialProducts } from "../mocks/products.json";
import { useState } from "react";
import { Meta } from "@/types/pagination-meta.type";

interface Props {
  page?: number;
  take?: number;
}

interface Output {
  products: Product[];
  meta: Meta;
}

export function useProducts(props?: Props): Output {
  const { page = 1, take = 10 } = props ?? {};
  const [products] = useState(initialProducts);

  const skip = take * (page - 1);

  const productsForPage = products.slice(skip, skip + take);

  return {
    products: productsForPage,
    meta: {
      total: products.length,
      pageCount: productsForPage.length,
      hasNext: skip + take < products.length,
      hasPrevious: products.length > 0 && skip > 0,
    },
  };
}
