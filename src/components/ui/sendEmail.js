export async function sendEmail({ name, email, message }) {
  const res = await fetch("/.netlify/functions/sendEmail", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, message }),
  });

  const data = await res.json();
  if (!data.success) throw new Error(data.error || "Error al enviar el correo");
  return data;
}
