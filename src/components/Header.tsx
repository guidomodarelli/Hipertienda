import Filters from "./Filters/Filters";

function Header() {
  return (
    <div className="mb-8">
      <h1 className="text-4xl font-bold mb-5">Hipertienda</h1>
      <Filters />
    </div>
  );
}

export default Header;
