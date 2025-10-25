const projects = [
  {
    title: "Bazaarica CRM",
    desc: "CRM built with CodeIgniter 4 integrated with WordPress & shipping APIs.",
    image: "/window.svg",
    tags: ["CodeIgniter 4", "WordPress", "APIs"],
  },
  {
    title: "Golden Tiger Logistics Map",
    desc: "Interactive logistics map for 120+ drivers.",
    image: "/window.svg",
    tags: ["Maps", "Realtime", "Operations"],
  },
  {
    title: "AI Image Enhancement",
    desc: "Built with Hugging Face + Next.js during Navybits internship.",
    image: "/window.svg",
    tags: ["AI", "Next.js", "Hugging Face"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
      <div className="text-center mb-10">
        <p className="text-sm font-semibold tracking-wide text-primary uppercase">
          Selected Work
        </p>
        <h2 className="text-3xl font-bold mt-2">Projects</h2>
        <p className="text-muted mt-2">A few highlights I’ve built recently</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group rounded-2xl border border-border bg-surface shadow-sm hover:shadow-lg transition-transform duration-200 hover:-translate-y-1 overflow-hidden"
          >
            <div className="relative aspect-[16/10] bg-gradient-to-br from-blue-50 to-indigo-50 grid place-items-center">
              <img
                src={p.image}
                alt={p.title}
                className="h-16 w-16 opacity-80 group-hover:opacity-100 transition-opacity"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="p-5">
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="mt-2 text-muted text-sm leading-relaxed">{p.desc}</p>

              {p.tags?.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full bg-accent text-foreground/80 px-2.5 py-1 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
