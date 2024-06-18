import { Product } from "../types/product.type";
import ProductItem from "./ProductItem";

interface Properties {
  products: Product[];
}

function ProductList({ products }: Properties) {
  return (
    <main>
      <ul className="grid grid-columns-auto-fit gap-2">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </main>
  );
}

export default ProductList;
