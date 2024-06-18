import useCategories, { ALL_CATEGORIES } from "@/hooks/useCategories.hook";
import { Combobox } from "../ui/ComboBox";
import { useState } from "react";
import { Label } from "../ui/Label";
import { Input } from "../ui/Input";
import styles from "./style.module.css";

function Filters() {
  const { categories } = useCategories();
  const [category, setCategory] = useState(ALL_CATEGORIES);

  return (
    <section className={styles.section}>
      <form className={styles.form}>
        <div className={styles.range_price}>
          <Label className={styles.label}>
            Precio mínimo
            <Input type="number" className={styles.price_min} placeholder="$ MIN"></Input>
          </Label>
          <Label className={styles.label}>
            Precio máximo
            <Input type="number" className={styles.price_max} placeholder="$ MAX"></Input>
          </Label>
        </div>

        <Label className={styles.label}>
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
        </Label>
      </form>
    </section>
  );
}

export default Filters;
