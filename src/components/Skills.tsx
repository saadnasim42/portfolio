"use client";

import { useState } from "react";
import { skillCategories } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

const filters = [
  { id: "all", label: "All" },
  ...skillCategories.map((c) => ({ id: c.id, label: c.title })),
];

export function Skills() {
  const [active, setActive] = useState("all");

  const visible =
    active === "all"
      ? skillCategories
      : skillCategories.filter((c) => c.id === active);

  return (
    <section id="skills" className="scroll-mt-24 border-t border-slate-800/60 py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          label="Skills"
          title="Technical Toolkit"
          description="Languages, frameworks, tools, and platforms I use across the full stack."
        />

        <div className="mb-8 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setActive(f.id)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                active === f.id
                  ? "bg-blue-600 text-white"
                  : "border border-slate-700 text-slate-400 hover:border-slate-500 hover:text-white"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {visible.map((group) => (
            <div key={group.id} className="card-surface p-6">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                {group.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-slate-700/80 bg-slate-900/40 px-2.5 py-1 text-sm text-slate-300 transition hover:border-blue-500/40 hover:text-blue-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
