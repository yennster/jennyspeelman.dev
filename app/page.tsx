import {
  apps,
  otherApps,
  featuredApps,
  type AppStatus,
  type ClaudeApp,
} from "@/lib/apps";

const statusLabel: Record<AppStatus, string> = {
  live: "Live",
  beta: "Beta",
  soon: "Coming soon",
};

const statusStyle: Record<AppStatus, string> = {
  live: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  beta: "bg-amber-50 text-amber-700 ring-amber-200",
  soon: "bg-pink-50 text-pink-500 ring-pink-200",
};

const tickerItems = [
  "★ welcome 2 my app page!! ★",
  "now building: native apps w/ Claude",
  "♥ thx 4 stopping by ♥",
  "mood: shipping",
  "✿ new apps added all the time ✿",
  "edge AI 4 lyfe",
];

const webBadges = [
  { label: "made w/ AI", tone: "bg-pink-500 text-white" },
  { label: "no cookies", tone: "bg-white text-pink-600" },
  {
    label: "best viewed in any browser",
    tone: "bg-fuchsia-100 text-fuchsia-700",
  },
  { label: "100% vibes", tone: "bg-lilac/40 text-purple-800" },
];

function Sparkle({
  className,
  style,
  size = 24,
  color = "#ff4fa3",
}: {
  className?: string;
  style?: React.CSSProperties;
  size?: number;
  color?: string;
}) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      style={style}
    >
      <path
        d="M12 0c.6 6.2 5.8 11.4 12 12-6.2.6-11.4 5.8-12 12-.6-6.2-5.8-11.4-12-12C6.2 11.4 11.4 6.2 12 0z"
        fill={color}
      />
    </svg>
  );
}

function StatusPills({ app }: { app: ClaudeApp }) {
  const base = "rounded-full px-2.5 py-0.5 text-[11px] font-semibold ring-1";
  return (
    <div className="flex flex-wrap gap-1.5">
      <span className={`${base} ${statusStyle[app.status]}`}>
        {statusLabel[app.status]}
      </span>
      {app.shipped && (
        <span
          className={`${base} bg-violet-50 text-violet-700 ring-violet-200`}
        >
          Shipped
        </span>
      )}
      {app.inDevelopment && (
        <span className={`${base} bg-pink-50 text-pink-600 ring-pink-200`}>
          In development
        </span>
      )}
    </div>
  );
}

function cardLink(app: ClaudeApp) {
  const isLinkable = app.status !== "soon";
  return {
    isLinkable,
    Tag: isLinkable ? ("a" as const) : ("div" as const),
    linkProps: isLinkable
      ? { href: app.url, target: "_blank" as const, rel: "noopener noreferrer" }
      : {},
  };
}

function hostFor(app: ClaudeApp) {
  return app.displayHost ?? `${app.slug}.jennyspeelman.dev`;
}

function FeaturedCard({ app, index }: { app: ClaudeApp; index: number }) {
  const { isLinkable, Tag, linkProps } = cardLink(app);

  return (
    <li
      className="fade-up min-w-0"
      style={{ animationDelay: `${200 + index * 90}ms` }}
    >
      <Tag
        {...linkProps}
        className="y2k-card group flex h-full flex-col overflow-hidden rounded-3xl"
      >
        <div className="title-bar flex items-center justify-between px-4 py-2">
          <span className="pixel-badge truncate text-sm text-hot">
            {app.slug}.app
          </span>
          <span aria-hidden className="flex gap-1.5">
            <span className="size-3 rounded-full bg-white/80 ring-1 ring-pink-300" />
            <span className="size-3 rounded-full bg-white/80 ring-1 ring-pink-300" />
            <span className="size-3 rounded-full bg-pink-500 ring-1 ring-pink-600" />
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-start justify-between gap-3">
            <div
              className={`gloss-bubble flex size-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${app.accent} text-3xl transition group-hover:rotate-[-6deg] group-hover:scale-105`}
            >
              <span aria-hidden className="relative z-10">
                {app.icon}
              </span>
            </div>
            <StatusPills app={app} />
          </div>

          <h3 className="mt-5 text-2xl font-bold tracking-tight text-foreground">
            {app.name}
          </h3>
          <p className="mt-2 text-[15px] leading-relaxed text-muted">
            {app.description}
          </p>

          <div className="mt-auto flex items-center justify-between gap-3 pt-6">
            <span className="truncate font-mono text-xs text-pink-400">
              {hostFor(app)}
            </span>
            {isLinkable && (
              <span className="gloss-btn inline-flex shrink-0 items-center gap-1 rounded-full px-3.5 py-1.5 text-xs font-bold">
                Open
                <span
                  aria-hidden
                  className="transition group-hover:translate-x-0.5"
                >
                  ↗
                </span>
              </span>
            )}
          </div>
        </div>
      </Tag>
    </li>
  );
}

