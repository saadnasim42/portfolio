import { aboutCards, glance, profile } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-slate-800/60 py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          label="About"
          title="I ship full-stack products. End to end."
          description={profile.summary}
        />

        <div className="grid gap-10 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-2">
            {aboutCards.map((card) => (
              <div
                key={card.title}
                className="card-surface p-6 transition hover:border-blue-500/30"
              >
                <h3 className="font-display text-lg font-semibold text-white">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {card.body}
                </p>
              </div>
            ))}
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-500">
              At a glance
            </p>
            <div className="grid grid-cols-2 gap-3">
              {glance.map((item) => (
                <div
                  key={item.label}
                  className="card-surface p-4 text-center"
                >
                  <p className="font-display text-sm font-bold text-blue-400">
                    {item.label}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
