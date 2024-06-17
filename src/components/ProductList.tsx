import { Product } from "../types/product.type";
import ProductItem from "./ProductItem";

interface Properties {
  products: Product[];
}

function ProductList({ products }: Properties) {
  return (
    <main>
      <ul>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </main>
  );
}

export default ProductList;
