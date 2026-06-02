"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

const contactPhrases = [
  "full-stack web products",
  "MERN & Laravel systems",
  "eCommerce platforms",
  "your next project",
];

export function Contact() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = contactPhrases[phraseIndex];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          const next = current.slice(0, text.length + 1);
          setText(next);
          if (next === current) {
            setTimeout(() => setDeleting(true), 2000);
          }
        } else {
          const next = current.slice(0, text.length - 1);
          setText(next);
          if (next === "") {
            setDeleting(false);
            setPhraseIndex((i) => (i + 1) % contactPhrases.length);
          }
        }
      },
      deleting ? 40 : 80,
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, phraseIndex]);

  const links = [
    { label: "Email", href: `mailto:${profile.email}`, value: profile.email },
    { label: "Phone", href: `tel:${profile.phone.replace(/\s/g, "")}`, value: profile.phone },
    { label: "Location", href: "#", value: profile.location },
  ];

  return (
    <section id="contact" className="scroll-mt-24 border-t border-slate-800/60 py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading label="Contact" title="Let's Work Together" />

        <div className="card-surface mx-auto max-w-3xl p-8 text-center sm:p-12">
          <p className="text-xl text-slate-300 sm:text-2xl">
            Let&apos;s build{" "}
            <span className="font-medium text-blue-400">{text}</span>
            <span className="cursor-blink" />
          </p>
          <p className="mx-auto mt-4 max-w-lg text-sm text-slate-500">
            I&apos;m open to senior full-stack, MERN, and PHP/Laravel roles — remote,
            hybrid, or on-site. Reach out directly.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="card-surface block p-4 transition hover:border-blue-500/40"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                  {link.label}
                </p>
                <p className="mt-2 text-sm font-medium text-slate-200 break-all">
                  {link.value}
                </p>
              </a>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              Email Me
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="rounded-lg border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-blue-500/50"
            >
              Call Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
