import { FaLinkedinIn, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="bg-primary text-primary-foreground py-20 text-center">
      <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
      <p>
        Reach me anytime at
        <a href="mailto:abdulrahmansafweh@gmail.com" className="underline">
          {' '}abdulrahmansafweh@gmail.com
        </a>
      </p>
      <p className="mt-1">
        Or on WhatsApp:
        <a
          href="https://wa.me/96181309837"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
          title="WhatsApp +961 81 309 837"
        >
          {' '}+961 81 309 837
        </a>
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <a
          href="https://t.ly/8v7sM"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="inline-flex items-center gap-2 rounded-lg bg-surface text-primary px-5 py-3 font-medium transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 border border-border shadow-sm hover:shadow-md"
        >
          <FaLinkedinIn aria-hidden className="shrink-0" size={18} />
          LinkedIn
        </a>

        <a
          href="https://www.instagram.com/abdulrahman.dev/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="inline-flex items-center gap-2 rounded-lg bg-surface text-primary px-5 py-3 font-medium transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 border border-border shadow-sm hover:shadow-md"
        >
          <FaInstagram aria-hidden className="shrink-0" size={18} />
          Instagram
        </a>

        <a
          href="https://wa.me/96181309837"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="inline-flex items-center gap-2 rounded-lg bg-surface text-primary px-5 py-3 font-medium transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 border border-border shadow-sm hover:shadow-md"
          title="WhatsApp +961 81 309 837"
        >
          <FaWhatsapp aria-hidden className="shrink-0" size={18} />
          WhatsApp
        </a>
      </div>
    </section>
  );
}
