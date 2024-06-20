import Filters from "./Filters/Filters";
import { TypographyH1 } from "./ui/typography/TypographyH1";

function Header() {
  return (
    <div className="mb-8">
      <TypographyH1>Hipertienda</TypographyH1>
      <Filters />
    </div>
  );
}

export default Header;
