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





export function Biografia() {
  return (
    <section
      id="biografia"
      className="py-16 sm:py-24"
      style={{ background: THEME.light }}
    >
      <Container>
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* FOTO BIO */}
          <div>
            <div
              className="relative aspect-[4/5] w-full rounded-3xl border-2 overflow-hidden"
              style={{ borderColor: THEME.primary, background: "#ffffff" }}
            >
              <Image
                src="/images/soledad_torso.jpeg"
                alt="Soledad Loyola - Foto de medio cuerpo"
                fill
                className="object-cover"
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>

          <div>
            <h2
              className={`${passion.className} text-3xl sm:text-4xl font-bold tracking-tight`}
              style={{ color: THEME.blue }}
            >
              {bio.nombre}
            </h2>
            <p className="mt-2 text-sm font-semibold" style={{ color: THEME.primary }}>
              {bio.cargo}
            </p>
            <p className="mt-4 text-slate-700">{bio.resumen}</p>
            <ul className="mt-4 space-y-2 text-slate-700 text-sm">
              <li>
                <strong>Nacimiento:</strong> {bio.nacimiento} ({bio.edad} años)
              </li>
              {/* <li>
                <strong>Familia:</strong> {bio.familia}
              </li> */}
              <li>
                <strong>Domicilio:</strong> {bio.domicilio}
              </li>
            </ul>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <Card className="rounded-xl border-black/5">
                <CardHeader>
                  <CardTitle className={`${passion.className} text-base`}>
                    Estudios
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
                    {bio.estudios.map((e) => (
                      <li key={e}>{e}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card className="rounded-xl border-black/5">
                <CardHeader>
                  <CardTitle className={`${passion.className} text-base`}>
                    Competencias
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
                    {bio.competencias.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
            <p className="mt-6 text-sm text-slate-600">{bio.militancia}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}