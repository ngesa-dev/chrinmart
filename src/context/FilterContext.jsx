import { createContext, useContext, useState } from "react";

const FilterContext = createContext(null);

export const FilterProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <FilterContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      {children}
    </FilterContext.Provider>
  );
};

export function useFilter() {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
}
