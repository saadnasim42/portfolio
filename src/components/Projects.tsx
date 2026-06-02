import { projects } from "@/data/portfolio";
import { Section } from "./Section";

export function Projects() {
  return (
    <Section id="projects" label="Portfolio" title="Selected projects">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.name}
            className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-teal-500/40 hover:shadow-lg hover:shadow-teal-500/5"
          >
            <h3 className="font-display text-xl font-semibold text-white group-hover:text-teal-400">
              {project.name}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-white/5 px-2 py-0.5 font-mono text-xs text-zinc-400"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-500">
              {project.description}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
