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
    slug: "synthetic",
    name: "Synthetic Data Studio",
    description:
      "Browser-based 3D tool for generating synthetic training data via hand-tracked gestures or a virtual camera, with direct Edge Impulse upload.",
    url: "https://synthetic.jennyspeelman.dev",
    status: "live",
    icon: "🧬",
    accent: "from-fuchsia-500 to-purple-600",
  },
];
