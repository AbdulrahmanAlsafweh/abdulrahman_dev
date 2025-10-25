export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-100 to-white text-center px-4">
      <h1 className="text-5xl font-extrabold mb-4">
        Hi, I'm <span className="text-blue-600">Abdulrahman Safweh</span>
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl">
        Full-stack developer passionate about building modern, scalable web
        applications and seamless user experiences.
      </p>
      <a
        href="#projects"
        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
      >
        View My Work
      </a>
    </section>
  );
}
