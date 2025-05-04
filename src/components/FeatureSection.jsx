import { products } from "../constants";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const ProductSection = ({ id, cart, addToCart }) => {
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

        {/* Botón del carrito */}
        <Link
          to="/cart"
          className="fixed top-24 right-4 z-40 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition flex items-center"
        >
          <ShoppingCart className="h-6 w-6" />
          <span className="ml-1 bg-white text-blue-600 rounded-full h-6 w-6 flex items-center justify-center text-sm font-bold">
            {cart.length}
          </span>
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 lg:mt-20 px-4">
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

                  <p className="mt-2 text-gray-600">{product.description}</p>

                  {/* Precios y botones por combo */}
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
                        Combo 15u: ${product.combos.combo15u.toLocaleString()}
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
                        Combo 30u: ${product.combos.combo30u.toLocaleString()}
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
