import { FaEnvelope, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-foreground" aria-hidden />
      <div
        className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-primary/20 blur-[120px]"
        aria-hidden
      />
      <div
        className="absolute right-0 top-12 h-64 w-64 rounded-full bg-white/10 blur-[120px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-6 text-background">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-background/60">
              Contact
            </p>
            <h2 className="mt-4 text-3xl font-semibold">
              Let's build something your customers will love.
            </h2>
            <p className="mt-4 text-background/70">
              Share your idea, goals, and timeline. I will reply with a clear plan and the next steps
              for your ecommerce site, portfolio, business system, or automation workflow.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-background/60">
              <span className="rounded-full border border-white/20 px-3 py-1">Ecommerce</span>
              <span className="rounded-full border border-white/20 px-3 py-1">Portfolio</span>
              <span className="rounded-full border border-white/20 px-3 py-1">Systems</span>
              <span className="rounded-full border border-white/20 px-3 py-1">Automation</span>
            </div>
          </div>

          <div className="grid gap-4">
            <a
              href="mailto:abdulrahmansafweh@gmail.com"
              className="group flex items-center justify-between rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-sm font-semibold transition hover:bg-white/10"
            >
              <span className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground">
                  <FaEnvelope aria-hidden size={18} />
                </span>
                abdulrahmansafweh@gmail.com
              </span>
              <span className="text-background/60 transition group-hover:text-background">Email</span>
            </a>

            <a
              href="https://wa.me/96181309837"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-sm font-semibold transition hover:bg-white/10"
            >
              <span className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground">
                  <FaWhatsapp aria-hidden size={18} />
                </span>
                +961 81 309 837
              </span>
              <span className="text-background/60 transition group-hover:text-background">WhatsApp</span>
            </a>

            <div className="rounded-2xl border border-white/15 bg-white/5 p-5 text-sm text-background/70">
              <p className="font-semibold text-background">Based in Tripoli, Lebanon</p>
              <p className="mt-2">Remote-friendly for global clients and distributed teams.</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="https://t.ly/8v7sM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-background/70 transition hover:text-background"
                >
                  <FaLinkedinIn aria-hidden size={14} />
                  LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/abdulrahman.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-background/70 transition hover:text-background"
                >
                  <FaInstagram aria-hidden size={14} />
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
