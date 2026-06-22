export type AppStatus = "live" | "beta" | "soon";

export type ClaudeApp = {
  slug: string;
  name: string;
  description: string;
  url: string;
  status: AppStatus;
  inDevelopment?: boolean;
  icon: string;
  accent: string;
  displayHost?: string;
};

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
    accent: "from-fuchsia-500 to-purple-600",
  },
  {
    slug: "fanficly",
    name: "Fanficly",
    description:
      "Open-source, ad-free iPhone & iPad reader for AO3 fanfiction. Smart prompt-style search, offline library, native iOS.",
    url: "https://apps.apple.com/us/app/fanficly-ao3-fanfiction/id6775897153",
    status: "live",
    inDevelopment: true,
    icon: "📖",
    accent: "from-rose-500 to-orange-500",
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
    accent: "from-sky-500 to-indigo-600",
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
    accent: "from-red-800 to-rose-950",
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
    accent: "from-emerald-400 to-teal-600",
  },
  {
    slug: "differentialis",
    name: "Differentialis",
    description:
      "Native macOS app for comparing and merging text, images, and folders — with git built in. SwiftUI + Liquid Glass, zero dependencies.",
    url: "https://github.com/yennster/differentialis",
    status: "live",
    inDevelopment: true,
    icon: "🔀",
    accent: "from-violet-500 to-slate-800",
    displayHost: "github.com/yennster/differentialis",
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
    accent: "from-pink-500 via-purple-500 to-cyan-400",
    displayHost: "github.com/yennster/party-house",
  },
];
