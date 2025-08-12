import { useEffect } from "react";

const RespondioChat = () => {
  useEffect(() => {
    // Verifica si el script ya existe para evitar duplicados
    if (!document.getElementById("respondio__widget")) {
      const script = document.createElement("script");
      script.id = "respondio__widget";
      script.src =
        "https://cdn.respond.io/webchat/widget/widget.js?cId=111b2907018f0ef23626a31b21f5492";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return null; // No renderiza nada en el DOM
};

export default RespondioChat;
