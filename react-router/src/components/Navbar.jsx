function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-bold tracking-tight text-gray-900"
        >
          <span className="text-indigo-600">&lt;</span>
          Yugant
          <span className="text-indigo-600">/&gt;</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          <a
            href="#home"
            className="rounded-lg bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-600"
          >
            Home
          </a>

          <a
            href="#about"
            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
          >
            About
          </a>

          <a
            href="#skills"
            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
          >
            Projects
          </a>

          <a
            href="#experience"
            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
          >
            Experience
          </a>

          <a
            href="#contact"
            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
          >
            Contact
          </a>
        </div>

        {/* Desktop Resume */}
        <a
          href="#"
          className="hidden rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-indigo-600 hover:shadow-lg md:block"
        >
          Resume
        </a>

        {/* Mobile Menu */}
        <details className="relative md:hidden">
          <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-lg text-gray-700 transition hover:bg-gray-100 [&::-webkit-details-marker]:hidden">
            {/* Hamburger */}
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </summary>

          {/* Mobile Dropdown */}
          <div className="absolute right-0 top-12 w-64 overflow-hidden rounded-xl border border-gray-200 bg-white p-2 shadow-xl">
            <a
              href="#home"
              className="block rounded-lg bg-indigo-50 px-4 py-3 text-sm font-semibold text-indigo-600"
            >
              Home
            </a>

            <a
              href="#about"
              className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
            >
              About
            </a>

            <a
              href="#skills"
              className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
            >
              Projects
            </a>

            <a
              href="#experience"
              className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
            >
              Experience
            </a>

            <a
              href="#contact"
              className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
            >
              Contact
            </a>

            <div className="my-2 border-t border-gray-100" />

            <a
              href="#"
              className="block rounded-lg bg-gray-900 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-indigo-600"
            >
              Download Resume
            </a>
          </div>
        </details>
      </div>
    </nav>
  );
}

export default Navbar;
