import { profile } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-center sm:flex-row sm:text-left lg:px-8">
        <div>
          <p className="font-display font-bold text-white">{profile.shortName}.</p>
          <p className="mt-1 text-sm text-slate-500">{profile.title}</p>
        </div>
        <p className="text-sm text-slate-600">
          © {year} {profile.name}. All rights reserved.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="text-sm text-slate-400 transition hover:text-blue-400"
        >
          {profile.email}
        </a>
      </div>
    </footer>
  );
}
