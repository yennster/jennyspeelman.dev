# jennyspeelman.dev

Landing page for the small apps I build with Claude, hosted on `*.jennyspeelman.dev`.

Linked from my portfolio at [jennyplunkett.me](https://jennyplunkett.me).

## Stack

- Next.js 16 (App Router) + Turbopack
- React 19
- Tailwind CSS v4
- TypeScript
- Deployed on Vercel

## Adding a new app

Edit [`lib/apps.ts`](./lib/apps.ts) and append an entry:

```ts
{
  slug: "my-app",                         // becomes my-app.jennyspeelman.dev
  name: "My App",
  description: "What it does in one short sentence.",
  url: "https://my-app.jennyspeelman.dev",
  status: "live",                         // "live" | "beta" | "soon"
  icon: "🚀",
  accent: "from-cyan-400 to-blue-600",    // any tailwind gradient pair
}
```

Cards with `status: "soon"` render disabled (no link).

## Develop

```bash
npm install
npm run dev
```

## Deploy

Push to `main`. Vercel auto-deploys. Point the apex `jennyspeelman.dev` at the
project; subdomains (`*.jennyspeelman.dev`) are configured per Claude app
project on Vercel.
