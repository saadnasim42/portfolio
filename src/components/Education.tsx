import { education } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Education() {
  return (
    <section className="border-t border-slate-800/60 py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading label="Education" title="Academic Foundation" />

        <div className="card-surface max-w-2xl p-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-400">
            Degree
          </p>
          <h3 className="font-display mt-2 text-2xl font-bold text-white">
            {education.degree}
          </h3>
          <p className="mt-2 text-lg text-slate-300">{education.school}</p>
          <p className="mt-4 text-sm text-slate-500">{education.location}</p>
        </div>
      </div>
    </section>
  );
}
