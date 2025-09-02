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

// === Google Fonts (según Manual): Passion One (titulares) + Saira (texto) ===
import { Passion_One, Saira } from "next/font/google";
const passion = Passion_One({ subsets: ["latin"], weight: ["700", "900"] });
const saira = Saira({ subsets: ["latin"], weight: ["400", "500", "700"] });

// ======= THEME (Manual La Fuerza de Chile) =======
// #F71C50 (principal), #A50A36 (oscuro), #0B0B99 (azul 072C), #FFFFFF
const THEME = {
  primary: "#F71C50",      // Pantone 1787 C
  primaryDark: "#A50A36",  // Pantone 7420 C
  blue: "#0B0B99",         // Azul 072 C
  white: "#FFFFFF",
  coal: "#0B0B0C",
  light: "#F8FAFC",
};

// ======= BIO =======
const bio = {
  nombre: "Soledad Loyola",
  cargo: "Candidata a Senadora – Circunscripción 6, Región de Valparaíso",
  resumen:
    "Técnico Agrícola (DuocUC), con formación en Ingeniería en Administración de RR.HH. (Escuela de Comercio Santiago). Chilena de corazón; gestión territorial rural, apoyo a organizaciones comunitarias y vocación de servicio.",
  edad: 40,
  nacimiento: "Valparaíso, 17 de junio de 1985",
  familia: "Soltera; madre de una hija de 18 años y un hijo de 8 años.",
  estudios: [
    "Educación básica y media en Casablanca.",
    "Técnico Agrícola en DuocUC.",
    "Cursando Ingeniería en Administración de RR.HH. en Escuela de Comercio, Santiago.",
  ],
  competencias: [
    "Gestión agrícola y vitivinícola.",
    "Gestión territorial rural y apoyo a organizaciones comunitarias.",
    "Comunicación efectiva, trabajo en equipo y alta capacidad de gestión.",
  ],
  militancia:
    "Coordinadora del Partido Republicano en Casablanca. Ex candidata a concejal; hoy candidata a Senadora por la Circunscripción 6.",
  domicilio: "Casablanca, Región de Valparaíso.",
};

// ======= COMPONENTES =======
function Container({ children }) {
  return <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>;
}

function NavBar() {
  const [open, setOpen] = React.useState(false);
  return (
    <header
      className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-black/5"
      style={{ backgroundColor: "rgba(255,255,255,0.7)" }}
    >
      <Container>
        <nav className="flex items-center justify-between py-3">
          <Link href="#" className="flex items-center gap-3">
            <div
              className="h-9 w-9 rounded-full shadow"
              style={{ background: THEME.primary }}
              aria-label="Logo Soledad Loyola"
            />
            <div className="leading-tight">
              <p className={`${passion.className} font-bold tracking-tight`} style={{ color: THEME.blue }}>
                {bio.nombre}
              </p>
              <p className="text-xs text-gray-600">{bio.cargo}</p>
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#propuesta" className="hover:opacity-80">Propuesta</a>
            <a href="#biografia" className="hover:opacity-80">Biografía</a>
            <a href="#agenda" className="hover:opacity-80">Agenda</a>
            <a href="#voluntariado" className="hover:opacity-80">Voluntariado</a>
            <a href="#donar" className="hover:opacity-80">Donar</a>
            <Button
              className="rounded-full px-4 py-2 text-white"
              style={{ background: THEME.primary }}
              asChild
            >
              <a href="#contacto">Contacto</a>
            </Button>
          </div>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Abrir menú">
            {open ? <X /> : <Menu />}
          </button>
        </nav>
        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2 text-sm">
              {[
                ["Propuesta", "#propuesta"],
                ["Biografía", "#biografia"],
                ["Agenda", "#agenda"],
                ["Voluntariado", "#voluntariado"],
                ["Donar", "#donar"],
                ["Contacto", "#contacto"],
              ].map(([label, href]) => (
                <a key={href} href={href} className="py-2 border-b border-black/5">
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}

function Hero() {
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
                className="object-cover object-center"
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

function Issue({ icon: Icon, title, children }) {
  return (
    <Card className="shadow-sm hover:shadow-md transition rounded-2xl border-black/5">
      <CardHeader>
        <CardTitle className={`${passion.className} flex items-center gap-3`}>
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full" style={{ background: THEME.primary, color: "white" }}>
            <Icon size={20} />
          </span>
          <span className="text-lg">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-slate-600">
        {children}
      </CardContent>
    </Card>
  );
}

function Propuesta() {
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

function Biografia() {
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
              <li>
                <strong>Familia:</strong> {bio.familia}
              </li>
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

function Agenda() {
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

function Voluntariado() {
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

function Donar() {
  return (
    <section id="donar" className="py-16 sm:py-24 bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className={`${passion.className} text-3xl sm:text-4xl font-bold tracking-tight`} style={{ color: THEME.blue }}>
              Aporta a la campaña
            </h2>
            <p className="mt-3 text-slate-600">
              Tu donación permite imprimir material, financiar traslados y llegar a más vecinos.
            </p>
            <div className="mt-6 grid sm:grid-cols-3 gap-3">
              {["$5.000", "$10.000", "$20.000"].map((monto) => (
                <button
                  key={monto}
                  className="rounded-2xl border border-black/10 px-5 py-4 text-left hover:shadow-md transition"
                >
                  <p className="text-sm text-slate-500">Monto</p>
                  <p className="text-lg font-bold" style={{ color: THEME.blue }}>{monto}</p>
                </button>
              ))}
            </div>
            <div className="mt-4 flex gap-3">
              <input className="w-40 rounded-xl border border-black/10 px-4 py-3" placeholder="$ Otro" />
              <Button className="rounded-xl px-5 py-3 text-white" style={{ background: THEME.primary }}>
                Donar ahora
              </Button>
            </div>
            <p className="mt-3 text-xs text-slate-500">* Implementar pasarela o datos de transferencia más adelante.</p>
          </div>

          {/* IMAGEN DONACIONES */}
          <div>
            <div className="aspect-[4/3] w-full rounded-3xl border-2 border-dashed bg-white" style={{ borderColor: THEME.blue }}>
              <div className="flex h-full items-center justify-center text-center p-6">
                <p className="text-sm text-slate-500">
                  Espacio para imagen/arte de donaciones <br />
                  <span className="text-slate-400">(ilustración o foto del equipo)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Footer() {
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

export default function LandingPage() {
  return (
    <main className={`${saira.className} min-h-dvh`} style={{ color: THEME.coal }}>
      <NavBar />
      <Hero />
      <Propuesta />
      <Biografia />
      <Agenda />
      <Voluntariado />
      {/* <Donar /> */}
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
