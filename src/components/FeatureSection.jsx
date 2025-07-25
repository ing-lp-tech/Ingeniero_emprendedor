/* import { products } from "../constants";
import { plotters } from "../constants";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const ProductSection = ({ id, cart, addToCart }) => {
  const allPlotters = [...plotters.inyeccion, ...plotters.corte];

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

       //
        <Link
          to="/cart"
          className="fixed top-24 right-4 z-40 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition flex items-center"
        >
          <ShoppingCart className="h-6 w-6" />
          <span className="ml-1 bg-white text-blue-600 rounded-full h-6 w-6 flex items-center justify-center text-sm font-bold">
            {cart.length}
          </span>
        </Link>

        //
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

                    <p className="mt-2 text-gray-600">{plotter.descripcion}</p>

                    <div className="mt-4 text-sm text-gray-700 space-y-2">
                      <div className="flex items-center justify-between">
                        <p>
                          <span className="font-semibold">Pre-venta:</span> $
                          {plotter.precio_pre_venta.toLocaleString()}
                        </p>
                        <button
                          onClick={() =>
                            addToCart({
                              ...plotter,
                              quantity: 1,
                              price: plotter.precio_pre_venta,
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
                          <span className="font-semibold">De llegada:</span> $
                          {plotter.precio_de_llegada.toLocaleString()}
                        </p>
                        <button
                          onClick={() =>
                            addToCart({
                              ...plotter,
                              quantity: 1,
                              price: plotter.precio_de_llegada,
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

        //
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

                    <p className="mt-2 text-gray-600">{product.description}</p>

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

        //
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
 */

import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaPhone,
  FaEnvelope,
  FaTools,
  FaLaptopCode,
  FaMicrochip,
  FaChartLine,
} from "react-icons/fa";
import luis from "../assets/luis.jpg";

