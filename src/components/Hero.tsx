import {
  heroBadges,
  profile,
  stats,
  targetingRoles,
  techStack,
  typingPhrases,
} from "@/data/portfolio";
import { TypingText } from "./TypingText";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-16">
      <div className="pointer-events-none absolute inset-0 grid-bg" />
      <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] glow-orb" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] glow-orb opacity-60" />

      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-16 lg:px-8 lg:pt-24">
        <div className="mb-8 flex flex-wrap gap-2">
          {heroBadges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-slate-700/80 bg-slate-900/60 px-3 py-1 text-xs font-medium text-slate-400"
            >
              {badge}
            </span>
          ))}
        </div>

        <p className="text-sm font-medium uppercase tracking-widest text-blue-400">
          {profile.title}
        </p>

        <h1 className="font-display mt-4 max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
          <span className="block text-slate-400 text-2xl sm:text-3xl font-semibold mb-2">
            Hi, I&apos;m
          </span>
          <span className="bg-gradient-to-r from-white via-blue-100 to-blue-400 bg-clip-text text-transparent">
            {profile.name}
          </span>
        </h1>

        <div className="mt-6 min-h-[2rem]">
          <TypingText phrases={typingPhrases} />
        </div>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
          {profile.tagline}
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-500"
          >
            View Projects
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-lg border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-blue-500/50 hover:text-white"
          >
            Let&apos;s Talk
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-slate-700 bg-slate-900/50 px-6 py-3 text-sm font-semibold text-slate-300 transition hover:border-slate-500"
          >
            Contact Me
          </a>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-slate-700/60 bg-slate-900/40 px-3 py-1.5 text-xs font-medium text-slate-400"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-16">
          <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-slate-500">
            By the numbers
          </p>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="card-surface p-5 text-center sm:text-left">
                <p className="font-display text-3xl font-bold text-blue-400">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm leading-snug text-slate-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-500">
            Targeting
          </p>
          <div className="flex flex-wrap gap-2">
            {targetingRoles.map((role) => (
              <span
                key={role}
                className="rounded-full border border-blue-500/20 bg-blue-500/5 px-3 py-1 text-xs text-blue-300/90"
              >
                {role}
              </span>
            ))}
          </div>
        </div>

        <p className="mt-10 text-sm text-slate-500">{profile.educationLine}</p>

        <div className="mt-16 flex justify-center">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-xs text-slate-500 transition hover:text-blue-400"
          >
            <span>Scroll</span>
            <span className="block h-8 w-px bg-gradient-to-b from-blue-500/50 to-transparent" />
          </a>
        </div>
      </div>
    </section>
  );
}
