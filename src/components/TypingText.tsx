"use client";

import { useEffect, useState } from "react";

type TypingTextProps = {
  phrases: string[];
  prefix?: string;
};

export function TypingText({
  phrases,
  prefix = "I build ",
}: TypingTextProps) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];
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
            setPhraseIndex((i) => (i + 1) % phrases.length);
          }
        }
      },
      deleting ? 40 : 80,
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, phraseIndex, phrases]);

  return (
    <p className="text-lg text-slate-300 sm:text-xl">
      <span className="text-slate-400">{prefix}</span>
      <span className="font-medium text-blue-400">{text}</span>
      <span className="cursor-blink" />
    </p>
  );
}
