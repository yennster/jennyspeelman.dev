import { apps, type AppStatus } from "@/lib/apps";

const statusLabel: Record<AppStatus, string> = {
  live: "Live",
  beta: "Beta",
  soon: "Coming soon",
};

const statusStyle: Record<AppStatus, string> = {
  live: "bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-400/30",
  beta: "bg-amber-500/10 text-amber-300 ring-1 ring-amber-400/30",
  soon: "bg-white/5 text-white/60 ring-1 ring-white/10",
};

export default function Home() {
  return (
    <main className="relative flex-1 overflow-hidden">
      {/* animated background */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
        <div className="absolute inset-0 grid-bg" />
      </div>

      <div className="mx-auto w-full max-w-5xl px-6 pt-20 pb-24 sm:pt-28">
        {/* header */}
        <header className="fade-up" style={{ animationDelay: "0ms" }}>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono text-white/70 backdrop-blur">
            <span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_2px_rgba(52,211,153,0.6)]" />
            *.jennyspeelman.dev
          </div>
          <h1 className="mt-6 text-balance text-5xl font-semibold tracking-tight sm:text-6xl">
            Jenny&apos;s apps,{" "}
            <span className="bg-gradient-to-r from-fuchsia-400 via-pink-400 to-cyan-300 bg-clip-text text-transparent">
              built with AI.
            </span>
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-lg text-white/65 sm:text-xl">
            A playground for the things I prompt into existence.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm">
            <a
              href="https://jennyplunkett.me"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white text-black px-4 py-2 font-medium transition hover:bg-white/90"
            >
              Visit my portfolio
              <span aria-hidden>→</span>
            </a>
            <a
              href="https://github.com/yennster"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 font-medium text-white/80 backdrop-blur transition hover:bg-white/10"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/jennyspeelman"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 font-medium text-white/80 backdrop-blur transition hover:bg-white/10"
            >
              LinkedIn
            </a>
          </div>
        </header>

        {/* apps grid */}
        <section className="mt-20">
          <div className="flex items-end justify-between">
            <h2 className="text-sm font-mono uppercase tracking-widest text-white/50">
              The apps
            </h2>
            <span className="text-sm font-mono text-white/40">
              {apps.length} {apps.length === 1 ? "project" : "projects"}
            </span>
          </div>

          <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {apps.map((app, i) => {
              const isLinkable = app.status !== "soon";
              const Tag = isLinkable ? "a" : "div";
              const linkProps = isLinkable
                ? {
                    href: app.url,
                    target: "_blank" as const,
                    rel: "noopener noreferrer",
                  }
                : {};

              return (
                <li
                  key={app.slug}
                  className="fade-up"
                  style={{ animationDelay: `${120 + i * 80}ms` }}
                >
                  <Tag
                    {...linkProps}
                    className={`group relative block h-full overflow-hidden rounded-2xl border border-white/10 bg-card/60 p-6 backdrop-blur transition ${
                      isLinkable
                        ? "hover:-translate-y-1 hover:border-white/20 hover:bg-card/80"
                        : "opacity-80"
                    }`}
                  >
                    <div
                      aria-hidden
                      className={`absolute -inset-px -z-10 rounded-2xl bg-gradient-to-br ${app.accent} opacity-0 blur-2xl transition group-hover:opacity-30`}
                    />
                    <div className="flex items-start justify-between gap-3">
                      <div
                        className={`flex size-11 items-center justify-center rounded-xl bg-gradient-to-br ${app.accent} text-xl shadow-lg shadow-black/40`}
                      >
                        <span aria-hidden>{app.icon}</span>
                      </div>
                      <div className="flex flex-wrap justify-end gap-1.5">
                        <span
                          className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${statusStyle[app.status]}`}
                        >
                          {statusLabel[app.status]}
                        </span>
                        {app.inDevelopment && (
                          <span className="rounded-full px-2.5 py-1 text-[11px] font-medium bg-pink-500/10 text-pink-300 ring-1 ring-pink-400/30">
                            In development
                          </span>
                        )}
                      </div>
                    </div>

                    <h3 className="mt-5 text-lg font-semibold tracking-tight">
                      {app.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">
                      {app.description}
                    </p>

                    <div className="mt-5 flex items-center justify-between text-xs font-mono text-white/40">
                      <span>{app.slug}.jennyspeelman.dev</span>
                      {isLinkable && (
                        <span
                          aria-hidden
                          className="transition group-hover:translate-x-0.5 group-hover:text-white/70"
                        >
                          ↗
                        </span>
                      )}
                    </div>
                  </Tag>
                </li>
              );
            })}
          </ul>
        </section>

        {/* footer */}
        <footer className="mt-24 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-8 text-sm text-white/40 sm:flex-row sm:items-center">
          <p>
            Made by{" "}
            <a
              href="https://jennyplunkett.me"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 underline-offset-4 transition hover:text-white hover:underline"
            >
              Jenny Speelman
            </a>{" "}
            with AI
          </p>
          <p className="font-mono text-xs">© {new Date().getFullYear()}</p>
        </footer>
      </div>
    </main>
  );
}
