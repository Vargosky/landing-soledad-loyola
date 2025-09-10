// En: src/app/api/send-email/route.js

import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = 'soledad.loyola.candidata@gmail.com';

export async function POST(request) {
  try {
    const body = await request.json();
    const { nombre, apellido, email, telefono, ayuda, mensaje } = body;

    if (!nombre || !apellido || !email || !telefono) {
      return NextResponse.json({ error: 'Faltan campos requeridos.' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'Formulario Web <onboarding@resend.dev>',
      to: [toEmail],
      subject: `Nuevo voluntario: ${nombre} ${apellido}`,
      html: `
        <h1>Nuevo registro de voluntariado</h1>
        <p><strong>Nombre:</strong> ${nombre} ${apellido}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Cómo le gustaría ayudar:</strong> ${ayuda}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje}</p>
      `,
    });

    if (error) {
      console.error({ error });
      return NextResponse.json({ error: 'Hubo un error al enviar el correo.' }, { status: 400 });
    }

    return NextResponse.json({ message: '¡Mensaje enviado con éxito!' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error interno del servidor.' }, { status: 500 });
  }
}