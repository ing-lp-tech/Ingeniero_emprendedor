import React from "react";
import socios from "../assets/socios.jpg";

const AboutUsSection = () => {
  return (
    <div
      id="sobre-nosotros"
      className="relative bg-black text-white"
      style={{
        backgroundImage: `url(${socios})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Capa oscura sutil para mejorar contraste */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Contenido superpuesto */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-shadow">
        <div className="space-y-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center">
            SOBRE NOSOTROS
          </h2>

          {/* Historia */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Una sociedad de amigos</h3>
            <p className="text-lg">
              Somos un grupo de amigos que decidió convertir su experiencia y
              valores en un proyecto real. Unidos por la pasión por la
              innovación y la confección, decidimos fundar esta empresa para
              apoyar a la comunidad textil, especialmente a quienes están
              emprendiendo o produciendo a escala.
            </p>
          </div>

          {/* Misión */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">
              Comprometidos con la comunidad
            </h3>
            <p className="text-lg">
              Nuestro objetivo es claro: ofrecer soluciones que simplifiquen el
              día a día del fabricante. Brindamos insumos de calidad, como papel
              para plotter y sublimación, a precios justos, porque creemos que
              el acceso a herramientas profesionales no debe ser un privilegio.
            </p>
          </div>

          {/* Valores */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">
              Compartimos los mismos valores
            </h3>
            <p className="text-lg">
              Creemos en la transparencia, el trabajo bien hecho y el trato
              humano. Cada decisión que tomamos está guiada por estos valores.
              No somos una empresa más: somos un equipo que escucha, que aprende
              y que crece con cada cliente.
            </p>
          </div>

          {/* Innovación */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">
              Apostamos a la innovación
            </h3>
            <p className="text-lg">
              Estamos en constante evolución, buscando nuevas formas de aportar
              al sector textil con tecnología accesible y soporte real. Este
              proyecto nació para hacer una diferencia, y eso es lo que hacemos
              cada día.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
