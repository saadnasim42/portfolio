import { experience } from "@/data/portfolio";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section id="experience" label="Career" title="Work experience">
      <div className="relative space-y-0">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-teal-500/50 to-transparent" />
        {experience.map((job) => (
          <article
            key={`${job.company}-${job.period}`}
            className="relative grid gap-4 pb-12 pl-10 md:grid-cols-[200px_1fr]"
          >
            <div className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-teal-400 bg-[#0c0f14]" />
            <div>
              <p className="font-mono text-sm text-teal-400/90">{job.period}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-teal-500/30">
              <h3 className="text-lg font-semibold text-white">{job.role}</h3>
              <p className="mt-1 text-teal-400">{job.company}</p>
              <ul className="mt-4 space-y-2">
                {job.highlights.map((item) => (
                  <li
                    key={item.slice(0, 40)}
                    className="flex gap-2 text-sm leading-relaxed text-zinc-400"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-teal-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
