import { useEffect } from "react";

const BotpressChat = () => {
  useEffect(() => {
    // Cargar los scripts dinámicamente
    const script1 = document.createElement("script");
    script1.src = "https://cdn.botpress.cloud/webchat/v3.2/inject.js";

    script1.defer = true;

    const script2 = document.createElement("script");
    script2.src =
      "https://files.bpcontent.cloud/2025/08/07/22/20250807221612-PSVZ5AJM.js";
    script2.defer = true;

    document.body.appendChild(script1);
    document.body.appendChild(script2);

    return () => {
      // Limpiar los scripts al desmontar el componente
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return null; // Este componente no renderiza nada en el DOM
};

export default BotpressChat;
