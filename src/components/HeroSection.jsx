import logoLucfra from "../assets/lucfra.jpg";
import plotter2 from "../assets/plotter2.jpg";

const HeroSection = ({ id }) => {
  // Número de teléfono y mensaje predeterminado
  const phoneNumber = "5491162020911"; // Reemplaza con tu número de WhatsApp (sin el signo +)
  const defaultMessage = "Hola, me gustaría obtener más información."; // Mensaje predeterminado

  // URL de WhatsApp
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    defaultMessage
  )}`;

  return (
    <div id={id} className="flex flex-col items-center mt-6 mb-0 lg:mt-10">
      <div className="bg-gradient-to-b from-blue-50 to-white py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Soluciones profesionales para{" "}
                <span className="text-blue-600">patronaje digital</span>
              </h1>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Equipos y materiales de alta precisión para diseñadores y
                fabricantes de moda. Maximiza la eficiencia en tu producción con
                nuestros plotters industriales y papel técnico especializado
                para tizado.
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
              {/* <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-md border border-gray-200 hidden md:block">
                <div className="flex items-center">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">
                      Precisión garantizada
                    </p>
                    <p className="text-xs text-gray-500">±0.1mm de exactitud</p>
                  </div>
                </div>
              </div> */}
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

          {/* Beneficios técnicos */}
        </div>
      </div>
      <div className="flex mt-10 justify-center">
        {/* <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        {/* <img
          className="w-full max-w-md md:max-w-lg mt-8 md:mt-0"
          src={portadaSoledad1}
          alt="Logo"
        /> */}
        {/* <img
          className="w-full max-w-md md:max-w-lg mt-8 md:mt-0"
          src={portadaSoledad2}
          alt="Logo"
        /> */}
      </div>
    </div>
  );
};

export default HeroSection;
