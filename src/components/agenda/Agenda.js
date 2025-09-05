import React from "react";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/Container";
import { THEME, passion } from "@/components/data/data";
import agenda from "@/components/data/agenda.json" assert { type: "json" };


function formatDayMonth(dateStr) {
  const tz = "America/Santiago";
  const d = new Date(dateStr + "T00:00:00");
  const day = new Intl.DateTimeFormat("es-CL", { day: "2-digit", timeZone: tz }).format(d);
  const month = new Intl.DateTimeFormat("es-CL", { month: "short", timeZone: tz })
    .format(d)
    .toUpperCase()
    .replace(".", "");
  return `${day} ${month}`;
}

function getUpcoming(events, limit = 3) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return events
    .filter((e) => new Date(e.date + "T00:00:00") >= today)
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, limit);
}

export function Agenda() {
  return (
    <section id="agenda" className="py-16 sm:py-24 bg-white">
      <Container>
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2
              className={`${passion.className} text-3xl sm:text-4xl font-bold tracking-tight`}
              style={{ color: THEME.blue }}
            >
              Agenda & Territorio
            </h2>
            <p className="mt-3 text-slate-600 max-w-2xl">
              Aquí podrás conocer las próximas actividades de Soledad Loyola en cada provincia y comuna de la Región de Valparaíso.
              Queremos que nos acompañes en terreno, que seas parte de los encuentros ciudadanos y que juntos construyamos propuestas
              en seguridad, salud y apoyo al adulto mayor.
            </p>

          </div>
          <Button className="rounded-full px-4 py-2 text-white" style={{ background: THEME.primary }}>
            Enviar actividad
          </Button>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {agenda.provinces.map((prov) => {
            const upcoming = getUpcoming(prov.events || []);
            return (
              <Card key={prov.name} className="rounded-2xl border-black/5">
                <CardHeader>
                  <CardTitle className={`${passion.className} flex items-center justify-between text-base`}>
                    <span>{prov.name}</span>
                    <span className="text-xs font-semibold" style={{ color: THEME.primary }}>
                      Próximos días
                    </span>
                  </CardTitle>
                </CardHeader>

                <CardContent className="text-sm text-slate-600 space-y-3">
                  {upcoming.length > 0 ? (
                    upcoming.map((evt) => (
                      <div key={`${evt.date}-${evt.title}`} className="flex items-start gap-3">
                        <div
                          className="h-10 w-14 rounded-md bg-slate-100 grid place-items-center text-xs font-bold"
                          style={{ color: THEME.blue }}
                        >
                          {formatDayMonth(evt.date)}
                        </div>
                        <div>
                          <p className="font-medium">{evt.title}</p>
                          <p className="text-xs text-slate-500 flex items-center gap-2">
                            <MapPin size={14} /> {evt.location || "Comuna por definir"}
                          </p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-xs text-slate-400">No hay actividades programadas.</p>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
