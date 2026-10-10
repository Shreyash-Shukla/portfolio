import assert from "node:assert/strict";
import test from "node:test";
import { POST } from "../app/api/contact/route.js";

function request(body) {
  return new Request("http://localhost/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

const message = { name: "Test User", email: "test@example.com", message: "Hello _world_ *test*" };

test("does not claim a message was sent without bot configuration", async () => {
  const originalToken = process.env.TELEGRAM_BOT_TOKEN;
  const originalChat = process.env.TELEGRAM_CHAT_ID;
  delete process.env.TELEGRAM_BOT_TOKEN;
  delete process.env.TELEGRAM_CHAT_ID;
  try {
    const response = await POST(request(message));
    assert.equal(response.status, 503);
    assert.match((await response.json()).error, /unavailable/i);
  } finally {
    if (originalToken === undefined) delete process.env.TELEGRAM_BOT_TOKEN;
    else process.env.TELEGRAM_BOT_TOKEN = originalToken;
    if (originalChat === undefined) delete process.env.TELEGRAM_CHAT_ID;
    else process.env.TELEGRAM_CHAT_ID = originalChat;
  }
});

test("sends unformatted text to the configured Telegram chat", async () => {
  const originalToken = process.env.TELEGRAM_BOT_TOKEN;
  const originalChat = process.env.TELEGRAM_CHAT_ID;
  const originalFetch = globalThis.fetch;
  process.env.TELEGRAM_BOT_TOKEN = "test-token";
  process.env.TELEGRAM_CHAT_ID = "12345";
  let sent;
  globalThis.fetch = async (url, options) => {
    sent = { url, options };
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  };
  try {
    const response = await POST(request(message));
    assert.equal(response.status, 200);
    assert.equal((await response.json()).success, true);
    assert.equal(sent.url, "https://api.telegram.org/bottest-token/sendMessage");
    const payload = JSON.parse(sent.options.body);
    assert.equal(payload.chat_id, "12345");
    assert.match(payload.text, /Hello _world_ \*test\*/);
    assert.equal(payload.parse_mode, undefined);
  } finally {
    globalThis.fetch = originalFetch;
    if (originalToken === undefined) delete process.env.TELEGRAM_BOT_TOKEN;
    else process.env.TELEGRAM_BOT_TOKEN = originalToken;
    if (originalChat === undefined) delete process.env.TELEGRAM_CHAT_ID;
    else process.env.TELEGRAM_CHAT_ID = originalChat;
  }
});
