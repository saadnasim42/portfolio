import { profile } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-zinc-500 sm:flex-row">
        <p>
          © {year} {profile.name}. Built with Next.js.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="transition hover:text-teal-400"
        >
          {profile.email}
        </a>
      </div>
    </footer>
  );
}
