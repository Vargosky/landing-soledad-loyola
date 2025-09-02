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

export function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: `linear-gradient(180deg, ${THEME.blue} 0%, #05054a 60%, #02021f 100%)`,
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-15"
        style={{ backgroundImage: "radial-gradient(1000px 400px at 0% 0%, white, transparent)" }}
      />
      <Container>
        <div className="grid lg:grid-cols-2 items-center py-16 lg:py-24 gap-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
              style={{ background: THEME.white, color: THEME.blue }}
            >
              Circunscripción 6 · Región de Valparaíso
            </span>
            <h1 className={`${passion.className} mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-white`}>
              La región mejora con
            </h1>
              <h1 className={`${passion.className} mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-white`}>
              Soledad Loyola
            </h1>
            <p className="mt-4 text-slate-200 max-w-xl">
              {bio.nombre} propone una agenda sobria y firme: combatir el delito con enfoque territorial, ordenar la migración con reglas claras, y reactivar la economía local apoyando a quienes emprenden y trabajan.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button className="rounded-full px-5 py-2.5 text-white" style={{ background: THEME.primary }} asChild>
                <a href="#propuesta">Leer propuesta</a>
              </Button>
              <Button className="rounded-full px-5 py-2.5 border-2" variant="outline" asChild style={{ borderColor: THEME.white, color: THEME.white }}>
                <a href="#voluntariado">Ser voluntario</a>
              </Button>
              <Button className="rounded-full px-5 py-2.5 border-2" variant="outline" asChild style={{ borderColor: THEME.white, color: THEME.white }}>
                <a href="#donar">Donar</a>
              </Button>
            </div>
          </motion.div>

          {/* FOTO HERO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div
              className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border-2"
              style={{ borderColor: THEME.white, background: "#ffffff10" }}
            >
              <Image
                src="/images/soledad-hero.jpg"        // pon la imagen en /public/soledad-hero.jpg
                alt="Soledad Loyola - fotografía principal"
                fill                            // ocupa todo el contenedor (position: absolute)
                priority                        // carga preferente para LCP
                sizes="(min-width: 1024px) 560px, 90vw"
                className="object-contain object-center"
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMycgaGVpZ2h0PSczJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLz4=" // opcional: mini blur
              
              />
            </div>

            <div
              className="absolute -bottom-6 -right-6 hidden sm:block rounded-2xl px-4 py-3 text-sm font-semibold shadow-lg"
              style={{ background: THEME.primary, color: "white" }}
            >
              ¡Súmate hoy!
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}