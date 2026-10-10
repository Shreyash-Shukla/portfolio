This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Contact form delivery

The contact form sends messages to a private Telegram chat through `app/api/contact/route.js`. It requires two server-side environment variables:

```text
TELEGRAM_BOT_TOKEN=your_botfather_token
TELEGRAM_CHAT_ID=your_private_chat_id
```

1. Create a bot with [@BotFather](https://t.me/botfather) using `/newbot`. Keep its token private.
2. Open your new bot in Telegram and send it `/start`. Bots cannot message you until you contact them.
3. Call Telegram's [`getUpdates`](https://core.telegram.org/bots/api#getupdates) method with that token. Find the update for your `/start` message and copy `message.chat.id`.
4. Set both variables in `.env.local` for local testing and in your host's Production environment settings for the deployed site. Do not use `NEXT_PUBLIC_` or commit the token. Deploy again after adding the host variables.
5. Submit a test message through the contact form and confirm it arrives in your Telegram chat.

If delivery is not configured or Telegram rejects the message, the form shows an error and keeps the visitor's input instead of claiming the message was sent.
