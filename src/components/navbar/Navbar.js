import { Container } from "../ui/Container";
import Link from "next/link";
import { Button } from "../ui/button";
import { X, Menu } from "lucide-react";
import React from "react";
import NextImage from "next/image"; // ✅ usar alias para evitar conflicto con otros "Image"
import { THEME } from "../data/data";
import { Passion_One, Saira } from "next/font/google";
const passion = Passion_One({ subsets: ["latin"], weight: ["700", "900"] });
const saira = Saira({ subsets: ["latin"], weight: ["400", "500", "700"] });
import { bio } from "../data/data";

export function NavBar() {
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
              className="h-9 w-9 rounded-full shadow overflow-hidden"
              aria-label="Logo Soledad Loyola"
              style={{ background: THEME.primary }}
            >
              <NextImage
                src="/vercel.png"
                alt="Logo Soledad Loyola"
                width={36}   // h-9 (9 * 4px)
                height={36}  // w-9
                className="h-9 w-9 object-cover"
                priority
              />
            </div>

            <div className="leading-tight">
              <p
                className={`${passion.className} font-bold tracking-tight`}
                style={{ color: THEME.blue }}
              >
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
