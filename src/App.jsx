import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { SearchProvider } from "./context/SearchContext";
import { FilterProvider } from "./context/FilterContext";

function App() {
  return (
    <SearchProvider>
      <FilterProvider>
        <Navbar />
        <AppRoutes />
        <Footer />
      </FilterProvider>
    </SearchProvider>
  );
}

export default App;
