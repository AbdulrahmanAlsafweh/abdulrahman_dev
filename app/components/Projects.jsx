const projects = [
  {
    title: "Mariam Jewels",
    desc: "Live ecommerce storefront for a jewelry brand, focused on premium presentation and smooth shopping flows.",
    highlights: [
      "Luxury catalog experience",
      "Mobile-first product browsing",
      "Conversion-ready checkout journey",
    ],
    tags: ["Ecommerce", "Brand", "UX"],
    url: "https://mariamjewels.com/",
    image:
      "https://s0.wp.com/mshots/v1/https%3A%2F%2Fmariamjewels.com%2F?w=1200",
  },
  {
    title: "Lightwave Ltd",
    desc: "Corporate website for a business services company with a bilingual presentation and clear service narrative.",
    highlights: [
      "Arabic-first layout support",
      "Structured service storytelling",
      "Responsive desktop and mobile layout",
    ],
    tags: ["Corporate", "Bilingual", "UX"],
    url: "https://lightwaveltd.com/ar",
    image:
      "https://s0.wp.com/mshots/v1/https%3A%2F%2Flightwaveltd.com%2Far?w=1200",
  },
  {
    title: "Commerce Growth Platform",
    desc: "Custom storefront experience with product discovery, checkout, and order workflows built for conversion.",
    highlights: [
      "Flexible product catalog with filters",
      "Streamlined cart and checkout UX",
      "Operations-ready order management",
    ],
    tags: ["Customer UX", "Payments", "Operations"],
  },
  {
    title: "Portfolio Experience System",
    desc: "High-end personal website designed to attract clients, featuring fast performance and SEO foundations.",
    highlights: [
      "Responsive editorial layouts",
      "Optimized media delivery",
      "Search-ready structure",
    ],
    tags: ["Brand", "SEO", "Performance"],
  },
  {
    title: "Business Operations Hub",
    desc: "Internal dashboard for teams to manage approvals, tasks, and reporting in one reliable workspace.",
    highlights: [
      "Role-based access and permissions",
      "Automated reporting flows",
      "Scalable workflows for teams",
    ],
    tags: ["Dashboards", "Automation", "Integrations"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Selected Work</p>
            <h2 className="mt-3 text-3xl font-semibold">Projects built for real business goals.</h2>
          </div>
          <p className="text-sm text-muted sm:max-w-sm">
            A snapshot of the type of customer-ready experiences and internal systems I deliver.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {projects.filter((project) => project.url).map((project, index) => (
            <article
              key={project.title}
              data-reveal="fade-up"
              style={{ "--reveal-delay": `${index * 0.08}s` }}
              className="group rounded-3xl border border-border bg-surface/85 p-6 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.5)] transition hover:-translate-y-1"
            >
              {project.image ? (
                <a
                  href={project.url || "#"}
                  target={project.url ? "_blank" : undefined}
                  rel={project.url ? "noopener noreferrer" : undefined}
                  className="block overflow-hidden rounded-2xl border border-border bg-background/80"
                  aria-label={`${project.title} homepage`}
                >
                  <img
                    src={project.image}
                    alt={`${project.title} homepage`}
                    className="h-44 w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </a>
              ) : null}

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Case study</p>
              <h3 className="mt-5 text-2xl font-semibold">{project.title}</h3>
              <p className="mt-3 text-sm text-muted">{project.desc}</p>

              <ul className="mt-6 space-y-2 text-sm text-foreground/80">
                {project.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-semibold text-foreground/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center text-sm font-semibold text-secondary transition hover:text-secondary/80"
                >
                  Visit project
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
