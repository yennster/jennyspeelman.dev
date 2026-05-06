export type AppStatus = "live" | "beta" | "soon";

export type ClaudeApp = {
  slug: string;
  name: string;
  description: string;
  url: string;
  status: AppStatus;
  icon: string;
  accent: string;
};

export const apps: ClaudeApp[] = [
  {
    slug: "example",
    name: "Example App",
    description:
      "Replace me — drop new entries into lib/apps.ts as you ship subdomains.",
    url: "https://example.jennyspeelman.dev",
    status: "soon",
    icon: "✨",
    accent: "from-fuchsia-500 to-purple-600",
  },
];
