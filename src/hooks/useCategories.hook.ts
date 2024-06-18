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
        value: "laptops",
        label: "Notebooks",
      },
      {
        value: "smartphones",
        label: "Celulares",
      },
    ],
  };
}

export default useCategories;
