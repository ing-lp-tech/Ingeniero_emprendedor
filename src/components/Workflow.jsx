import { CheckCircle2 } from "lucide-react";
import comotrabajamos from "../assets/comotrabajamos.png";
import { checklistItems } from "../constants";

const Workflow = ({ id }) => {
  return (
    <section id="#como-trabajamos" className="py-12 px-4 md:px-8 bg-gray-50">
      <div id={id} className="mt-20 py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
              Nuestro <span className="text-[rgb(37,99,235)]">Proceso</span> de
              Trabajo
            </h2>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Desde tu consulta hasta la entrega de tus insumos para confección,
              te garantizamos:
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <img
                src={comotrabajamos}
                alt="Proceso de venta de plotters y papel para confección"
                className="rounded-xl shadow-2xl border-4 border-white"
              />
            </div>

            <div className="lg:w-1/2 space-y-10">
              {checklistItems.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 bg-[rgb(37,99,235)] p-2 rounded-lg text-white mr-6">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}

              <div className="mt-10 bg-white p-6 rounded-xl shadow-md border border-gray-200">
                <h3 className="text-xl font-bold text-[rgb(37,99,235)] mb-3">
                  ¿Por qué elegirnos?
                </h3>
                <p className="text-gray-700">
                  Somos especialistas en insumos para patronaje digital.
                  Ofrecemos plotters de alta precisión y papel técnico
                  específico para tizado en confección de ropa, con
                  asesoramiento personalizado para cada taller.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
