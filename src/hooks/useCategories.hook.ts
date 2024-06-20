export const ALL_CATEGORIES = "all";

interface CategoryOption {
  value: string;
  label: string;
}

interface Output {
  categories: CategoryOption[];
}

function useCategories(): Output {
  return {
    categories: [
      {
        value: ALL_CATEGORIES,
        label: "Todas",
      },
      {
        value: "t-shirts",
        label: "Camisetas",
      },
      {
        value: "shirt",
        label: "Camisa",
      },
      {
        value: "polo shirt",
        label: "Chomba",
      },
      {
        value: "jacket",
        label: "Chaqueta",
      },
      {
        value: "dress",
        label: "Vestido",
      },
    ],
  };
}

export default useCategories;
