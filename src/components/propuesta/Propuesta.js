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
import { Issue } from "../issue/Issue";


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
          <Issue icon={Shield} title="Seguridad">
            Plan regional contra el crimen organizado: refuerzo a Carabineros y PDI, persecución penal efectiva y recuperación de espacios públicos. Protección a víctimas y testigos.
          </Issue>
          <Issue icon={Landmark} title="Orden migratorio">
            Control fronterizo real, regularización con plazos estrictos y expulsión de delincuentes. Integración responsable para quienes cumplen la ley y aportan al país.
          </Issue>
          <Issue icon={HeartPulse} title="Salud y bienestar">
            Reducción de listas de espera con gestión, más especialistas y salud primaria fortalecida. Prevención en salud mental y adicciones con foco comunitario.
          </Issue>
        </div>
      </Container>
    </section>
  );
}