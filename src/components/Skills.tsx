import { education, skillGroups } from "@/data/portfolio";
import { Section } from "./Section";

export function Skills() {
  return (
    <>
      <Section id="skills" label="Expertise" title="Skills & tools">
        <div className="grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                {group.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 px-3 py-1 text-sm text-zinc-300 transition hover:border-teal-500/50 hover:text-teal-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-teal-500/10 to-violet-500/10 p-8">
            <p className="font-mono text-sm text-teal-400">Education</p>
            <h3 className="font-display mt-2 text-2xl font-bold text-white">
              {education.school}
            </h3>
            <p className="mt-1 text-zinc-400">{education.degree}</p>
          </div>
        </div>
      </section>
    </>
  );
}
