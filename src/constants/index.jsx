import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

/* import plotter1 from ".././assets/plotter2.jpg";
import plotter2 from ".././assets/plotter2.jpg";
import papelMadera from ".././assets/papelMadera.jpg";
import papelBlanco from ".././assets/papelBlanco.jpg"; */

import papelMadera1 from ".././assets/papelMadera2.jpg";
import papelBlanco2 from ".././assets/papelBlanco2.jpg";

export const navItems = [
  { label: "Inicio", href: "#inicio" }, // Agregar #
  { label: "Productos", href: "#productos" }, // Agregar #
  { label: "Como trabajamos", href: "#como-trabajamos" }, // Agregar #
  { label: "Preguntas frecuentes", href: "#preguntasfrecuentes" }, // Ya está correcto
  { label: "Sobre mi", href: "#sobre-mi" }, // Agregar #
  { label: "Contacto", href: "#contacto" }, // Ya está correcto
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Cobro de seguros",
    description:
      "Cuando las aseguradoras no cumplen con lo pactado, nosotros nos encargamos de gestionar y reclamar el cobro de tu seguro, ya sea por daños materiales, accidentes o cualquier otra cobertura. Te acompañamos en el proceso para que obtengas lo que te corresponde de manera rápida y efectiva.",
  },
  {
    icon: <Fingerprint />,
    text: "Accidente de automóvil",
    description:
      "Si sufriste un accidente de tránsito, te asesoramos para que puedas reclamar una indemnización justa por daños físicos, materiales o psicológicos. Nos ocupamos de todo el proceso legal para que puedas enfocarte en tu recuperación.",
  },
  {
    icon: <ShieldHalf />,
    text: "Jubilaciones",
    description:
      "Te ayudamos a gestionar y reclamar tu jubilación, asegurándonos de que recibas todos los beneficios a los que tienes derecho. Si hay demoras o inconvenientes, nosotros nos encargamos de resolverlos de manera eficiente.",
  },
  {
    icon: <BatteryCharging />,
    text: "Accidentes de trabajo",
    description:
      "Si sufriste un accidente laboral, te asesoramos para que puedas reclamar una indemnización por lesiones o incapacidades. Nos ocupamos de todo el proceso legal para garantizar que tus derechos como trabajador sean respetados.",
  },
  {
    icon: <PlugZap />,
    text: "Divorcios",
    description:
      "Cuando la relación amorosa no funcionó, nosotros nos encargamos de resolver el vínculo legal establecido de la forma más sencilla posible, siempre con empatía y contención desde el lado jurídico, entendiendo que no son momentos sencillos para la persona que lo está transitando.",
  },
  {
    icon: <GlobeLock />,
    text: "Cuota alimentaria",
    description:
      "Te ayudamos a gestionar y reclamar la cuota alimentaria para tus hijos, asegurándonos de que se respeten los montos y plazos establecidos. Nos ocupamos de todo el proceso legal para garantizar el bienestar de los menores.",
  },
  {
    icon: <GlobeLock />,
    text: "Violencia familiar",
    description:
      "Si estás atravesando una situación de violencia familiar, te brindamos asesoramiento legal y acompañamiento para que puedas protegerte y proteger a tus seres queridos. Nos ocupamos de obtener las medidas de protección necesarias.",
  },
  {
    icon: <GlobeLock />,
    text: "Régimen de comunicación",
    description:
      "Te ayudamos a establecer o modificar el régimen de comunicación con tus hijos, asegurándonos de que se respeten tus derechos y los de los menores. Buscamos soluciones que prioricen el bienestar familiar.",
  },
  {
    icon: <GlobeLock />,
    text: "Compra de inmuebles",
    description:
      "Te asesoramos en todo el proceso de compra de un inmueble, desde la revisión de contratos hasta la escrituración, para garantizar que la transacción sea segura y transparente. Nos ocupamos de que tus intereses estén protegidos en cada etapa.",
  },
];

/* export const checklistItems = [
  {
    title: "1 - PRIMER CONTACTO",
    description:
      "Contactáme por mensaje privado de Instagram o Whatsapp. Dialogamos un poco y te pido información para comprender tu situación. Así, puedo comentarte si tu caso necesita una consulta.",
  },
  {
    title: "2 - CONSULTAS Y ENTREVISTAS",
    description:
      "Te pido tus horarios para ver en qué momento podemos coincidir y realizar una entrevista virtual para conocer tu caso. Trabajo con entrevistas virtuales para ser más eficiente y tener una cantidad de horarios disponibles más amplia. Excepto que sea un caso de despido laboral o ART, la consulta es arancelada.",
  },
  {
    title: "3 - PRESUPUESTOS",
    description:
      "Por último, te envío un presupuesto por escrito detallando honorarios, gastos y posibilidades de pagos. Si nos das el OK, comenzamos con tu carpeta. Te acompañamos durante todo el proceso y te avisamos de cada novedad con términos claros y simples.",
  },
]; */

