// netlify/functions/sendEmail.js
import fetch from 'node-fetch';

export async function handler(event) {
  const { name, email, message } = JSON.parse(event.body);

  try {
    // Llamada segura a la API de EmailJS (usa variables de entorno)
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        service_id: process.env.EMAILJS_SERVICE_ID,
        template_id: process.env.EMAILJS_TEMPLATE_ID,
        user_id: process.env.EMAILJS_PUBLIC_KEY,
        template_params: { name, email, message },
      }),
    });

    if (!response.ok) throw new Error('Error al enviar el correo');
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: error.message }),
    };
  }
}