function AppCard({ app, index }: { app: ClaudeApp; index: number }) {
  const { isLinkable, Tag, linkProps } = cardLink(app);

  return (
    <li
      className="fade-up min-w-0"
      style={{ animationDelay: `${150 + index * 70}ms` }}
    >
      <Tag
        {...linkProps}
        className={`y2k-card group flex h-full flex-col rounded-2xl p-5 ${
          isLinkable ? "" : "opacity-80"
        }`}
      >
        <div className="flex items-center gap-4">
          <div
            className={`gloss-bubble flex size-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${app.accent} text-2xl transition group-hover:rotate-[-8deg]`}
          >
            <span aria-hidden className="relative z-10">
              {app.icon}
            </span>
          </div>
          <div className="min-w-0">
            <h3 className="truncate text-lg font-bold tracking-tight">
              {app.name}
            </h3>
            <StatusPills app={app} />
          </div>
        </div>

        <p className="mt-4 mb-5 text-sm leading-relaxed text-muted">
          {app.description}
        </p>

        <div className="mt-auto flex items-center justify-between gap-3 border-t-2 border-dotted border-pink-200 pt-4 font-mono text-xs text-pink-400">
          <span className="truncate">{hostFor(app)}</span>
          {isLinkable && (
            <span
              aria-hidden
              className="text-base text-pink-400 transition group-hover:translate-x-0.5 group-hover:text-hot"
            >
              ↗
            </span>
          )}
        </div>
      </Tag>
    </li>
  );
}

