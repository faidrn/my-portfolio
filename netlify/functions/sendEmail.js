//import nodemailer from "nodemailer";
//import fetch from "node-fetch";

export const handler = async (event) => {
  try {
    const { name, email, message } = JSON.parse(event.body);

    // ✅ Toma las variables del entorno
    const serviceID = process.env.EMAILJS_SERVICE_ID;
    const templateID = process.env.EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.EMAILJS_PUBLIC_KEY;

    if (!serviceID || !templateID || !publicKey) {
      throw new Error("Faltan variables de entorno de EmailJS");
    }

    // ✅ Envía usando la API de EmailJS
    const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id: serviceID,
        template_id: templateID,
        user_id: publicKey,
        template_params: { name, email, message },
      }),
    });

    console.log("Service:", process.env.EMAILJS_SERVICE_ID);
console.log("Template:", process.env.EMAILJS_TEMPLATE_ID);
console.log("Public:", process.env.EMAILJS_PUBLIC_KEY);

    if (!res.ok) throw new Error(`EmailJS error: ${res.statusText}`);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    console.error("❌ Error en sendEmail function:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: error.message }),
    };
  }
};
