import { experience } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-t border-slate-800/60 py-24"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          label="Experience"
          title="Work History"
          description="5+ years of full-stack experience across product companies and consulting."
        />

        <div className="space-y-6">
          {experience.map((job) => (
            <article
              key={`${job.company}-${job.period}`}
              className="card-surface p-6 transition hover:border-blue-500/30"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold text-white">
                    {job.role}
                  </h3>
                  <p className="mt-1 font-medium text-blue-400">{job.company}</p>
                </div>
                <div className="text-sm text-slate-500 sm:text-right">
                  <p>{job.period}</p>
                  {job.location && <p>{job.location}</p>}
                </div>
              </div>
              <ul className="mt-5 space-y-2">
                {job.highlights.map((item) => (
                  <li
                    key={item.slice(0, 40)}
                    className="flex gap-2 text-sm leading-relaxed text-slate-400"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2 border-t border-slate-800 pt-4">
                {job.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-slate-700/60 px-2 py-0.5 text-xs text-slate-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
