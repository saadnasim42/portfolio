import { profile } from "@/data/portfolio";
import { Section } from "./Section";

export function Contact() {
  return (
    <Section id="contact" label="Connect" title="Let's work together">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-zinc-400">
          Open to full-time roles, contract work, and interesting product builds.
          Reach out and I&apos;ll get back to you soon.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold text-[#0c0f14] transition hover:bg-teal-400"
          >
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            className="rounded-full border border-white/20 px-6 py-3 text-sm text-zinc-300 transition hover:border-teal-400/50 hover:text-teal-400"
          >
            {profile.phone}
          </a>
        </div>
      </div>
    </Section>
  );
}
