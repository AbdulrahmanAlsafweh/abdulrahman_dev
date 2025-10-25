export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <h1 className="font-bold text-xl">
          Abdulrahman<span className="text-blue-600">Safweh</span>
        </h1>
        <div className="space-x-6 text-sm font-medium">
          <a href="#about" className="hover:text-blue-600">
            About
          </a>
          <a href="#skills" className="hover:text-blue-600">
            Skills
          </a>
          <a href="#projects" className="hover:text-blue-600">
            Projects
          </a>
          <a href="#services" className="hover:text-blue-600">
            Services
          </a>
          <a href="#contact" className="hover:text-blue-600">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
