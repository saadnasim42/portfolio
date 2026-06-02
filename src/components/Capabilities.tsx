import { capabilities } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Capabilities() {
  return (
    <section className="border-t border-slate-800/60 py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          label="Capabilities"
          title="What I Build, and How."
          description="Concrete capabilities across every layer of the stack — with real project context behind each one."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="card-surface p-6 transition hover:border-blue-500/30"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-400/80">
                {cap.category}
              </p>
              <h3 className="font-display mt-2 text-lg font-bold text-white">
                {cap.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {cap.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm text-slate-400"
                  >
                    <span className="text-blue-500">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
