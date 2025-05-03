import { Link } from "react-router-dom";
import { ShoppingBag, ArrowLeft } from "lucide-react";

const CartPage = ({ cart, removeFromCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="py-8">
      <div className="flex items-center mb-8">
        <Link to="/" className="mr-4 text-blue-600 hover:text-blue-800">
          <ArrowLeft className="h-6 w-6" />
        </Link>
        <h1 className="text-3xl font-bold">Tu Carrito de Compras</h1>
      </div>

      {cart.length === 0 ? (
        <div className="text-center py-12">
          <ShoppingBag className="h-16 w-16 mx-auto text-gray-400 mb-4" />
          <p className="text-xl text-gray-600 mb-6">Tu carrito está vacío</p>
          <Link
            to="/"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition inline-block"
          >
            Ver productos
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {cart.map((item) => (
              <div
                key={item.id}
                className="border-b py-6 flex flex-col sm:flex-row"
              >
                <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-32 w-32 object-cover rounded-lg"
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between">
                    <h3 className="text-xl font-medium">{item.name}</h3>
                    <button
                      onClick={() => removeFromCart(item.cartItemId)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Eliminar
                    </button>
                  </div>
                  <p className="text-gray-600 mt-1">{item.description}</p>
                  <p className="text-lg font-bold mt-2">
                    ${item.price.toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4">Resumen de compra</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal:</span>
                <span>${total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Envío:</span>
                <span>Gratis</span>
              </div>
              <div className="border-t my-4"></div>
              <div className="flex justify-between text-lg font-bold mb-6">
                <span>Total:</span>
                <span>${total.toLocaleString()}</span>
              </div>
              <a
                href={`https://wa.me/5491162020911?text=${encodeURIComponent(
                  `¡Hola! Quiero realizar esta compra:\n\n` +
                    cart
                      .map(
                        (item, index) =>
                          `${index + 1}. ${
                            item.name
                          } - $${item.price.toLocaleString()}`
                      )
                      .join("\n") +
                    `\n\nTotal: $${total.toLocaleString()}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition font-medium inline-block text-center"
              >
                Proceder al pago
              </a>

              <Link
                to="/"
                className="block mt-4 text-center text-blue-600 hover:text-blue-800"
              >
                Continuar comprando
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
