export type AppStatus = "live" | "beta" | "soon";

export type ClaudeApp = {
  slug: string;
  name: string;
  description: string;
  url: string;
  status: AppStatus;
  inDevelopment?: boolean;
  shipped?: boolean;
  icon: string;
  accent: string;
  displayHost?: string;
};

// Highlighted at the top of the page, in this order.
const featuredSlugs = ["fanficly", "differentialis", "synthetic"];

export const apps: ClaudeApp[] = [
  {
    slug: "synthetic",
    name: "Synthetic Data Studio",
    description:
      "Browser-based 3D tool for generating synthetic training data via hand-tracked gestures or a virtual camera, with direct Edge Impulse upload.",
    url: "https://synthetic.jennyspeelman.dev",
    status: "live",
    inDevelopment: true,
    icon: "🧬",
    accent: "from-fuchsia-400 to-purple-500",
  },
  {
    slug: "fanficly",
    name: "Fanficly",
    description:
      "Open-source, ad-free iPhone & iPad reader for AO3 fanfiction. Smart prompt-style search, offline library, native iOS.",
    url: "https://apps.apple.com/us/app/fanficly-ao3-fanfiction/id6775897153",
    status: "live",
    shipped: true,
    icon: "📖",
    accent: "from-rose-400 to-orange-400",
    displayHost: "apps.apple.com/app/fanficly",
  },
  {
    slug: "promptlog",
    name: "Promptlog",
    description:
      "Local macOS app that audits the prompts you send to Claude, ChatGPT, Codex, and Antigravity desktop apps. Session-based, with a Next.js dashboard and PDF/XLSX export.",
    url: "https://github.com/yennster/promptlog",
    status: "live",
    inDevelopment: true,
    icon: "📊",
    accent: "from-sky-400 to-indigo-500",
    displayHost: "github.com/yennster/promptlog",
  },
  {
    slug: "descript-automation",
    name: "Descript Automation",
    description:
      "Automate creation of demo videos for web apps via Descript: capture, script, draft.",
    url: "https://github.com/yennster/automated-descript-creation",
    status: "live",
    inDevelopment: true,
    icon: "🎬",
    accent: "from-red-400 to-rose-600",
    displayHost: "github.com/yennster/automated-descript-creation",
  },
  {
    slug: "label",
    name: "EI Label Studio",
    description:
      "Connect an Edge Impulse project, pull its samples, and relabel them in an embedded Label Studio canvas — then push every correction straight back.",
    url: "https://label.jennyspeelman.dev",
    status: "live",
    inDevelopment: true,
    icon: "🏷️",
    accent: "from-emerald-300 to-teal-500",
  },
  {
    slug: "csv",
    name: "EI CSV Editor",
    description:
      "Web tool for visualizing and editing time-series sensor data from CSVs — auto-scaled per-channel lanes on a shared time axis, with drag-to-regroup, formulas, cropping, and direct Edge Impulse upload.",
    url: "https://csv.jennyspeelman.dev",
    status: "live",
    inDevelopment: true,
    icon: "📈",
    accent: "from-amber-300 to-orange-500",
  },
  {
    slug: "dash",
    name: "EI Plotly Dashboard",
    description:
      "Interactive Plotly time-series dashboard for Edge Impulse projects — per-channel subplots on a shared timeline, with zoom, pan, a range slider, and PNG export. Standalone or embedded in Edge Impulse Studio.",
    url: "https://dash.jennyspeelman.dev",
    status: "live",
    inDevelopment: true,
    icon: "🎛️",
    accent: "from-blue-400 to-violet-500",
  },
  {
    slug: "differentialis",
    name: "Differentialis",
    description:
      "Native macOS app for comparing and merging text, images, and folders — with git built in. SwiftUI + Liquid Glass, zero dependencies.",
    url: "https://differentialis.app",
    status: "live",
    shipped: true,
    icon: "🔀",
    accent: "from-violet-400 to-slate-500",
    displayHost: "differentialis.app",
  },
  {
    slug: "party-house",
    name: "Party House",
    description:
      "One native app for every smart light in your house — Hue, Home Assistant, LIFX. iPhone, iPad, Mac, menu bar, and widgets. SwiftUI + Liquid Glass.",
    url: "https://github.com/yennster/party-house",
    status: "live",
    inDevelopment: true,
    icon: "🪩",
    accent: "from-pink-400 via-purple-400 to-cyan-300",
    displayHost: "github.com/yennster/party-house",
  },
];

export const featuredApps: ClaudeApp[] = featuredSlugs
  .map((slug) => apps.find((app) => app.slug === slug))
  .filter((app): app is ClaudeApp => Boolean(app));

// Everything not surfaced in the Featured section.
export const otherApps: ClaudeApp[] = apps.filter(
  (app) => !featuredSlugs.includes(app.slug),
);
