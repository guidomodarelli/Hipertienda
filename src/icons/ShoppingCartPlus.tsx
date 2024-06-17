import { cn } from "@/utils/cn";
import { PropsWithClassName } from "./PropsWithClassname.type";

function ShoppingCartPlus({ className }: PropsWithClassName) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart-plus", className)}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
      <path d="M12.5 17h-6.5v-14h-2" />
      <path d="M6 5l14 1l-.86 6.017m-2.64 .983h-10.5" />
      <path d="M16 19h6" />
      <path d="M19 16v6" />
    </svg>
  );
}

export default ShoppingCartPlus;