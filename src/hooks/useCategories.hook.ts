interface Option {
  key: string;
  label: string;
}

interface Output {
  categories: Option[];
}

function useCategories(): Output {
  return {
    categories: [
      {
        key: "all",
        label: "Todas",
      },
      {
        key: "laptops",
        label: "Notebooks",
      },
      {
        key: "smartphones",
        label: "Celulares",
      },
    ],
  };
}

export default useCategories;
