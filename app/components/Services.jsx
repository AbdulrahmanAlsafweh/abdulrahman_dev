const services = [
  {
    key: "ecommerce",
    title: "Ecommerce Websites",
    desc: "Conversion-first storefronts with product catalogs, carts, checkout, and order flows.",
    tags: ["Catalogs", "Checkout", "Operations"],
    steps: [
      "Requirements and product scope",
      "Figma UI/UX design",
      "Build, launch, and handoff",
    ],
  },
  {
    key: "portfolio",
    title: "Portfolio and Personal Sites",
    desc: "High-end personal sites that build authority and turn visitors into clients.",
    tags: ["Branding", "SEO", "Performance"],
    steps: [
      "Discovery and content plan",
      "Figma UI/UX design",
      "Build, launch, and optimize",
    ],
  },
  {
    key: "systems",
    title: "Business Systems",
    desc: "Dashboards, admin portals, and internal tools that keep teams aligned.",
    tags: ["Dashboards", "Workflows", "Access"],
    steps: [
      "Process mapping and requirements",
      "Wireframes and prototype",
      "Build, integrate, and train",
    ],
  },
  {
    key: "automation",
    title: "Automation and Integrations",
    desc: "Automate business processes with connected tools, reports, and data flows.",
    tags: ["Integrations", "Reporting", "Efficiency"],
    steps: [
      "Workflow audit and goals",
      "Automation design and testing",
      "Implementation and monitoring",
    ],
  },
];

function ServiceIcon({ type }) {
  const common = "h-6 w-6";
  switch (type) {
    case "ecommerce":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <path
            d="M6 6h15l-1.5 9H7.5L6 6Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M6 6H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <circle cx="9" cy="19" r="1.5" stroke="currentColor" strokeWidth="2" />
          <circle cx="17" cy="19" r="1.5" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case "portfolio":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
          <path
            d="M7 9h10M7 13h6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "systems":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <rect x="4" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2" />
          <rect x="13" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2" />
          <rect x="4" y="13" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2" />
          <rect x="13" y="13" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case "automation":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <path
            d="M4 12a8 8 0 0 1 13.66-5.66"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M20 12a8 8 0 0 1-13.66 5.66"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M17 5v4h-4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 19v-4h4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return null;
  }
}

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Services</p>
            <h2 className="mt-3 text-3xl font-semibold">Built for clients who want results.</h2>
          </div>
          <p className="text-sm text-muted sm:max-w-sm">
            Flexible delivery from discovery to launch, tailored to your team and timeline.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.key}
              className="group rounded-3xl border border-border bg-surface/85 p-6 shadow-[0_20px_50px_-35px_rgba(15,23,42,0.45)] transition hover:-translate-y-1"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <ServiceIcon type={service.key} />
                </div>
                <h3 className="text-lg font-semibold">{service.title}</h3>
              </div>

              <p className="mt-4 text-sm text-muted">{service.desc}</p>

              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                  Steps
                </p>
                <ol className="mt-3 space-y-2 text-sm text-foreground/80">
                  {service.steps.map((step, index) => (
                    <li key={step} className="flex items-start gap-2">
                      <span className="mt-1 grid h-5 w-5 place-items-center rounded-full border border-border bg-background text-[10px] font-semibold text-muted">
                        {index + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-semibold text-foreground/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-primary/40 bg-primary px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground shadow-[0_18px_40px_-28px_rgba(15,118,110,0.8)] transition hover:-translate-y-0.5 hover:bg-primary/90"
          >
            Plan a project call
          </a>
        </div>
      </div>
    </section>
  );
}
