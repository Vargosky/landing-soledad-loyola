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


export function Voluntariado() {
  return (
    <section
      id="voluntariado"
      className="py-16 sm:py-24"
      style={{ background: `linear-gradient(180deg, white, ${THEME.light})` }}
    >
      <Container>
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2
              className={`${passion.className} text-3xl sm:text-4xl font-bold tracking-tight`}
              style={{ color: THEME.blue }}
            >
              Súmate como voluntario/a
            </h2>
            <p className="mt-3 text-slate-600 max-w-prose">
              Necesitamos equipos en terreno, difusión en redes y apoyo logístico. Déjanos tus datos y nos pondremos en contacto.
            </p>

            <form className="mt-6 grid gap-3">
              <div className="grid sm:grid-cols-2 gap-3">
                <input className="w-full rounded-xl border border-black/10 px-4 py-3" placeholder="Nombre" />
                <input className="w-full rounded-xl border border-black/10 px-4 py-3" placeholder="Apellido" />
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                <input className="w-full rounded-xl border border-black/10 px-4 py-3" placeholder="Email" />
                <input className="w-full rounded-xl border border-black/10 px-4 py-3" placeholder="Teléfono" />
              </div>
              <select className="w-full rounded-xl border border-black/10 px-4 py-3 bg-white">
                <option>Cómo te gustaría ayudar</option>
                <option>Terreno (puerta a puerta)</option>
                <option>RR.SS. y contenidos</option>
                <option>Logística / Operaciones</option>
                <option>Apoyo legal / Administrativo</option>
              </select>
              <textarea
                className="w-full rounded-xl border border-black/10 px-4 py-3 min-h-[120px]"
                placeholder="Cuéntanos brevemente sobre ti"
              />
              <Button className="rounded-full px-5 py-3 text-white w-fit" style={{ background: THEME.primary }}>
                Enviar
              </Button>
              <p className="text-xs text-slate-500">
                *Formulario sin backend aún. Podemos conectarlo a una API o Google Sheets.
              </p>
            </form>
          </div>

          {/* FOTO/VIDEO voluntariado */}
          <div>
            <div
              className="relative aspect-video w-full rounded-3xl border-2 overflow-hidden p-5"
              style={{ borderColor: THEME.primaryDark, background: "#ffffff" }}
            >
              <Image
                src="/images/voluntariado2.jpg"   // ✅ Ruta absoluta desde /public
                alt="Voluntariado en campaña"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority={false}           // no es crítica, carga normal
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}