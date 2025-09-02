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

export function Agenda() {
  return (
    <section id="agenda" className="py-16 sm:py-24 bg-white">
      <Container>
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className={`${passion.className} text-3xl sm:text-4xl font-bold tracking-tight`} style={{ color: THEME.blue }}>
              Agenda & Territorio
            </h2>
            <p className="mt-3 text-slate-600 max-w-2xl">
              Publica aquí tus actividades por provincia y comuna. Puedes actualizar este bloque con datos reales o conectarlo a un CMS más adelante.
            </p>
          </div>
          <Button className="rounded-full px-4 py-2 text-white" style={{ background: THEME.primary }}>Enviar actividad</Button>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {["Valparaíso", "Marga Marga", "Quillota", "San Antonio", "Petorca", "Los Andes"].map((prov) => (
            <Card key={prov} className="rounded-2xl border-black/5">
              <CardHeader>
                <CardTitle className={`${passion.className} flex items-center justify-between text-base`}>
                  <span>{prov}</span>
                  <span className="text-xs font-semibold" style={{ color: THEME.primary }}>Próximos días</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-600 space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="h-10 w-14 rounded-md bg-slate-100 grid place-items-center text-xs font-bold" style={{ color: THEME.blue }}>
                      17 SEP
                    </div>
                    <div>
                      <p className="font-medium">Puerta a puerta y punto de prensa</p>
                      <p className="text-xs text-slate-500 flex items-center gap-2"><MapPin size={14} /> Comuna por definir</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}