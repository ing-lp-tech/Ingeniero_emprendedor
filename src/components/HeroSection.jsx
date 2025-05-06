import { div } from "framer-motion/client";
import logoLucfra from "../assets/lucfra.jpg";
import plotter2 from "../assets/plotter2.jpg";
import React, { useState } from "react";

const HeroSection = ({ id }) => {
  const phoneNumber = "5491162020911";
  const defaultMessage = "Hola, me gustaría obtener más información.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    defaultMessage
  )}`;
  const API_URL = "http://localhost:5000/api/products";

  const [form, setForm] = useState({ name: "", description: "", price: "" });
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState(""); // estado para mostrar mensaje de éxito/error

  const createProduct = async (formData) => {
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error?.message || "Error al crear producto");
      }

      return data;
    } catch (err) {
      throw err; // lo manejamos en handleSubmit
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!image) {
      setMessage("Por favor, seleccioná una imagen.");
      return;
    }

    const data = new FormData();
    data.append("name", form.name);
    data.append("description", form.description);
    data.append("price", form.price);
    data.append("image", image);

    try {
      const response = await createProduct(data);
      console.log("Producto creado:", response);
      setMessage("✅ Producto creado exitosamente.");
      setForm({ name: "", description: "", price: "" });
      setImage(null);
    } catch (error) {
      console.error("Error al crear producto:", error.message);
      setMessage("❌ Error: " + error.message);
    }
  };

  return (
    <>
      {/* <div className="py-6">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-2 max-w-md mx-auto border p-4 rounded-lg shadow"
        >
          <h2 className="text-xl font-semibold mb-2">Subir nuevo producto</h2>
          <input
            type="text"
            placeholder="Nombre"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            className="border p-2 rounded"
          />
          <textarea
            placeholder="Descripción"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            required
            className="border p-2 rounded"
          />
          <input
            type="number"
            placeholder="Precio"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            required
            className="border p-2 rounded"
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="border p-2 rounded"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Subir producto
          </button>
          {message && (
            <p
              className={`mt-2 text-sm ${
                message.startsWith("✅") ? "text-green-600" : "text-red-600"
              }`}
            >
              {message}
            </p>
          )}
        </form>
      </div> */}

      <div id={id} className="flex flex-col items-center mt-6 mb-0 lg:mt-10">
        <div className="bg-gradient-to-b from-blue-50 to-white py-2 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="md:w-1/2">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Soluciones profesionales para{" "}
                  <span className="text-blue-600">patronaje digital</span>
                </h1>

                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Equipos y materiales de alta precisión para diseñadores y
                  fabricantes de moda. Maximiza la eficiencia en tu producción
                  con nuestros plotters industriales y papel técnico
                  especializado para tizado.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105">
                    Ver Catálogo Completo
                  </button>
                  <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-3 px-6 rounded-lg transition duration-300">
                    <a href={whatsappUrl}>Solicitar Asesoría Técnica</a>
                  </button>
                </div>

                <div className="mt-8 flex items-center space-x-4">
                  <div className="flex -space-x-2">
                    {/* Iconos de clientes o marcas */}
                  </div>
                  <div className="text-sm text-gray-500">
                    <span className="font-semibold text-gray-700">
                      +100 talleres
                    </span>{" "}
                    confían en nuestros productos
                  </div>
                </div>
              </div>

              {/* Imagen destacada */}
              <div className="md:w-1/2 relative">
                <img
                  className="w-full rounded-xl shadow-2xl border border-gray-200"
                  src={plotter2}
                  alt="Plotter industrial en funcionamiento"
                />
              </div>
            </div>

            {/* Logos de marcas o certificaciones */}
            <div className="mt-20 ">
              <h3 className="text-center text-gray-500 text-sm font-medium mb-6">
                TRABAJAMOS CON LAS MEJORES MARCAS
              </h3>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                <img
                  className="h-8 opacity-70 hover:opacity-100 transition"
                  src={logoLucfra}
                  alt="Marca 1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
