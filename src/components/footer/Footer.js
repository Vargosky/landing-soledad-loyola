import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, Shield, HeartPulse, Landmark, Users, ChevronRight, Mail, Phone, MapPin } from "lucide-react";
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
            <div className="mt-1 flex items-center gap-2 text-sm text-white/80"><Mail size={16} /> correo@campaña.cl</div>
            <div className="mt-1 flex items-center gap-2 text-sm text-white/80"><Phone size={16} /> +56 9 0000 0000</div>
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