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

const links = [
  { label: "Portfolio", href: "https://jennyplunkett.me" },
  { label: "GitHub", href: "https://github.com/yennster" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jennyplunkett/" },
];

function hostFor(app: ClaudeApp) {
  return app.displayHost ?? `${app.slug}.jennyspeelman.dev`;
}

function monogram(app: ClaudeApp) {
  return app.name.replace(/^EI /, "").charAt(0);
}

function linkProps(app: ClaudeApp) {
  return app.status === "soon"
    ? {}
    : { href: app.url, target: "_blank", rel: "noopener noreferrer" };
}

function AppIcon({ app, className }: { app: ClaudeApp; className: string }) {
  return (
    <div
      aria-hidden
      className={`app-icon flex shrink-0 items-center justify-center bg-gradient-to-br ${app.accent} font-display text-white ${className}`}
    >
      <span>{monogram(app)}</span>
    </div>
  );
}

function Meta({ app }: { app: ClaudeApp }) {
  return (
    <p className="flex flex-wrap items-center gap-x-2 text-[13px] text-muted">
      <span className="inline-flex items-center gap-1.5">
        <span
          className={`size-1.5 rounded-full ${
            app.status === "live" ? "bg-emerald-500" : "bg-amber-400"
          }`}
        />
        {statusLabel[app.status]}
      </span>
      {app.shipped && (
        <>
          <span aria-hidden>·</span>
          <span className="font-medium text-rose">Shipped</span>
        </>
      )}
      {app.inDevelopment && (
        <>
          <span aria-hidden>·</span>
          <span>In development</span>
        </>
      )}
    </p>
  );
}

function Sticker({ count }: { count: number }) {
  const points = Array.from({ length: 28 }, (_, i) => {
    const r = i % 2 === 0 ? 50 : 44;
    const a = (Math.PI * 2 * i) / 28;
    return `${(50 + r * Math.cos(a)).toFixed(2)},${(50 + r * Math.sin(a)).toFixed(2)}`;
  }).join(" ");

  return (
    <div className="relative size-28 rotate-[12deg]">
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 drop-shadow-[0_10px_18px_rgba(68,25,47,0.18)]"
      >
        <defs>
          <linearGradient id="foil" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ffd3e6" />
            <stop offset="0.35" stopColor="#e9dcff" />
            <stop offset="0.65" stopColor="#d4f0fd" />
            <stop offset="1" stopColor="#ffe1ee" />
          </linearGradient>
        </defs>
        <polygon
          points={points}
          fill="url(#foil)"
          stroke="#fff"
          strokeWidth="1.5"
        />
      </svg>
      <div className="relative flex h-full flex-col items-center justify-center text-center leading-none">
        <span className="font-display text-4xl text-foreground">{count}</span>
        <span className="font-display mt-1 text-sm italic text-rose">apps</span>
      </div>
    </div>
  );
}

function HomeScreen() {
  return (
    <ul className="grid grid-cols-3 gap-x-4 gap-y-6 rounded-[2.5rem] bg-white/55 p-7 shadow-[0_30px_60px_-34px_rgba(68,25,47,0.45)] ring-1 ring-white backdrop-blur-sm">
      {apps.map((app) => {
        const Tag = app.status === "soon" ? "div" : "a";
        return (
          <li key={app.slug}>
            <Tag
              {...linkProps(app)}
              className="group flex flex-col items-center gap-2"
            >
              <AppIcon
                app={app}
                className="size-16 text-3xl transition duration-300 group-hover:-translate-y-1"
              />
              <span className="w-full truncate text-center text-[11px] text-muted">
                {app.name.replace(/^EI /, "")}
              </span>
            </Tag>
          </li>
        );
      })}
    </ul>
  );
}

function FeaturedApp({ app, index }: { app: ClaudeApp; index: number }) {
  const Tag = app.status === "soon" ? "div" : "a";
  return (
    <li className="rise" style={{ animationDelay: `${200 + index * 90}ms` }}>
      <Tag
        {...linkProps(app)}
        className="group flex h-full flex-col rounded-[2rem] bg-paper p-7 ring-1 ring-line transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgba(68,25,47,0.4)] sm:p-8"
      >
        <AppIcon
          app={app}
          className="size-20 text-4xl transition duration-300 group-hover:-rotate-3"
        />
        <h3 className="font-display mt-7 text-3xl tracking-tight">
          {app.name}
        </h3>
        <div className="mt-2">
          <Meta app={app} />
        </div>
        <p className="mt-4 leading-relaxed text-muted">{app.description}</p>
        <p className="mt-auto pt-7 text-sm font-medium text-rose">
          <span className="border-b border-rose/30 pb-0.5 transition group-hover:border-rose">
            {hostFor(app)}
          </span>
        </p>
      </Tag>
    </li>
  );
}

function AppRow({ app }: { app: ClaudeApp }) {
  const Tag = app.status === "soon" ? "div" : "a";
  return (
    <li>
      <Tag
        {...linkProps(app)}
        className="group grid grid-cols-[auto_1fr] items-start gap-x-5 gap-y-3 py-7 sm:grid-cols-[auto_1fr_auto] sm:gap-x-6"
      >
        <AppIcon app={app} className="size-12 text-xl sm:size-14 sm:text-2xl" />
        <div className="min-w-0">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <h3 className="font-display text-2xl tracking-tight transition group-hover:text-rose">
              {app.name}
            </h3>
            <Meta app={app} />
          </div>
          <p className="mt-2 max-w-2xl leading-relaxed text-muted">
            {app.description}
          </p>
        </div>
        <span className="col-start-2 truncate text-sm sm:col-start-auto sm:pt-1 text-muted transition group-hover:text-rose sm:max-w-[15rem] sm:text-right">
          {hostFor(app)}
        </span>
      </Tag>
    </li>
  );
}

export default function Home() {
  return (
    <main className="flex-1">
      <div className="gingham border-b border-line">
        <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
          <nav className="flex items-center justify-between py-7">
            <span className="font-display text-lg italic">Jenny Speelman</span>
            <ul className="flex items-center gap-5 text-sm sm:gap-7">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted transition hover:text-rose"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <header className="grid items-center gap-16 pt-14 pb-20 sm:pt-20 sm:pb-28 lg:grid-cols-[1.25fr_1fr]">
            <div>
              <h1 className="font-display rise text-[3.75rem] leading-[0.95] tracking-[-0.03em] sm:text-8xl xl:text-[7.25rem]">
                Jenny&apos;s apps,
                <br />
                <span className="wonk italic text-rose">built with AI.</span>
              </h1>
              <p
                className="rise mt-8 max-w-md text-lg leading-relaxed text-muted sm:text-xl"
                style={{ animationDelay: "100ms" }}
              >
                A playground for the things I prompt into existence.
              </p>
            </div>
            <div
              className="rise relative mx-auto w-full max-w-sm"
              style={{ animationDelay: "200ms" }}
            >
              <HomeScreen />
              <div className="absolute -top-16 -right-14 hidden sm:block">
                <Sticker count={apps.length} />
              </div>
            </div>
          </header>
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
        {featuredApps.length > 0 && (
          <section className="pt-24">
            <h2 className="font-display text-4xl tracking-tight sm:text-5xl">
              Featured
            </h2>
            <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredApps.map((app, i) => (
                <FeaturedApp key={app.slug} app={app} index={i} />
              ))}
            </ul>
          </section>
        )}

        <section className="pt-28">
          <div className="flex items-baseline justify-between gap-4 border-b border-line pb-6">
            <h2 className="font-display text-4xl tracking-tight sm:text-5xl">
              More apps
            </h2>
            <span className="text-sm text-muted">
              {apps.length} {apps.length === 1 ? "project" : "projects"} in
              total
            </span>
          </div>
          <ul className="divide-y divide-line">
            {otherApps.map((app) => (
              <AppRow key={app.slug} app={app} />
            ))}
          </ul>
        </section>

        <footer className="mt-28 flex flex-col gap-6 border-t border-line py-12 sm:flex-row sm:items-end sm:justify-between">
          <p className="font-display max-w-sm text-2xl leading-snug">
            Made by{" "}
            <a
              href="https://jennyplunkett.me"
              target="_blank"
              rel="noopener noreferrer"
              className="italic text-rose underline decoration-rose/30 decoration-1 underline-offset-4 transition hover:decoration-rose"
            >
              Jenny Speelman
            </a>{" "}
            with AI.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-rose"
              >
                {link.label}
              </a>
            ))}
            <span>© {new Date().getFullYear()}</span>
          </div>
        </footer>
      </div>
    </main>
  );
}
