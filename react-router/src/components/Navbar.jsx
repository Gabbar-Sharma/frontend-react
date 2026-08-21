import {NavLink} from 'react-router'


function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-xl font-bold tracking-tight text-gray-900"
        >
          <span className="text-indigo-600">&lt;</span>
          Gabbar
          <span className="text-indigo-600">/&gt;</span>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          <NavLink
            to="/"
            className="rounded-lg bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-600"
          >
            Home
          </NavLink>

          <NavLink
            to="/About"
            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
          >
            About
          </NavLink>

          <NavLink
            to="/Skills"
            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
          >
            Skills
          </NavLink>

          <NavLink
            to="/Projects"
            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
          >
            Projects
          </NavLink>

          <NavLink
            to="/Experience"
            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
          >
            Experience
          </NavLink>

          <NavLink
            to="/Contact"
            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
          >
            Contact
          </NavLink>
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

  <NavLink
    to="/"
    className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-600 transition hover:bg-indigo-50 hover:text-indigo-600"
  >
    Home
  </NavLink>

  <NavLink
    to="/about"
    className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-600 transition hover:bg-indigo-50 hover:text-indigo-600"
  >
    About
  </NavLink>

  <NavLink
    to="/skills"
    className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-600 transition hover:bg-indigo-50 hover:text-indigo-600"
  >
    Skills
  </NavLink>

  <NavLink
    to="/projects"
    className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-600 transition hover:bg-indigo-50 hover:text-indigo-600"
  >
    Projects
  </NavLink>

  <NavLink
    to="/experience"
    className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-600 transition hover:bg-indigo-50 hover:text-indigo-600"
  >
    Experience
  </NavLink>

  <NavLink
    to="/contact"
    className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-600 transition hover:bg-indigo-50 hover:text-indigo-600"
  >
    Contact
  </NavLink>

  <div className="my-2 border-t border-gray-100" />

  <a
    href="/resume.pdf"
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
