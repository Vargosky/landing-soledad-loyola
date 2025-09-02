import { Passion_One, Saira } from "next/font/google";

export const bio = {
  nombre: "Soledad Loyola",
  cargo: "Candidata a Senadora – Circunscripción 6, Región de Valparaíso",
  resumen:
    "Técnico Agrícola (DuocUC), con formación en Ingeniería en Administración de RR.HH. (Escuela de Comercio Santiago). Chilena de corazón; gestión territorial rural, apoyo a organizaciones comunitarias y vocación de servicio.",
  edad: 40,
  nacimiento: "Valparaíso, 17 de junio de 1985",
  familia: "Soltera; madre de una hija de 18 años y un hijo de 8 años.",
  estudios: [
    "Educación básica y media en Casablanca.",
    "Técnico Agrícola en DuocUC.",
    "Cursando Ingeniería en Administración de RR.HH. en Escuela de Comercio, Santiago.",
  ],
  competencias: [
    "Gestión agrícola y vitivinícola.",
    "Gestión territorial rural y apoyo a organizaciones comunitarias.",
    "Comunicación efectiva, trabajo en equipo y alta capacidad de gestión.",
  ],
  militancia:
    "Coordinadora del Partido Republicano en Casablanca. Ex candidata a concejal; hoy candidata a Senadora por la Circunscripción 6.",
  domicilio: "Casablanca, Región de Valparaíso.",
};

export const THEME = {
  primary: "#F71C50",      // Pantone 1787 C
  primaryDark: "#A50A36",  // Pantone 7420 C
  blue: "#0B0B99",         // Azul 072 C
  white: "#FFFFFF",
  coal: "#0B0B0C",
  light: "#F8FAFC",
};


export const passion = Passion_One({ subsets: ["latin"], weight: ["700", "900"] });
export const saira = Saira({ subsets: ["latin"], weight: ["400", "500", "700"] });
