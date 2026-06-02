import { profile } from "@/data/portfolio";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" label="About me" title={profile.title}>
      <div className="grid gap-10 lg:grid-cols-2">
        <p className="text-lg leading-relaxed text-zinc-400">
          I&apos;m a senior full-stack developer specializing in the MERN stack and
          PHP/Laravel ecosystems. I design and ship production systems — from REST
          APIs and admin dashboards to multi-tenant SaaS and eCommerce — with a
          focus on clean architecture, performance, and maintainable code.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            "Healthcare & Education platforms",
            "E-Commerce & payment integrations",
            "Multi-tenant SaaS & enterprise workflows",
            "RL/AI tooling & benchmark platforms",
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4"
            >
              <span className="text-teal-400">→</span>
              <span className="text-sm text-zinc-300">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
