import { Product } from "@/types/product.type";
import ShoppingCartPlus from "@/icons/ShoppingCartPlus";
import Rating from "./Rating";

interface Props {
  product: Product;
}

function ProductItem({ product }: Props) {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img className="p-8 rounded-t-lg" src={product.thumbnail} alt={`Product image: ${product.title}`} />
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.title}</h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          <Rating rating={product.rating} />
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
            {product.rating}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            {Intl.NumberFormat("en", {
              style: "currency",
              currency: "USD",
            }).format(product.price)}
          </span>
          <a
            href="#"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <ShoppingCartPlus />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
