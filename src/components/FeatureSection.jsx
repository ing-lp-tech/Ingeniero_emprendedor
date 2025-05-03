import { products } from "../constants";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const ProductSection = ({ id, cart, addToCart }) => {
  return (
    <section id="productos" className="py-12 px-4 md:px-8 bg-gray-50">
      <div id={id} className="relative mt-20 min-h-[800px]">
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
      </div>
    </section>
  );
};

export default ProductSection;
