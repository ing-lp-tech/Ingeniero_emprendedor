import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProductSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import AboutMeSection from "./components/AboutMeSection";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import CartPage from "./components/CartPage";
import ComunidadPage from "./components/ComunidadPage";
import ImportacionPage from "./components/ImportacionPage";
import FAQ from "./components/Faq";

const AppContent = ({ cart, addToCart, removeFromCart }) => {
  const location = useLocation();
  const isComunidad = location.pathname === "/comunidad";

  return (
    <>
      {!isComunidad && <Navbar />}
      <div className="max-w-7xl mx-auto pt-0 px-0">
        {!isComunidad && <WhatsAppButton />}

        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection id="inicio" />
                <ProductSection
                  id="servicios"
                  cart={cart}
                  addToCart={addToCart}
                />
                <Workflow id="como-trabajamos" />
                <FAQ id="preguntasfreceuntes" />
                <AboutMeSection id="sobre-mi" />
              </>
            }
          />
          <Route
            path="/cart"
            element={<CartPage cart={cart} removeFromCart={removeFromCart} />}
          />
          <Route path="/comunidad" element={<ComunidadPage />} />
          <Route path="/importacion" element={<ImportacionPage />} />
        </Routes>
      </div>

      <Footer id="contacto" />
    </>
  );
};

export default AppContent;
