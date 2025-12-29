import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { SearchProvider } from "./context/SearchContext";
function App() {
  return (
    <>
    <SearchProvider>
  <Navbar />
      <AppRoutes />
      <Footer />

    </SearchProvider>
    
    </>
  );
}

export default App;