function ProfileCard() {
  const shipped = apps.filter((app) => app.shipped).length;
  const rows: [string, string][] = [
    ["Mood", "shipping ✨"],
    ["Apps built", String(apps.length)],
    ["Shipped", `${shipped} to the App Store & web`],
    ["Stack", "Claude · Next.js · SwiftUI"],
    ["Here for", "building intelligent things"],
  ];

  return (
    <aside
      className="fade-up relative mx-auto w-full max-w-sm lg:mx-0 lg:justify-self-end"
      style={{ animationDelay: "120ms" }}
    >
      <Sparkle
        size={34}
        className="absolute -top-4 -right-3 z-10 rotate-12"
        color="#c9a7ff"
      />
      <div className="y2k-card overflow-hidden rounded-3xl">
        <div className="title-bar flex items-center justify-between px-4 py-2">
          <span className="pixel-badge text-sm text-hot">jenny.profile</span>
          <span aria-hidden className="flex gap-1.5">
            <span className="size-3 rounded-full bg-white/80 ring-1 ring-pink-300" />
            <span className="size-3 rounded-full bg-white/80 ring-1 ring-pink-300" />
            <span className="size-3 rounded-full bg-pink-500 ring-1 ring-pink-600" />
          </span>
        </div>
        <div className="p-5">
          <div className="flex items-center gap-4">
            <div className="gloss-bubble flex size-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-300 via-pink-400 to-fuchsia-500 text-3xl">
              <span aria-hidden className="relative z-10">
                💖
              </span>
            </div>
            <div>
              <p className="text-lg font-bold leading-tight">Jenny Speelman</p>
              <p className="pixel-badge mt-1 text-sm text-pink-500">
                ★ welcome 2 my apps!! ★
              </p>
            </div>
          </div>
          <dl className="mt-5 divide-y-2 divide-dotted divide-pink-100 rounded-2xl bg-pink-50/70 px-4 text-sm ring-1 ring-pink-100">
            {rows.map(([label, value]) => (
              <div key={label} className="flex justify-between gap-4 py-2.5">
                <dt className="font-semibold text-hot">{label}</dt>
                <dd className="text-right text-muted">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </aside>
  );
}

function SectionHeading({
  children,
  aside,
}: {
  children: React.ReactNode;
  aside: React.ReactNode;
}) {
  return (
    <div className="flex items-end justify-between gap-4">
      <h2 className="flex items-center gap-2 text-3xl font-bold tracking-tight sm:text-4xl">
        <Sparkle size={22} />
        {children}
      </h2>
      <span className="pixel-badge shrink-0 rounded-md bg-white px-2.5 py-1 text-sm text-hot ring-2 ring-pink-200">
        {aside}
      </span>
    </div>
  );
}

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <main className="relative flex-1 overflow-hidden">
      {/* background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="glow glow-1" />
        <div className="glow glow-2" />
        <div className="glow glow-3" />
        <div className="absolute inset-0 dot-grid" />
        <Sparkle
          className="sparkle"
          size={28}
          style={{ top: "9rem", left: "6%" }}
        />
        <Sparkle
          className="sparkle"
          size={16}
          color="#c9a7ff"
          style={{ top: "15rem", left: "44%", animationDelay: "1.1s" }}
        />
        <Sparkle
          className="sparkle"
          size={36}
          color="#ff8cc6"
          style={{ top: "7rem", right: "8%", animationDelay: "0.5s" }}
        />
        <Sparkle
          className="sparkle"
          size={18}
          style={{ top: "26rem", right: "18%", animationDelay: "1.8s" }}
        />
        <Sparkle
          className="sparkle"
          size={22}
          color="#c9a7ff"
          style={{ top: "60%", left: "3%", animationDelay: "2.3s" }}
        />
      </div>

      {/* ticker */}
      <div className="border-b-2 border-pink-300 bg-gradient-to-r from-pink-500 via-hot to-pink-500 py-1.5 text-white">
        <div className="overflow-hidden">
          <p className="sr-only">{tickerItems.join(" · ")}</p>
          <div className="marquee-track pixel-badge text-sm" aria-hidden>
            {[0, 1].map((copy) => (
              <div key={copy} className="flex shrink-0">
                {tickerItems.map((item) => (
                  <span key={item} className="px-6 whitespace-nowrap">
                    {item}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 pt-14 pb-20 sm:px-6 sm:pt-20">
        {/* hero */}
        <div className="grid items-center gap-12 lg:grid-cols-[1.5fr_1fr]">
          <header className="fade-up" style={{ animationDelay: "0ms" }}>
            <div className="flex flex-wrap items-center gap-2">
              <span className="pixel-badge inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm text-hot ring-2 ring-pink-200">
                <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_8px_2px_rgba(52,211,153,0.55)]" />
                Online Now!
              </span>
              <span className="pixel-badge rounded-full bg-white/70 px-3 py-1 text-sm text-muted ring-2 ring-pink-100">
                *.jennyspeelman.dev
              </span>
            </div>

            <h1 className="mt-7 text-balance text-5xl font-black leading-[0.95] tracking-tight sm:text-7xl">
              <span className="chrome-text sm:whitespace-nowrap">
                Jenny&apos;s apps,
              </span>
              <br />
              <span className="font-serif text-[1.08em] font-normal italic tracking-normal text-foreground">
                built with AI
              </span>
              <Sparkle
                size={40}
                className="ml-2 inline-block align-top"
                color="#ff4fa3"
              />
            </h1>

            <p className="mt-6 max-w-xl text-pretty text-lg text-muted sm:text-xl">
              A playground for the things I prompt into existence. Native apps,
              web tools, and little experiments, mostly made with Claude.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm">
              <a
                href="https://jennyplunkett.me"
                target="_blank"
                rel="noopener noreferrer"
                className="gloss-btn inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-bold transition hover:brightness-105"
              >
                Visit my portfolio
                <span aria-hidden>→</span>
              </a>
              <a
                href="https://github.com/yennster"
                target="_blank"
                rel="noopener noreferrer"
                className="gloss-btn-light inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-bold transition hover:brightness-[1.03]"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/jennyplunkett/"
                target="_blank"
                rel="noopener noreferrer"
                className="gloss-btn-light inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-bold transition hover:brightness-[1.03]"
              >
                LinkedIn
              </a>
            </div>
          </header>

          <ProfileCard />
        </div>

        {/* featured */}
        {featuredApps.length > 0 && (
          <section className="mt-20 sm:mt-24">
            <SectionHeading aside="hand-picked ♥">Featured</SectionHeading>
            <ul className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredApps.map((app, i) => (
                <FeaturedCard key={app.slug} app={app} index={i} />
              ))}
            </ul>
          </section>
        )}

        {/* everything else */}
        <section className="mt-20">
          <SectionHeading
            aside={`${apps.length} ${apps.length === 1 ? "project" : "projects"}`}
          >
            More apps
          </SectionHeading>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {otherApps.map((app, i) => (
              <AppCard key={app.slug} app={app} index={i} />
            ))}
          </ul>
        </section>

        {/* footer */}
        <footer className="mt-24 rounded-3xl border-2 border-pink-200 bg-white/70 p-6 backdrop-blur sm:p-8">
          <div className="flex flex-wrap gap-2">
            {webBadges.map((badge) => (
              <span
                key={badge.label}
                className={`pixel-badge rounded-sm px-2.5 py-1 text-xs ring-2 ring-pink-300 shadow-[2px_2px_0_#f9a8d4] ${badge.tone}`}
              >
                {badge.label}
              </span>
            ))}
          </div>
          <div className="mt-6 flex flex-col items-start justify-between gap-3 text-sm text-muted sm:flex-row sm:items-center">
            <p>
              Made with <span className="text-pink-500">♥</span> and AI by{" "}
              <a
                href="https://jennyplunkett.me"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-hot underline decoration-pink-300 decoration-2 underline-offset-4 transition hover:decoration-hot"
              >
                Jenny Speelman
              </a>
            </p>
            <p className="pixel-badge text-sm text-pink-400">
              © {year} ✦ jennyspeelman.dev
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
