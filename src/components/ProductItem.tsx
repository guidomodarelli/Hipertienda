import { Product } from "@/types/product.type";
import ShoppingCartPlus from "@/icons/ShoppingCartPlus";
import Rating from "./Rating";
import { Button } from "./ui/Button";
import { Badge } from "./ui/Badge";

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
          <div className="flex items-center mt-2.5 mb-5 gap-2">
            <Rating rating={product.rating} />
            <Badge variant="outline">{product.rating}</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-lg text-gray-900 dark:text-white">
              {Intl.NumberFormat("en", {
                style: "currency",
                currency: "USD",
              }).format(product.price)}
            </span>
            <Button>
              <ShoppingCartPlus className="size-5 text-white" />
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default ProductItem;