export const checklistItems = [
  {
    title: "1. Asesoramiento Técnico",
    description:
      "Te ayudamos a seleccionar el plotter y papel ideal según tu volumen de producción y tipo de prendas que confeccionas.",
  },
  {
    title: "2. Cotización Personalizada",
    description:
      "Recibirás una propuesta detallada con los mejores insumos para tu taller y opciones de pago flexibles.",
  },
  {
    title: "3. Entrega Garantizada",
    description:
      "Coordinamos envíos rápidos y seguros de tus plotters y rollos de papel para que no detengas tu producción.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];

export const products = [
  {
    id: 1,
    name: "MARRÓN 91,5 X 75MTS 60GRS",
    category: "Papel marrón",
    description: "Papel marrón para tizado, ideal para patrones de confección.",
    price: 12002,
    image: papelMadera1,
    combos: {
      combo5u: 12002,
      combo15u: 11506,
      combo30u: 11016,
    },
  },
  {
    id: 2,
    name: "MARRÓN 1,07 X 75MTS 60GRS",
    category: "Papel marrón",
    description: "Papel marrón de mayor ancho para trazos amplios.",
    price: 13944,
    image: papelMadera1,
    combos: {
      combo5u: 13944,
      combo15u: 13367,
      combo30u: 12798,
    },
  },
  {
    id: 3,
    name: "MARRÓN 1,6 X 200MTS 60GRS",
    category: "Papel marrón",
    description: "Rollo largo y ancho para producción industrial.",
    price: 42890,
    image: papelMadera1,
    combos: {
      combo5u: 42890,
      combo15u: 41116,
      combo30u: 39366,
    },
  },
  {
    id: 4,
    name: "MARRÓN 1,8 X 200MTS 60GRS",
    category: "Papel marrón",
    description: "Ideal para producción a gran escala.",
    price: 48008,
    image: papelMadera1,
    combos: {
      combo5u: 48008,
      combo15u: 46022,
      combo30u: 44064,
    },
  },
  {
    id: 5,
    name: "MARRÓN 1,85 X 200MTS 60GRS",
    category: "Papel marrón",
    description: "Máximo ancho para cortes amplios y largos.",
    price: 49244,
    image: papelMadera1,
    combos: {
      combo5u: 49244,
      combo15u: 47207,
      combo30u: 45198,
    },
  },
  {
    id: 6,
    name: "BLANCO 91,5 X 75MTS 60GRS",
    category: "Papel blanco",
    description: "Papel blanco estándar para tizado técnico.",
    price: 18709,
    image: papelBlanco2,
    combos: {
      combo5u: 18709,
      combo15u: 17935,
      combo30u: 17172,
    },
  },
  {
    id: 7,
    name: "BLANCO 1,07 X 75MTS 60GRS",
    category: "Papel blanco",
    description: "Mayor ancho para trazos cómodos y precisos.",
    price: 21357,
    image: papelBlanco2,
    combos: {
      combo5u: 21357,
      combo15u: 20473,
      combo30u: 19602,
    },
  },
  {
    id: 8,
    name: "BLANCO 1,6 X 200MTS 60GRS",
    category: "Papel blanco",
    description: "Rollo blanco profesional para producción continua.",
    price: 72718,
    image: papelBlanco2,
    combos: {
      combo5u: 72718,
      combo15u: 69710,
      combo30u: 66744,
    },
  },
  {
    id: 9,
    name: "BLANCO 1,8 X 200MTS 60GRS",
    category: "Papel blanco",
    description: "Ancho extra para grandes diseños.",
    price: 81543,
    image: papelBlanco2,
    combos: {
      combo5u: 81543,
      combo15u: 78170,
      combo30u: 74844,
    },
  },
  {
    id: 10,
    name: "BLANCO 1,85 X 200MTS 60GRS",
    category: "Papel blanco",
    description: "La mayor cobertura para impresiones industriales.",
    price: 83661,
    image: papelBlanco2,
    combos: {
      combo5u: 83661,
      combo15u: 80201,
      combo30u: 76788,
    },
  },
];

// index.jsx
export const faqData = [
  /* {
    category: "Sublimación",
    items: [
      {
        question: "¿Qué impresoras se pueden convertir a sublimación?",
        answer:
          "Principalmente impresoras Epson con cabezal MicroPiezo. Los modelos más comunes son Epson EcoTank (como L3250, L3210, L4260, etc.).",
      },
      {
        question: "¿Qué tipo de papel debo usar para sublimar?",
        answer:
          "Debes usar papel especial para sublimación, diseñado para retener la tinta y transferirla al calor sobre superficies de poliéster o recubiertas.",
      },
      {
        question: "¿Puedo sublimar sobre algodón?",
        answer:
          "No directamente. El algodón no retiene la tinta de sublimación. Puedes usar vinilo sublimable o aplicar una base de poliéster sobre la prenda.",
      },
    ],
  }, */
  {
    category: "Plotter de Corte",
    items: [
      {
        question: "¿Qué materiales puedo tizar y cortar con el plotter?",
        answer:
          "Puedes tizar materiales papeles de hastas 130grs y cortar vinilo textil, vinilo adhesivo, papel adhesivo, stencil y materiales delgados como foil o transfer imprimible.",
      },
      {
        question: "¿Necesito una PC para usar el plotter?",
        answer:
          "Sí, necesitas un software como Audaces, Optitex, Silhouette Studio o Cricut Design Space instalado en tu PC o laptop para enviar los cortes al plotter.",
      },
      /* {
        question: "¿Se puede usar con celular o tablet?",
        answer:
          "Algunos modelos permiten conexión Bluetooth con apps móviles, pero se recomienda usar PC para un control más preciso.",
      }, */
    ],
  },
];
