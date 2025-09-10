import React from "react";
// ... (todos tus otros imports, no es necesario cambiar nada aquí)
import { Container } from "@/components/ui/Container";
import { THEME } from "@/components/data/data";
import { passion, saira } from "@/components/data/data";
import { Issue } from "../issue/Issue";
import { Shield, Landmark, HeartPulse } from "lucide-react";


export function Propuesta() {
  return (
    <section id="propuesta" className="py-16 sm:py-24 bg-white">
      <Container>
        <div className="max-w-2xl">
          <h2 className={`${passion.className} text-3xl sm:text-4xl font-bold tracking-tight`} style={{ color: THEME.blue }}>
            Nuestra propuesta
          </h2>
          <p className="mt-3 text-slate-600">
            Tres ejes con foco en resultados concretos para la Región de Valparaíso.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          
          {/* --- Propuesta 1 --- */}
          <a 
            href="https://kast.cl/wp-content/uploads/2025/05/PLAN-IMPLACABLE-2.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block transform transition-transform duration-200 hover:scale-105" // Clases para el efecto visual
          >
            <Issue icon={Shield} title="Plan Implacable">
              Delincuentes a la cárcel, sin excusas. Más penas, más control, más respaldo a Carabineros. Seguridad sin complejos.
            </Issue>
          </a>

          {/* --- Propuesta 2 --- */}
          <a 
            href="https://kast.cl/wp-content/uploads/2025/06/PDF_GENERACION-DORADA-1_compressed.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block transform transition-transform duration-200 hover:scale-105"
          >
            <Issue icon={Landmark} title="Plan Generación Dorada">
              El Plan Generación Dorada es una propuesta social integral que busca que Chile no pierda una generación completa de talento, esfuerzo y esperanza. Está orientado a adultos mayores y personas que hoy se sienten postergadas por el Estado.
            </Issue>
          </a>
          
          {/* --- Propuesta 3 --- */}
          <a 
            href="https://kast.cl/wp-content/uploads/2025/05/PLAN-ZERO.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block transform transition-transform duration-200 hover:scale-105"
          >
            <Issue icon={HeartPulse} title="Plan Zero : Cero Espera">
              En Chile hay más de 2,5 millones de personas esperando atención médica. Nosotros decimos: cero listas, cero excusas, cero abandono.
            </Issue>
          </a>

        </div>
      </Container>
    </section>
  );
}