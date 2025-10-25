export default function Contact() {
  return (
    <section id="contact" className="bg-blue-600 text-white py-20 text-center">
      <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
      <p className="mb-6">
        Reach me anytime at
        <a href="mailto:abdulrahmansafweh@gmail.com" className="underline">
          abdulrahmansafweh@gmail.com
        </a>
      </p>
      <a
        href="https://t.ly/8v7sM"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-blue-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
      >
        Connect on LinkedIn
      </a>
    </section>
  );
}
