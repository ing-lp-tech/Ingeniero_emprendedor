import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import papelMadera1 from ".././assets/papelMadera2.jpg";
import papelBlanco2 from ".././assets/papelBlanco2.jpg";
import injectplotter from ".././assets/injectplotter.jpg";
import plotterdecorte from ".././assets/plotterdecorte.jpg";

export const navItems = [
  { label: "Inicio", href: "#inicio" }, // Agregar #
  { label: "Productos", href: "#productos" }, // Agregar #
  { label: "Como trabajamos", href: "#como-trabajamos" }, // Agregar #
  { label: "Preguntas frecuentes", href: "#preguntasfrecuentes" }, // Ya está correcto
  { label: "Sobre mi", href: "#sobre-mi" }, // Agregar #
  { label: "Contacto", href: "#contacto" }, // Ya está correcto
  { label: "Comunidad", href: "/comunidad", external: false },
  { label: "Importacion", href: "/importacion", external: false },
];

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

export const products = [
  {
    id: 1,
    name: "MARRÓN 91,5 X 75MTS 60GRS",
    category: "Papel marrón",
    description: "Papel marrón para tizado, ideal para patrones de confección.",
    price: 12000,
    image: papelMadera1,
    combos: {
      combo5u: 12000,
      combo15u: 11500,
      combo30u: 11000,
    },
  },
  {
    id: 2,
    name: "MARRÓN 1,07 X 75MTS 60GRS",
    category: "Papel marrón",
    description: "Papel marrón de mayor ancho para trazos amplios.",
    price: 13950,
    image: papelMadera1,
    combos: {
      combo5u: 13950,
      combo15u: 13400,
      combo30u: 12800,
    },
  },
  {
    id: 3,
    name: "MARRÓN 1,6 X 200MTS 60GRS",
    category: "Papel marrón",
    description: "Rollo largo y ancho para producción industrial.",
    price: 42900,
    image: papelMadera1,
    combos: {
      combo5u: 42900,
      combo15u: 41100,
      combo30u: 39400,
    },
  },
  {
    id: 4,
    name: "MARRÓN 1,8 X 200MTS 60GRS",
    category: "Papel marrón",
    description: "Ideal para producción a gran escala.",
    price: 48000,
    image: papelMadera1,
    combos: {
      combo5u: 48000,
      combo15u: 46000,
      combo30u: 44100,
    },
  },
  {
    id: 5,
    name: "MARRÓN 1,85 X 200MTS 60GRS",
    category: "Papel marrón",
    description: "Máximo ancho para cortes amplios y largos.",
    price: 49250,
    image: papelMadera1,
    combos: {
      combo5u: 49250,
      combo15u: 47200,
      combo30u: 45200,
    },
  },
  {
    id: 6,
    name: "BLANCO 91,5 X 75MTS 60GRS",
    category: "Papel blanco",
    description: "Papel blanco estándar para tizado técnico.",
    price: 18700,
    image: papelBlanco2,
    combos: {
      combo5u: 18700,
      combo15u: 17950,
      combo30u: 17200,
    },
  },
  {
    id: 7,
    name: "BLANCO 1,07 X 75MTS 60GRS",
    category: "Papel blanco",
    description: "Mayor ancho para trazos cómodos y precisos.",
    price: 21400,
    image: papelBlanco2,
    combos: {
      combo5u: 21400,
      combo15u: 20500,
      combo30u: 19600,
    },
  },
  {
    id: 8,
    name: "BLANCO 1,6 X 200MTS 60GRS",
    category: "Papel blanco",
    description: "Rollo blanco profesional para producción continua.",
    price: 72750,
    image: papelBlanco2,
    combos: {
      combo5u: 72750,
      combo15u: 69750,
      combo30u: 66750,
    },
  },
  {
    id: 9,
    name: "BLANCO 1,8 X 200MTS 60GRS",
    category: "Papel blanco",
    description: "Ancho extra para grandes diseños.",
    price: 81550,
    image: papelBlanco2,
    combos: {
      combo5u: 81550,
      combo15u: 78200,
      combo30u: 74850,
    },
  },
  {
    id: 10,
    name: "BLANCO 1,85 X 200MTS 60GRS",
    category: "Papel blanco",
    description: "La mayor cobertura para impresiones industriales.",
    price: 83700,
    image: papelBlanco2,
    combos: {
      combo5u: 83700,
      combo15u: 80200,
      combo30u: 76800,
    },
  },
];

export const plotters = {
  inyeccion: [
    {
      id: 1,
      nombre: "Inject Plotter 195cm HP45",
      image: injectplotter,
      precio_pre_venta: 3450,
      precio_de_llegada: 4100,
      descripcion:
        "Plotter de inyección de tinta de 195cm con tecnología HP45 para tizado de patrones de ropa. Imprime en ambos sentidos (1m/min) y requiere cartuchos de tinta especializados. Ideal para talleres con alta demanda de producción.",
    },
    {
      id: 2,
      nombre: "Inject Plotter 195cm EPSON",
      image: injectplotter,
      precio_pre_venta: 3625,
      precio_de_llegada: 4200,
      descripcion:
        "Plotter profesional de 195cm con cabezales Epson para tizado textil. Funciona con cartuchos de tinta y ofrece impresión bidireccional (1m/min). Perfecto para patrones detallados en confección de ropa.",
    },
    {
      id: 3,
      nombre: "Inject Plotter 200cm HP45",
      image: injectplotter,
      precio_pre_venta: 3970,
      precio_de_llegada: 4600,
      descripcion:
        "Solución industrial de 200cm para tizado de patrones. Utiliza cartuchos HP45 y alcanza 1m/min en modo bidireccional. Para talleres que trabajan con prendas de gran tamaño.",
    },
    {
      id: 4,
      nombre: "Inject Plotter 200cm EPSON",
      image: injectplotter,
      precio_pre_venta: 4200,
      precio_de_llegada: 4850,
      descripcion:
        "Plotter textil Epson de máxima capacidad (200cm). Opera con cartuchos de tinta especializados y ofrece alta velocidad (1m/min) para producción intensiva de patrones.",
    },
  ],
  corte: [
    {
      id: 5,
      nombre: "Cutting Plotter 100cm",
      image: plotterdecorte,
      precio_pre_venta: 750,
      precio_de_llegada: 880,
      descripcion:
        "Plotter de corte de 100cm que funciona con lapiceras estándar (no requiere cartuchos). Gran ventaja económica: solo necesita lapiceras comunes para tizado de patrones. Ideal para emprendedores textiles.",
    },
    {
      id: 6,
      nombre: "Cutting Plotter 125cm",
      image: plotterdecorte,
      precio_pre_venta: 890,
      precio_de_llegada: 1100,
      descripcion:
        "Sistema de corte de 125cm que utiliza lapiceras en lugar de cartuchos, reduciendo costos operativos. Perfecto para talleres que buscan economía sin sacrificar precisión en el tizado de moldes.",
    },
    {
      id: 7,
      nombre: "Cutting Plotter 190cm",
      image: plotterdecorte,
      precio_pre_venta: 1440,
      precio_de_llegada: 1660,
      descripcion:
        "Único plotter de corte industrial de 190cm que trabaja con lapiceras comunes. No necesita cartuchos, ofreciendo el menor costo por patrón tizado. Solución profesional para grandes talleres de confección.",
    },
  ],
};

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
