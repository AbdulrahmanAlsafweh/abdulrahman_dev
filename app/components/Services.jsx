const services = [
  {
    title: "Full-Stack Web Development",
    desc: "From UI to backend APIs using React, Next.js, and PHP.",
  },
  {
    title: "API Integration & Automation",
    desc: "Connect services like Aramex, Naqel, and custom systems.",
  },
  {
    title: "Mobile Apps",
    desc: "Cross-platform Flutter apps with modern UI/UX.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-xl mb-2">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
