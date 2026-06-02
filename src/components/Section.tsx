type SectionProps = {
  id: string;
  label: string;
  title: string;
  children: React.ReactNode;
};

export function Section({ id, label, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-sm text-teal-400">{label}</p>
        <h2 className="font-display mt-2 text-3xl font-bold text-white sm:text-4xl">
          {title}
        </h2>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
