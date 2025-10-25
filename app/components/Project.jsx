const projects = [
  {
    title: "Bazaarica CRM",
    desc: "CRM built with CodeIgniter 4 integrated with WordPress & shipping APIs.",
    image: "/sample-project.jpg",
  },
  {
    title: "Golden Tiger Logistics Map",
    desc: "Interactive logistics map for 120+ drivers.",
    image: "/sample-project.jpg",
  },
  {
    title: "AI Image Enhancement",
    desc: "Built with Hugging Face + Next.js during Navybits internship.",
    image: "/sample-project.jpg",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p) => (
          <div
            key={p.title}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:-translate-y-1 transition"
          >
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
              <p className="text-gray-600 text-sm">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
