import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    // If Telegram not configured, log and return success (dev mode)
    if (!botToken || !chatId) {
      console.log("📬 Contact form submission (Telegram not configured):", { name, email, message });
      return NextResponse.json({ success: true, mode: "console" });
    }

    const text = `
🔔 *New Portfolio Message!*

👤 *Name:* ${name}
📧 *Email:* ${email}
💬 *Message:*
${message}

_Sent from shreyash.dev_
    `.trim();

    const telegramRes = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: "Markdown",
        }),
      }
    );

    if (!telegramRes.ok) {
      const err = await telegramRes.json();
      console.error("Telegram API error:", err);
      return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
    }

    return NextResponse.json({ success: true, mode: "telegram" });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
