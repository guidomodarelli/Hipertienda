import { useState } from "react";
import ProductList from "./components/ProductList";
import { useProducts } from "./hooks/useProducts.hook";
import Header from "./components/Header";

const ALL_CATEGORIES = "all";

interface FilterProducts {
  category: string;
  minPrice: number;
  maxPrice: number;
}

function App() {
  const { products } = useProducts();
  const [filters /* , setFilters */] = useState<FilterProducts>({
    category: ALL_CATEGORIES,
    minPrice: 0,
    maxPrice: Infinity,
  });

  const filteredProducts = products
    .filter((product) => product.price >= filters.minPrice)
    .filter((product) => filters.category === ALL_CATEGORIES || filters.category === product.category);

  return (
    <>
      <Header />
      <ProductList products={filteredProducts} />
    </>
  );
}

export default App;
