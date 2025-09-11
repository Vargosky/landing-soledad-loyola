// ==============================================
// FILE: src/app/page.js
// ==============================================
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, Shield, HeartPulse, Landmark, Users, ChevronRight, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PhotoHero from '@/components/images/fotoHero.jpeg';
import Image from "next/image";
import { bio } from "@/components/data/data";
import { Container } from "@/components/ui/Container";
import { THEME } from "@/components/data/data";

// === Google Fonts (según Manual): Passion One (titulares) + Saira (texto) ===
import { passion, saira  } from "@/components/data/data";

//Componentes del sitio

import { NavBar } from "@/components/navbar/Navbar";
import {Hero} from "@/components/hero/Hero"
import { Issue } from "@/components/issue/Issue";
import { Propuesta } from "@/components/propuesta/Propuesta";
import { Biografia } from "@/components/biografia/Biografia";
import { Agenda } from "@/components/agenda/Agenda";
import { Voluntariado } from "@/components/voluntariado/Voluntariado";
import { Footer } from "@/components/footer/Footer";


export default function LandingPage() {
  return (
    <main className={`${saira.className} min-h-dvh`} style={{ color: THEME.coal }}>
      <NavBar />
      <Hero />
      <Propuesta />
      <Biografia />
      {/* <Agenda /> */}
      <Voluntariado />
      <Footer />

      {/* Cinta inferior con CTA persistente en mobile */}
      <div className="fixed inset-x-0 bottom-4 z-[60] px-4 md:hidden">
        <div className="mx-auto max-w-md rounded-full bg-white shadow-lg border border-black/5 flex items-center justify-between pl-4 pr-2 py-2">
          <div className="text-sm">
            <p className={`${passion.className} font-semibold`} style={{ color: THEME.blue }}>¿Te sumas a la campaña?</p>
            <p className="text-xs text-slate-500">Sé parte del equipo de {bio.nombre}</p>
          </div>
          <a href="#voluntariado" className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-white" style={{ background: THEME.primary }}>
            Sí, voy <ChevronRight size={16} />
          </a>
        </div>
      </div>
    </main>
  );
}
