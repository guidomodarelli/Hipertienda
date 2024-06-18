import { Product } from "@/types/product.type";
import ShoppingCartPlus from "@/icons/ShoppingCartPlus";
import Rating from "./Rating";

interface Props {
  product: Product;
}

function ProductItem({ product }: Props) {
  return (
    <li>
      <div className="size-full flex flex-col justify-between max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img className="rounded-t-lg" src={product.thumbnail} alt={`Product image: ${product.title}`} />
        <div className="px-5 pb-5 flex flex-col justify-between">
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
            <span className="text-lg text-gray-900 dark:text-white">
              {Intl.NumberFormat("en", {
                style: "currency",
                currency: "USD",
              }).format(product.price)}
            </span>
            <a
              href="#"
              className="hover:scale-110 transition-all focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center"
            >
              <ShoppingCartPlus />
            </a>
          </div>
        </div>
      </div>
    </li>
  );
}

export default ProductItem;
