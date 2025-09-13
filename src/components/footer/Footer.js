import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
// 1. Importamos los íconos de Facebook e Instagram
import { Menu, X, Shield, HeartPulse, Landmark, Users, ChevronRight, Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { bio } from "@/components/data/data";
import { Container } from "@/components/ui/Container";
import { THEME } from "@/components/data/data";
import { passion, saira } from "@/components/data/data";


export function Footer() {
  return (
    <footer id="contacto" className="pt-12 pb-16" style={{ background: THEME.blue, color: "white" }}>
      <Container>
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <p className={`${passion.className} text-xl font-bold`}>{bio.nombre}</p>
            <p className="text-sm text-white/80">{bio.cargo}</p>
            <div className="mt-4 flex items-center gap-2 text-sm text-white/80"><MapPin size={16} /> Casablanca, Región de Valparaíso</div>
            <div className="mt-1 flex items-center gap-2 text-sm text-white/80"><Phone size={16} /> +56 9 4874 4296</div>

            {/* --- SECCIÓN DE REDES SOCIALES (AÑADIDA) --- */}
            <div className="mt-6 flex items-center gap-4">
              <a 
                href="https://instagram.com/soledadloyolav/" // <-- CAMBIA ESTA URL
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Perfil de Instagram"
                className="text-white/80 hover:text-white transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://facebook.com/soledad.loyolavera" // <-- CAMBIA ESTA URL
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Página de Facebook"
                className="text-white/80 hover:text-white transition-colors"
              >
                <Facebook size={24} />
              </a>
            </div>
            {/* --- FIN DE LA SECCIÓN --- */}

          </div>
          <div>
            <p className="font-semibold">Navegación</p>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li><a href="#propuesta" className="hover:underline">Propuesta</a></li>
              <li><a href="#biografia" className="hover:underline">Biografía</a></li>
              <li><a href="#agenda" className="hover:underline">Agenda</a></li>
              <li><a href="#voluntariado" className="hover:underline">Voluntariado</a></li>
              <li><a href="#donar" className="hover:underline">Donar</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Acción</p>
            <div className="mt-3 grid gap-2">
              <Button className="rounded-full px-4 py-2 text-white" style={{ background: THEME.primary }}>
                Súmate hoy
              </Button>
              <Button variant="outline" className="rounded-full px-4 py-2 bg-white text-black">
                Comparte la propuesta
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-10 border-top pt-6 text-xs text-white/80 flex flex-wrap items-center gap-2 justify-between" style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}>
          <p>© {new Date().getFullYear()} {bio.nombre}. Todos los derechos reservados.</p>
          <p>
            Hecha con <span className="font-semibold">Next.js</span> + <span className="font-semibold">Tailwind</span> · Estilo sobrio con movimiento.
          </p>
        </div>
      </Container>
    </footer>
  );
}