const ProductSection = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-16">
          <div className="md:w-1/2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Luis Patty Mamani <br />
              <span className="text-blue-600">Ingeniero Electrónico</span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Especialista en desarrollo web, automatización industrial y
              asesoramiento tecnológico. Combinando conocimientos de ingeniería
              electrónica con habilidades avanzadas en programación para ofrecer
              soluciones integrales a tus necesidades tecnológicas.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="tel:+5491162020911"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 flex items-center gap-2"
              >
                <FaPhone /> 11-6202-0911
              </a>
              <a
                href="mailto:ing.lp.tech@gmail.com"
                className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-3 px-6 rounded-lg transition duration-300 flex items-center gap-2"
              >
                <FaEnvelope /> Contactar por email
              </a>
            </div>

            <div className="flex items-center space-x-6">
              <a
                href="https://www.linkedin.com/in/luis-patty-mamani/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-2xl text-blue-600 hover:text-blue-800 transition" />
              </a>
              <a
                href="https://github.com/ing-lp-tech"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-2xl text-gray-800 hover:text-black transition" />
              </a>
            </div>
          </div>

          {/* Profile Image Placeholder */}
          <div className="md:w-1/2 relative">
            <div className="w-full h-80 bg-gray-200 rounded-xl shadow-2xl border border-gray-300 flex items-center justify-center">
              <img src={luis} alt="Perfil" />
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Servicios Profesionales
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tech Consulting */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition">
              <div className="text-blue-600 mb-4">
                <FaChartLine className="text-4xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Asesoramiento Tecnológico en Importaciones
              </h3>
              <p className="text-gray-600 mb-4">
                Soluciones personalizadas para optimizar procesos,
                implementación de nuevas tecnologías y asesoramiento en
                importación de equipos tecnológicos.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Importación de maquinaria desde China
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Optimización de procesos
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Análisis de costos y presupuestos
                </li>
              </ul>
            </div>
            {/* Web Development */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition">
              <div className="text-blue-600 mb-4">
                <FaLaptopCode className="text-4xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Desarrollo Web</h3>
              <p className="text-gray-600 mb-4">
                Creación de sitios web profesionales, sistemas de gestión de
                datos y aplicaciones web personalizadas con tecnologías modernas
                como React, Material UI y más.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Páginas web responsivas
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Sistemas de gestión de datos
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Planillas automatizadas
                </li>
              </ul>
            </div>

            {/* Industrial Automation */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition">
              <div className="text-blue-600 mb-4">
                <FaMicrochip className="text-4xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Automatización Industrial
              </h3>
              <p className="text-gray-600 mb-4">
                Diseño e implementación de sistemas automatizados, desarrollo de
                prototipos y soluciones electrónicas personalizadas.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Diseño de tableros eléctricos
                </li>
                {/*  <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Programación de PLCs
                </li> */}
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Desarrollo de prototipos electrónicos
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Formación Académica
          </h2>

          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
            <div className="p-6">
              <div className="mb-6 pb-6 border-b border-gray-200">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  Ingeniería Electrónica
                </h3>
                <p className="text-gray-700 font-medium">
                  Universidad Nacional de La Matanza (UNLAM)
                </p>
                <p className="text-gray-500">2014 - 2022 | Graduado</p>
              </div>

              <div className="mb-6 pb-6 border-b border-gray-200">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  Técnico Superior en Electrónica
                </h3>
                <p className="text-gray-700 font-medium">
                  Universidad Nacional de La Matanza (UNLAM)
                </p>
                <p className="text-gray-500">2014 - 2019 | Graduado</p>
              </div>

              <div className="mb-6 pb-6 border-b border-gray-200">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  Desarrollo Web Full Stack
                </h3>
                <p className="text-gray-700 font-medium">
                  Universidad Tecnológica Nacional (UTN)
                </p>
                <p className="text-gray-500">2023 - 2024 | Graduado</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  Curso de Automatización con PLC
                </h3>
                <p className="text-gray-700 font-medium">
                  Universidad Nacional de La Matanza (UNLAM)
                </p>
                <p className="text-gray-500">2019 | Graduado</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-blue-600 rounded-xl p-8 md:p-12 text-center text-white mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            ¿Necesitas una solución tecnológica a medida?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Desde desarrollo web hasta asesoramiento en importación de
            tecnología, puedo ayudarte a encontrar la mejor solución para tu
            negocio.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+5491162020911"
              className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-4 px-8 rounded-lg transition duration-300 flex items-center justify-center gap-2"
            >
              <FaPhone /> Llamar ahora
            </a>
            <a
              href="mailto:ing.lp.tech@gmail.com"
              className="border border-white text-white hover:bg-blue-700 font-bold py-4 px-8 rounded-lg transition duration-300 flex items-center justify-center gap-2"
            >
              <FaEnvelope /> Enviar email
            </a>
          </div>
          <p className="mt-6 text-blue-100">
            También disponible para consultas por WhatsApp al 11-6202-0911
          </p>
        </div>

        {/* Expertise Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Habilidades y Experiencia
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Technical Skills */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold mb-6 text-blue-600">
                Habilidades Técnicas
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-2">Desarrollo Web</h4>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    HTML, CSS, JavaScript, React
                  </p>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Programación</h4>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    C/C++, Java, Python
                  </p>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Diseño Electrónico</h4>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    Proteus, AutoCAD, Inventor
                  </p>
                </div>

                <div>
                  <h4 className="font-medium mb-2">
                    Automatización Industrial
                  </h4>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    PLC, Electroneumática
                  </p>
                </div>
              </div>
            </div>

            {/* Professional Experience */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold mb-6 text-blue-600">
                Experiencia Relevante
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-bold">Coordinador Sector Ingeniería</h4>
                  <p className="text-gray-700">Sbe Tecnologia Medica</p>
                  <ul className="mt-2 text-gray-600 list-disc list-inside space-y-1">
                    <li>Desarrollo de placas electrónicas y prototipos</li>
                    <li>Mantenimiento de equipos médicos complejos</li>
                    <li>Gestión de inventario y coordinación de equipos</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold">Coordinador Sector Ingeniería</h4>
                  <p className="text-gray-700">Cardiopack</p>
                  <ul className="mt-2 text-gray-600 list-disc list-inside space-y-1">
                    <li>Desarrollo de placas electrónicas y prototipos</li>
                    <li>Mantenimiento de equipos médicos complejos</li>
                    <li>Gestión de inventario y coordinación de equipos</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold">Desarrollador Frontend</h4>
                  <p className="text-gray-700">GM2 </p>
                  <ul className="mt-2 text-gray-600 list-disc list-inside space-y-1">
                    <li>Desarrollo con React, Material UI, Chakra UI</li>
                    <li>Optimización de experiencia de usuario</li>
                    <li>Gestión de proyectos con Jira y Bitbucket</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold">
                    Ingeniero de Sistemas de Monitoreo
                  </h4>
                  <p className="text-gray-700">
                    LP-TECH (Freelance) | 2021 - Presente
                  </p>
                  <ul className="mt-2 text-gray-600 list-disc list-inside space-y-1">
                    <li>Diseño e implementación de sistemas de monitoreo</li>
                    <li>Análisis de costos y presupuestos</li>
                    <li>Resolución de problemas técnicos complejos</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            ¿Listo para comenzar tu proyecto?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Contáctame para discutir cómo puedo ayudarte con soluciones web,
            asesoramiento tecnológico o desarrollo de sistemas electrónicos
            personalizados.
          </p>
          <a
            href="tel:+5491162020911"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition duration-300 text-lg"
          >
            <FaPhone className="inline mr-2" /> 11-6202-0911
          </a>
          <p className="mt-4 text-gray-500">
            También disponible para consultas sobre importación de tecnología
            desde China
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
