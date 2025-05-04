import { MessageCircle } from "lucide-react"; // Ícono de WhatsApp (Lucide no tiene ícono de WhatsApp, usamos MessageCircle como placeholder)
import whatsapp from "../assets/whatsapp.svg";

const WhatsAppButton = () => {
  // Número de teléfono y mensaje predeterminado
  const phoneNumber = "5491162020911"; // Reemplaza con tu número de WhatsApp (sin el signo +)
  const defaultMessage = "Hola, me gustaría obtener más información."; // Mensaje predeterminado

  // URL de WhatsApp
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    defaultMessage
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
      aria-label="Chat de WhatsApp"
    >
      {/* <MessageCircle className="w-8 h-8" /> */}
      <img
        src={whatsapp} // Usa el SVG como una ruta
        alt="WhatsApp"
        className="w-8 h-8"
      />
    </a>
  );
};

export default WhatsAppButton;
