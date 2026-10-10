export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid message" }, { status: 400 });
  }

  const name = typeof body?.name === "string" ? body.name.trim() : "";
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const message = typeof body?.message === "string" ? body.message.trim() : "";

  if (!name || !email || !message) {
    return Response.json({ error: "All fields are required" }, { status: 400 });
  }
  if (name.length > 100 || email.length > 254 || message.length > 3000 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Please check the message details and try again" }, { status: 400 });
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!botToken || !chatId) {
    return Response.json({ error: "Message delivery is unavailable. Please email me directly." }, { status: 503 });
  }

  const text = `New portfolio message\n\nName: ${name}\nEmail: ${email}\n\n${message}`;
  try {
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text }),
    });
    const result = await response.json();
    if (!response.ok || !result.ok) {
      console.error("Telegram message delivery failed with status", response.status);
      return Response.json({ error: "Message could not be delivered. Please email me directly." }, { status: 502 });
    }
    return Response.json({ success: true });
  } catch {
    console.error("Telegram message delivery request failed");
    return Response.json({ error: "Message could not be delivered. Please email me directly." }, { status: 502 });
  }
}
