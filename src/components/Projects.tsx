"use client";

import { useState } from "react";
import { projects, type Project } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

const filters = [
  { id: "all", label: "All" },
  { id: "fullstack", label: "Full Stack" },
  { id: "ecommerce", label: "eCommerce" },
  { id: "saas", label: "SaaS" },
  { id: "enterprise", label: "Enterprise" },
];

function ProjectCard({
  project,
  large,
}: {
  project: Project;
  large?: boolean;
}) {
  return (
    <article
      className={`card-surface flex flex-col p-6 transition hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5 ${
        large ? "lg:col-span-2" : ""
      } ${project.featured ? "ring-1 ring-blue-500/30" : ""}`}
    >
      {project.featured && (
        <span className="mb-3 inline-flex w-fit rounded-full bg-blue-500/15 px-3 py-0.5 text-xs font-semibold text-blue-400">
          ★ Featured Project
        </span>
      )}
      <div className="mb-2 flex flex-wrap gap-2">
        {project.stack.slice(0, 4).map((t) => (
          <span
            key={t}
            className="rounded text-xs font-medium uppercase tracking-wide text-slate-500"
          >
            {t}
          </span>
        ))}
      </div>
      <h3 className="font-display text-xl font-bold text-white">{project.name}</h3>
      <p className="mt-1 text-sm font-medium text-blue-400/90">{project.subtitle}</p>
      <p className="mt-3 text-sm leading-relaxed text-slate-400">
        {project.description}
      </p>
      <ul className="mt-4 flex-1 space-y-2">
        {project.bullets.map((b) => (
          <li
            key={b.slice(0, 50)}
            className="flex gap-2 text-sm text-slate-500"
          >
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-blue-500" />
            {b}
          </li>
        ))}
      </ul>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-slate-700/60 px-2 py-0.5 text-xs text-slate-400"
          >
            {tech}
          </span>
        ))}
      </div>
      {project.metrics && (
        <div className="mt-6 grid grid-cols-2 gap-3 border-t border-slate-800 pt-4 sm:grid-cols-4">
          {project.metrics.map((m) => (
            <div key={m.label} className="text-center">
              <p className="font-display text-lg font-bold text-blue-400">
                {m.value}
              </p>
              <p className="text-xs text-slate-500">{m.label}</p>
            </div>
          ))}
        </div>
      )}
    </article>
  );
}

export function Projects() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? projects
      : projects.filter((p) => p.category === active);

  const featured = filtered.find((p) => p.featured);
  const rest = featured
    ? filtered.filter((p) => !p.featured)
    : filtered;

  return (
    <section id="projects" className="scroll-mt-24 border-t border-slate-800/60 py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          label="Projects"
          title="Things I've Shipped"
          description="Real architectures solving real problems across eCommerce, SaaS, and enterprise operations."
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

        {filtered.length === 0 ? (
          <p className="text-center text-slate-500">No projects in this category.</p>
        ) : (
          <div className="grid gap-6 lg:grid-cols-2">
            {featured && <ProjectCard project={featured} large />}
            {rest.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
