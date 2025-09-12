import { useEffect, useState } from "react";
import { products } from "../constants";
import { plotters } from "../constants";
import { pcs } from "../constants";
import { kitCameras } from "../constants";
import { imouCams } from "../constants";
import { ShoppingCart, Filter, X } from "lucide-react";
import { Link } from "react-router-dom";

const ProductSection = ({ id, cart, addToCart }) => {
  const [dolarOficial, setDolarOficial] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const allPlotters = [...plotters.inyeccion, ...plotters.corte];

  useEffect(() => {
    const fetchDolar = async () => {
      try {
        const res = await fetch("https://dolarapi.com/v1/dolares/oficial");
        const data = await res.json();
        console.log("Dólar Oficial:", data.venta);
        setDolarOficial(data.venta);
      } catch (error) {
        console.error("Error al obtener la cotización:", error);
      }
    };

    fetchDolar();
  }, []);

  // Función para manejar el cambio de filtro
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    // Ocultar el panel de filtros en móviles después de seleccionar
    if (window.innerWidth < 768) {
      setShowFilters(false);
    }
  };

  // Filtrar productos según el filtro activo
  const filteredProducts = {
    plotters: allPlotters,
    papers: products,
    pcs: pcs,
    kitCameras: kitCameras.kits,
    imouCams: imouCams.imous,
  };

  return (
    <section id="productos" className="py-6 px-4 md:px-8 bg-gray-50">
      <div id={id} className="relative mt-4 min-h-[800px]">
        <div className="text-center">
          <span className="bg-blue-600 text-white rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
            Catálogo
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
            Nuestros{" "}
            <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
              Productos
            </span>
          </h2>
        </div>

        <Link
          to="/cart"
          className="fixed top-24 right-4 z-40 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition flex items-center"
        >
          <ShoppingCart className="h-6 w-6" />
          <span className="ml-1 bg-white text-blue-600 rounded-full h-6 w-6 flex items-center justify-center text-sm font-bold">
            {cart.length}
          </span>
        </Link>

        {/* Filtros */}
        <div className="mt-10 flex flex-col items-center">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg mb-4"
          >
            <Filter size={18} />
            {showFilters ? "Ocultar Filtros" : "Mostrar Filtros"}
          </button>

          <div
            className={`${
              showFilters ? "flex" : "hidden md:flex"
            } flex-wrap justify-center gap-2 mb-8`}
          >
            <button
              onClick={() => handleFilterChange("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                activeFilter === "all"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Todos los productos
            </button>
            <button
              onClick={() => handleFilterChange("plotters")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                activeFilter === "plotters"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Plotters
            </button>
            <button
              onClick={() => handleFilterChange("papers")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                activeFilter === "papers"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Papeles
            </button>
            <button
              onClick={() => handleFilterChange("pcs")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                activeFilter === "pcs"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              PCs
            </button>
            <button
              onClick={() => handleFilterChange("kitCameras")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                activeFilter === "kitCameras"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Kits de Cámaras
            </button>
            <button
              onClick={() => handleFilterChange("imouCams")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                activeFilter === "imouCams"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Cámaras IMOU
            </button>
          </div>
        </div>

        {/* Sección de Plotters */}
        {(activeFilter === "all" || activeFilter === "plotters") && (
          <div className="mt-16 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8">
              <span className="border-b-4 border-blue-500 pb-2">
                Nuestros Plotters
              </span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
              {allPlotters.map((plotter) => (
                <div
                  key={plotter.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={plotter.image}
                      alt={plotter.nombre}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                          "https://via.placeholder.com/300x200?text=Plotter+Image";
                      }}
                    />
                  </div>

                  <div className="p-6 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="text-xl font-bold text-gray-900">
                          {plotter.nombre}
                        </h3>
                        <span
                          className={`${
                            plotter.id <= 4
                              ? "bg-blue-100 text-blue-800"
                              : "bg-green-100 text-green-800"
                          } text-sm font-semibold px-2.5 py-0.5 rounded`}
                        >
                          {plotter.id <= 4 ? "Inyección" : "Corte"}
                        </span>
                      </div>

                      <p className="mt-2 text-gray-600">
                        {plotter.descripcion}
                      </p>

                      <div className="mt-4 text-sm text-gray-700 space-y-2">
                        <div className="flex items-center justify-between">
                          <p>
                            <span className="font-semibold">
                              Pre-venta(usd):
                            </span>{" "}
                            ${plotter.precio_pre_venta.toLocaleString()}
                          </p>
                          <p>
                            <span className="font-semibold">pesos:</span> $
                            {dolarOficial
                              ? (
                                  plotter.precio_pre_venta * dolarOficial
                                ).toLocaleString()
                              : "Cargando..."}
                          </p>
                          <button
                            onClick={() =>
                              addToCart({
                                ...plotter,
                                quantity: 1,
                                price: plotter.precio_pre_venta * dolarOficial,
                                name: plotter.nombre,
                              })
                            }
                            className="bg-blue-600 text-white text-xs px-3 py-1 rounded hover:bg-blue-700 transition"
                          >
                            Añadir
                          </button>
                        </div>
                        <div className="flex items-center justify-between">
                          <p>
                            <span className="font-semibold">
                              Stock actual(usd):
                            </span>{" "}
                            ${plotter.precio_de_llegada.toLocaleString()}
                          </p>
                          <p>
                            <span className="font-semibold">pesos:</span> $
                            {dolarOficial
                              ? (
                                  plotter.precio_de_llegada * dolarOficial
                                ).toLocaleString()
                              : "Cargando..."}
                          </p>
                          <button
                            onClick={() =>
                              addToCart({
                                ...plotter,
                                quantity: 1,
                                price: plotter.precio_de_llegada * dolarOficial,
                                name: plotter.nombre,
                              })
                            }
                            className="bg-green-600 text-white text-xs px-3 py-1 rounded hover:bg-green-700 transition"
                          >
                            Añadir
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Sección de Papeles */}
        {(activeFilter === "all" || activeFilter === "papers") && (
          <div className="mt-16 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8">
              <span className="border-b-4 border-blue-500 pb-2">
                Nuestros Papeles
              </span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-6 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="text-xl font-bold text-gray-900">
                          {product.name}
                        </h3>
                        <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-2.5 py-0.5 rounded">
                          {product.category}
                        </span>
                      </div>

                      <p className="mt-2 text-gray-600">
                        {product.description}
                      </p>

                      <div className="mt-4 text-sm text-gray-700 space-y-2">
                        <div className="flex items-center justify-between">
                          <p>
                            Combo 5u: ${product.combos.combo5u.toLocaleString()}
                          </p>
                          <button
                            onClick={() =>
                              addToCart({
                                ...product,
                                quantity: 5,
                                price: product.combos.combo5u,
                              })
                            }
                            className="bg-blue-600 text-white text-xs px-3 py-1 rounded hover:bg-blue-700"
                          >
                            Añadir
                          </button>
                        </div>
                        <div className="flex items-center justify-between">
                          <p>
                            Combo 15u: $
                            {product.combos.combo15u.toLocaleString()}
                          </p>
                          <button
                            onClick={() =>
                              addToCart({
                                ...product,
                                quantity: 15,
                                price: product.combos.combo15u,
                              })
                            }
                            className="bg-blue-600 text-white text-xs px-3 py-1 rounded hover:bg-blue-700"
                          >
                            Añadir
                          </button>
                        </div>
                        <div className="flex items-center justify-between">
                          <p>
                            Combo 30u: $
                            {product.combos.combo30u.toLocaleString()}
                          </p>
                          <button
                            onClick={() =>
                              addToCart({
                                ...product,
                                quantity: 30,
                                price: product.combos.combo30u,
                              })
                            }
                            className="bg-blue-600 text-white text-xs px-3 py-1 rounded hover:bg-blue-700"
                          >
                            Añadir
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Sección de PCs */}
        {(activeFilter === "all" || activeFilter === "pcs") && (
          <div className="mt-16 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8">
              <span className="border-b-4 border-blue-500 pb-2">
                Nuestras PCs
              </span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
              {pcs.map((pc) => (
                <div
                  key={pc.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition"
                >
                  <div className="h-48 overflow-hidden flex items-center justify-center bg-gray-100">
                    <img
                      src={pc.image}
                      alt={pc.name}
                      className="max-w-full object-contain"
                    />
                  </div>

                  <div className="p-6 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="text-xl font-bold text-gray-900">
                          {pc.name}
                        </h3>
                        <span className="bg-green-100 text-green-800 text-sm font-semibold px-2.5 py-0.5 rounded">
                          {pc.category}
                        </span>
                      </div>

                      <p className="mt-2 text-gray-600">{pc.description}</p>

                      <div className="mt-4 text-sm text-gray-700 space-y-1 text-left">
                        <p>
                          <strong>Procesador:</strong> {pc.specs.procesador}
                        </p>
                        <p>
                          <strong>Gráficos:</strong> {pc.specs.graficos}
                        </p>
                        <p>
                          <strong>RAM:</strong> {pc.specs.ram}
                        </p>
                        <p>
                          <strong>Almacenamiento:</strong>{" "}
                          {pc.specs.almacenamiento}
                        </p>
                        <p>
                          <strong>Mother:</strong> {pc.specs.mother}
                        </p>
                        <p>
                          <strong>Sistema:</strong> {pc.specs.sistema}
                        </p>
                      </div>

                      <div className="mt-4 text-sm text-gray-700 space-y-2">
                        <div className="flex items-center justify-between">
                          <p>
                            Combo Básico: ${pc.combos.basico.toLocaleString()}
                          </p>
                          <button
                            onClick={() =>
                              addToCart({
                                ...pc,
                                quantity: 1,
                                price: pc.combos.basico,
                              })
                            }
                            className="bg-blue-600 text-white text-xs px-3 py-1 rounded hover:bg-blue-700"
                          >
                            Añadir
                          </button>
                        </div>
                        <div className="flex items-center justify-between">
                          <p>
                            Con Monitor: $
                            {pc.combos.conMonitor.toLocaleString()}
                          </p>
                          <button
                            onClick={() =>
                              addToCart({
                                ...pc,
                                quantity: 1,
                                price: pc.combos.conMonitor,
                              })
                            }
                            className="bg-blue-600 text-white text-xs px-3 py-1 rounded hover:bg-blue-700"
                          >
                            Añadir
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Sección de Kits de Cámaras */}
        {(activeFilter === "all" || activeFilter === "kitCameras") && (
          <div className="mt-16 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8">
              <span className="border-b-4 border-blue-500 pb-2">
                Nuestros Kits de Cámaras
              </span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
              {kitCameras.kits.map((kit) => (
                <div
                  key={kit.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition"
                >
                  <div className="-48 overflow-hidden">
                    <img
                      src={kit.image}
                      alt={kit.name}
                      className="h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                          "https://via.placeholder.com/300x200?text=Kit+de+Cámaras";
                      }}
                    />
                  </div>

                  <div className="p-6 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="text-xl font-bold text-gray-900">
                          {kit.name}
                        </h3>
                        <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-2.5 py-0.5 rounded">
                          {kit.category}
                        </span>
                      </div>

                      <p className="mt-2 text-gray-600">{kit.description}</p>

                      <div className="mt-4 text-sm text-gray-700 space-y-2">
                        <div className="flex items-center justify-between">
                          <p>
                            <span className="font-semibold">Kit:</span> $
                            {dolarOficial
                              ? (kit.price * dolarOficial).toLocaleString()
                              : "Cargando..."}
                          </p>

                          <button
                            onClick={() =>
                              addToCart({
                                ...kit,
                                quantity: 1,
                                price: kit.price * dolarOficial,
                                name: kit.name,
                              })
                            }
                            className="bg-blue-600 text-white text-xs px-3 py-1 rounded hover:bg-blue-700 transition"
                          >
                            Añadir
                          </button>
                        </div>

                        <div className="flex items-center justify-between">
                          <p>
                            <span className="font-semibold">
                              + instalación:
                            </span>{" "}
                            {dolarOficial
                              ? (
                                  kit.price *
                                  dolarOficial *
                                  1.6
                                ).toLocaleString()
                              : "Cargando..."}
                          </p>
                          <button
                            onClick={() =>
                              addToCart({
                                ...kit,
                                quantity: 1,
                                price: kit.price * dolarOficial * 1.6,
                                name: kit.name,
                              })
                            }
                            className="bg-blue-600 text-white text-xs px-3 py-1 rounded hover:bg-blue-700 transition"
                          >
                            Añadir
                          </button>
                        </div>
                      </div>

                      {/* Especificaciones */}
                      <div className="mt-4 text-xs text-left text-gray-500 space-y-1">
                        <p>
                          <strong>DVR:</strong> {kit.specs.dvr}
                        </p>
                        <p>
                          <strong>Cámaras:</strong> {kit.specs.cameras}
                        </p>
                        <p>
                          <strong>Balunes:</strong> {kit.specs.baluns}
                        </p>
                        <p>
                          <strong>Plugs:</strong> {kit.specs.plugs}
                        </p>
                        <p>
                          <strong>Splitter:</strong> {kit.specs.splitter}
                        </p>
                        <p>
                          <strong>Cable:</strong> {kit.specs.cable}
                        </p>
                        <p>
                          <strong>Fuente:</strong> {kit.specs.power}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Sección de Cámaras IMOU */}
        {(activeFilter === "all" || activeFilter === "imouCams") && (
          <div className="mt-20 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-10">
              <span className="border-b-4 border-green-500 pb-2">
                Cámaras IMOU Inteligentes
              </span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4">
              {imouCams.imous.map((cam) => (
                <div
                  key={cam.id}
                  className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition"
                >
                  {/* Imagen */}
                  <div className="h-56 bg-gray-50 flex items-center justify-center">
                    <img
                      src={cam.image}
                      alt={cam.name}
                      className="h-full object-contain"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                          "https://via.placeholder.com/300x200?text=Cámara+IMOU";
                      }}
                    />
                  </div>

                  {/* Contenido */}
                  <div className="p-6 flex flex-col h-full">
                    {/* Header */}
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-bold text-gray-900">
                        {cam.name}
                      </h3>
                      <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                        {cam.category}
                      </span>
                    </div>

                    {/* Descripción */}
                    <p className="mt-3 text-gray-600 text-sm">
                      {cam.description}
                    </p>

                    {/* Precios */}
                    <div className="mt-5 space-y-3 text-sm text-gray-700">
                      <div className="flex items-center justify-between">
                        <p>
                          <span className="font-semibold">Unidad:</span> $
                          {dolarOficial
                            ? (cam.price * dolarOficial).toLocaleString()
                            : "Cargando..."}
                        </p>
                        <button
                          onClick={() =>
                            addToCart({
                              ...cam,
                              quantity: 1,
                              price: cam.price * dolarOficial,

                              name: cam.name,
                            })
                          }
                          className="flex items-center gap-1 bg-green-600 text-white text-xs px-3 py-1.5 rounded hover:bg-green-700 transition"
                        >
                          <ShoppingCart size={14} />
                          Añadir
                        </button>
                      </div>
                    </div>

                    {/* Specs */}
                    <div className="mt-4 text-xs text-left text-gray-500 space-y-1">
                      {Object.entries(cam.specs).map(([key, value]) => (
                        <p key={key}>
                          <strong>
                            {key.charAt(0).toUpperCase() + key.slice(1)}:
                          </strong>{" "}
                          {value}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Sección de características (siempre visible) */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition">
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Velocidad de impresión
            </h3>
            <p className="text-gray-600">
              Plotters de alta velocidad que reducen tus tiempos de producción
              hasta en un 60% comparado con métodos tradicionales.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition">
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Papel especializado</h3>
            <p className="text-gray-600">
              Nuestros rollos de papel para tizado ofrecen la resistencia y
              flexibilidad perfecta para el trabajo con patrones.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition">
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Soporte técnico</h3>
            <p className="text-gray-600">
              Asesoramiento permanente por expertos en patronaje digital.
              Instalación, capacitación y mantenimiento incluido.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
