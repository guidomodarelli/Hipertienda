import useCategories, { ALL_CATEGORIES } from "@/hooks/useCategories.hook";
import { Combobox } from "./ui/ComboBox";
import { useState } from "react";

function Filters() {
  const { categories } = useCategories();
  const [category, setCategory] = useState(ALL_CATEGORIES);

  return (
    <section className="w-full">
      <form className="flex flex-col sm:flex-row justify-between gap w-full sm:gap-4 gap-2">
        <div className="flex sm:flex-row flex-col gap-2 sm:gap-0">
          <label className="block text-sm text-gray-900 dark:text-white max-w-52">
            Precio mínimo
            <input
              type="number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:rounded-r-none"
              placeholder="Precio mínimo"
            ></input>
          </label>
          <label className="block text-sm text-gray-900 dark:text-white max-w-52">
            Precio máximo
            <input
              type="number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 sm:rounded-l-none"
              placeholder="Precio máximo"
            ></input>
          </label>
        </div>

        <div>
          <label className="flex flex-col text-sm text-gray-900 dark:text-white max-w-52">
            Categoría
            <Combobox
              value={category}
              onChange={setCategory}
              options={categories}
              defaultValue={ALL_CATEGORIES}
              notFoundMessage="No se encotraron categorías"
              buttonText="Selecciona una categoría..."
              placeholder="Buscar..."
            />
          </label>
        </div>
      </form>
    </section>
  );
}

export default Filters;
