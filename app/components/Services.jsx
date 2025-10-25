const services = [
  {
    key: 'fullstack',
    title: 'Full‑Stack Website (from zero)',
    desc:
      'Design, build, and deploy complete apps end‑to‑end: frontend, backend, database, and CI/CD.',
    tags: ['Next.js', 'APIs', 'Auth', 'DB'],
  },
  {
    key: 'frontend',
    title: 'Frontend for Ready Backend',
    desc:
      'Craft a modern, fast UI that integrates with your existing backend (REST/GraphQL).',
    tags: ['React/Next', 'Integrations', 'UX'],
  },
  {
    key: 'rebuild',
    title: 'Website Rebuild & Modernization',
    desc:
      'Refresh outdated sites with new styling, accessibility, and performance (Core Web Vitals).',
    tags: ['Redesign', 'A11y', 'Performance'],
  },
  {
    key: 'ai',
    title: 'AI Automation Systems',
    desc:
      'Automate workflows using AI/LLMs for content, support, and data processing.',
    tags: ['LLMs', 'Workflows', 'Integrations'],
  },
];

function ServiceIcon({ type }) {
  const common = 'h-6 w-6';
  switch (type) {
    case 'fullstack':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <path d="M3 5h18M3 12h18M3 19h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'frontend':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
          <path d="M8 21h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'rebuild':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <path d="M4 7h16M4 12h10M4 17h7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M17 16l3 3m0-3l-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'ai':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={common}>
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Services() {
  return (
    <section id="services" className="bg-background py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold tracking-wide text-primary uppercase">What I Offer</p>
          <h2 className="text-3xl font-bold mt-2">Services</h2>
          <p className="text-muted mt-2">Flexible delivery: from idea to production, or UI on top of your existing backend.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((s) => (
            <article
              key={s.key}
              className="group rounded-xl border border-border bg-surface p-6 shadow-sm hover:shadow-lg transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3">
                <div className="grid place-items-center h-10 w-10 rounded-lg bg-primary/10 text-primary">
                  <ServiceIcon type={s.key} />
                </div>
                <h3 className="font-semibold text-lg">{s.title}</h3>
              </div>

              <p className="mt-3 text-sm text-muted leading-relaxed">{s.desc}</p>

              {s.tags?.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="inline-flex items-center rounded-full bg-accent text-foreground/80 px-2.5 py-1 text-xs font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-5 py-3 font-medium hover:opacity-90 transition">
            Let’s discuss your project
          </a>
        </div>
      </div>
    </section>
  );
}
