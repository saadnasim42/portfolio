import { profile } from "@/data/portfolio";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center pt-16">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <p className="mb-4 font-mono text-sm text-teal-400">
          Full Stack Developer · 5+ years
        </p>
        <h1 className="font-display max-w-4xl text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-teal-300 to-emerald-400 bg-clip-text text-transparent">
            {profile.name}
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-xl text-zinc-400">{profile.tagline}</p>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-500">
          {profile.summary}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold text-[#0c0f14] transition hover:bg-teal-400"
          >
            View my work
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-teal-400/50 hover:text-teal-400"
          >
            Get in touch
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {[
            { value: "5+", label: "Years experience" },
            { value: "6+", label: "Major projects" },
            { value: "MERN", label: "& PHP stack" },
            { value: "AWS", label: "Cloud ready" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-4"
            >
              <p className="font-display text-2xl font-bold text-teal-400">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-zinc-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
