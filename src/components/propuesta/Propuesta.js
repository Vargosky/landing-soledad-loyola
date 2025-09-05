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
          <Issue icon={Shield} title="Plan Implacable">
          Delincuentes a la cárcel, sin excusas. Más penas, más control, más respaldo a Carabineros. Seguridad sin complejos.
          </Issue>
          <Issue icon={Landmark} title="Plan Generación Dorada">
          El Plan Generación Dorada es una propuesta social integral que busca que Chile no pierda una generación completa de talento, esfuerzo y esperanza. Está orientado a adultos mayores y personas que hoy se sienten postergadas por el Estado.
          </Issue>
          <Issue icon={HeartPulse} title="Plan Zero : Cero Espera">
          En Chile hay más de 2,5 millones de personas esperando atención médica. Nosotros decimos: cero listas, cero excusas, cero abandono.
          </Issue>
        </div>
      </Container>
    </section>
  );
}