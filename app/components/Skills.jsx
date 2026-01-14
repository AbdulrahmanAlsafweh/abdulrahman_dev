const skillGroups = [
  {
    title: "Frontend",
    items: ["Next.js", "React"],
  },
  {
    title: "Backend",
    items: ["PHP", "CodeIgniter 4", "REST APIs"],
  },
  {
    title: "Mobile",
    items: ["Flutter"],
  },
  {
    title: "Data",
    items: ["MySQL"],
  },
  {
    title: "Engineering",
    items: ["Git", "Python", "Java"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Tech Stack</p>
            <h2 className="mt-3 text-3xl font-semibold">Modern tools for fast, stable delivery.</h2>
          </div>
          <p className="text-sm text-muted sm:max-w-sm">
            A pragmatic stack that balances performance, maintainability, and reliable integrations.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <div
              key={group.title}
              data-reveal="fade-up"
              style={{ "--reveal-delay": `${index * 0.08}s` }}
              className="rounded-2xl border border-border bg-surface/80 p-5 shadow-[0_14px_40px_-30px_rgba(15,23,42,0.4)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                {group.title}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-semibold text-foreground/80"
                  >
                    {item}
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
