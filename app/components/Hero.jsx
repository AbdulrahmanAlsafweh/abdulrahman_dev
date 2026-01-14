export default function Hero() {
  const focusAreas = [
    {
      title: "Ecommerce Websites",
      desc: "Product catalogs, cart, and checkout flows that convert.",
    },
    {
      title: "Portfolio Sites",
      desc: "Premium personal sites that win clients and show authority.",
    },
    {
      title: "Business Systems",
      desc: "Dashboards, portals, and tools that keep teams aligned.",
    },
    {
      title: "Automation",
      desc: "Streamline operations with integrations and smart workflows.",
    },
  ];

  const delivery = [
    {
      title: "Strategy + UX",
      desc: "Define scope, structure, and the customer journey.",
    },
    {
      title: "Build + QA",
      desc: "Fast, scalable code with performance and quality checks.",
    },
    {
      title: "Automation + Growth",
      desc: "Integrations, analytics, and ongoing optimization.",
    },
  ];

  return (
    <section className="relative overflow-hidden pt-32 pb-24 lg:pt-36">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]"
      />
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Available for client projects
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            I build customer-ready websites and business systems that look premium and perform fast.
          </h1>
          <p className="mt-6 text-lg text-muted">
            From ecommerce storefronts and portfolio sites to internal business tools and automation,
            I help teams launch digital experiences that grow revenue and save time.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5 hover:bg-primary/90"
            >
              Start a Project
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full border border-border bg-surface/70 px-6 py-3 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:bg-surface"
            >
              View Work
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {focusAreas.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-surface/80 p-4 shadow-[0_14px_40px_-30px_rgba(15,23,42,0.5)]"
              >
                <h3 className="text-sm font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="rounded-3xl border border-border bg-surface/90 p-8 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.6)]">
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Delivery plan</p>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                End-to-end
              </span>
            </div>
            <h2 className="mt-5 text-2xl font-semibold">Launch-ready, polished, and scalable.</h2>
            <p className="mt-3 text-sm text-muted">
              I combine product thinking with engineering discipline to deliver sites and systems that
              are beautiful, reliable, and built to grow.
            </p>

            <div className="mt-6 grid gap-3">
              {delivery.map((step) => (
                <div
                  key={step.title}
                  className="rounded-2xl border border-border bg-accent/60 px-4 py-3"
                >
                  <p className="text-sm font-semibold">{step.title}</p>
                  <p className="mt-1 text-xs text-muted">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-foreground p-4 text-background">
              <p className="text-xs uppercase tracking-[0.2em] text-background/70">Focus</p>
              <p className="mt-2 text-sm font-semibold">
                Ecommerce, portfolio, internal tools, and automation.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-surface/80 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-muted">Available</p>
              <p className="mt-2 text-sm font-semibold">
                Remote collaboration with clients worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
