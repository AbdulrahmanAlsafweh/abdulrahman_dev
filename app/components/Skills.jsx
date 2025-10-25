const skills = [
  "Next.js",
  "React",
  "Flutter",
  "PHP",
  "CodeIgniter 4",
  "MySQL",
  "Python",
  "Java",
  "Git",
  "REST APIs",
];

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-100 py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {skills.map((s) => (
            <div
              key={s}
              className="bg-white shadow rounded-lg p-4 text-center hover:shadow-md transition"
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
