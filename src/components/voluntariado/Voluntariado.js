"use client"; // Necesario para usar hooks
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/Container";
import { THEME } from "@/components/data/data";
import { passion } from "@/components/data/data";
import Image from "next/image";

export function Voluntariado() {
  // Estado para manejar los datos del formulario
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    ayuda: "Cómo te gustaría ayudar",
    mensaje: "",
  });

  // Estado para manejar el proceso de envío
  const [status, setStatus] = useState({
    isSubmitting: false,
    message: "",
    isError: false,
  });

  // Manejador para actualizar el estado cuando el usuario escribe
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Manejador para enviar el formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ isSubmitting: true, message: "", isError: false });

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Algo salió mal');
      }
      
      setStatus({ isSubmitting: false, message: "¡Gracias! Nos pondremos en contacto pronto.", isError: false });
      // Limpiar formulario
      setFormData({
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
        ayuda: "Cómo te gustaría ayudar",
        mensaje: "",
      });

    } catch (error) {
      setStatus({ isSubmitting: false, message: `Error: ${error.message}`, isError: true });
    }
  };

  return (
    <section id="voluntariado" className="py-16 sm:py-24" style={{ background: `linear-gradient(180deg, white, ${THEME.light})` }}>
      <Container>
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className={`${passion.className} text-3xl sm:text-4xl font-bold tracking-tight`} style={{ color: THEME.blue }}>
              Súmate como voluntario/a
            </h2>
            <p className="mt-3 text-slate-600 max-w-prose">
              Necesitamos equipos en terreno, difusión en redes y apoyo logístico. Déjanos tus datos y nos pondremos en contacto.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 grid gap-3">
              <div className="grid sm:grid-cols-2 gap-3">
                <input required name="nombre" value={formData.nombre} onChange={handleChange} className="w-full rounded-xl border border-black/10 px-4 py-3" placeholder="Nombre" />
                <input required name="apellido" value={formData.apellido} onChange={handleChange} className="w-full rounded-xl border border-black/10 px-4 py-3" placeholder="Apellido" />
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full rounded-xl border border-black/10 px-4 py-3" placeholder="Email" />
                <input required name="telefono" value={formData.telefono} onChange={handleChange} className="w-full rounded-xl border border-black/10 px-4 py-3" placeholder="Teléfono" />
              </div>
              <select name="ayuda" value={formData.ayuda} onChange={handleChange} className="w-full rounded-xl border border-black/10 px-4 py-3 bg-white">
                <option disabled>Cómo te gustaría ayudar</option>
                <option>Terreno (puerta a puerta)</option>
                <option>RR.SS. y contenidos</option>
                <option>Logística / Operaciones</option>
                <option>Apoyo legal / Administrativo</option>
              </select>
              <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} className="w-full rounded-xl border border-black/10 px-4 py-3 min-h-[120px]" placeholder="Cuéntanos brevemente sobre ti" />
              
              <Button type="submit" disabled={status.isSubmitting} className="rounded-full px-5 py-3 text-white w-fit" style={{ background: THEME.primary }}>
                {status.isSubmitting ? 'Enviando...' : 'Enviar'}
              </Button>
              
              {status.message && (
                <p className={`text-sm ${status.isError ? 'text-red-500' : 'text-green-600'}`}>
                  {status.message}
                </p>
              )}
            </form>
          </div>

          <div>
            <div className="relative aspect-video w-full rounded-3xl border-2 overflow-hidden p-5" style={{ borderColor: THEME.primaryDark, background: "#ffffff" }}>
              <Image src="/images/voluntariado2.jpg" alt="Voluntariado en campaña" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" priority={false} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}