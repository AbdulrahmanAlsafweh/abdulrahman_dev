export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">About</p>
            <h2 className="mt-4 text-3xl font-semibold">
              A developer who understands both customers and operations.
            </h2>
            <p className="mt-5 text-muted">
              I'm Abdulrahman Safweh, a software developer based in Tripoli, Lebanon. I hold a BSc in
              Computer Science from the Lebanese International University (GPA 3.64, Dean's Honor Roll).
              My background spans backend development, IT systems, and full-stack web apps.
            </p>
            <p className="mt-4 text-muted">
              I partner with founders and teams to turn complex ideas into clear product experiences,
              delivering sites that look sharp and systems that run smoothly.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="rounded-2xl border border-border bg-surface/80 p-6 shadow-[0_14px_40px_-30px_rgba(15,23,42,0.45)]">
              <h3 className="text-lg font-semibold">What you get</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                <li>Clear project roadmap with transparent milestones.</li>
                <li>Conversion-focused UX and clean, maintainable code.</li>
                <li>Automation-ready architecture for scale.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-accent/70 p-6">
              <h3 className="text-lg font-semibold">Core expertise</h3>
              <p className="mt-3 text-sm text-muted">
                Next.js, React, Flutter, PHP (CodeIgniter 4), REST APIs, and MySQL.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
