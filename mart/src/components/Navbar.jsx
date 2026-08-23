import {NavLink} from 'react-router'
function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between">

          {/* ================= Logo ================= */}
          <div className="shrink-0">
            <NavLink
              to="/"
              className="text-2xl font-extrabold tracking-tight text-gray-950"
            >
              Shop<span className="text-blue-600">X</span>
            </NavLink>
          </div>

          {/* ================= Desktop Navigation ================= */}
          <div className="hidden items-center gap-8 md:flex">
            <NavLink
              to="home"
              className="relative py-2 text-sm font-semibold text-gray-950 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-blue-600"
            >
              Home
            </NavLink>

            <NavLink
              to="shop"
              className="py-2 text-sm font-medium text-gray-600 transition-colors hover:text-gray-950"
            >
              Shop
            </NavLink>

            <NavLink
              to="categories"
              className="py-2 text-sm font-medium text-gray-600 transition-colors hover:text-gray-950"
            >
              Categories
            </NavLink>

            <NavLink
              to="deals"
              className="py-2 text-sm font-medium text-gray-600 transition-colors hover:text-gray-950"
            >
              Deals
            </NavLink>
          </div>

          {/* ================= Right Actions ================= */}
          <div className="flex items-center gap-1 sm:gap-2">

            {/* Search */}
            <button
              type="button"
              aria-label="Search"
              className="flex h-10 w-10 items-center justify-center rounded-full text-gray-600 transition hover:bg-gray-100 hover:text-gray-950"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.8"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-4.35-4.35m2.1-5.4a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z"
                />
              </svg>
            </button>

            {/* Wishlist */}
            <button
              type="button"
              aria-label="Wishlist"
              className="hidden h-10 w-10 items-center justify-center rounded-full text-gray-600 transition hover:bg-gray-100 hover:text-gray-950 sm:flex"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.8"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z"
                />
              </svg>
            </button>

            {/* Cart */}
            <button
              type="button"
              aria-label="Shopping cart"
              className="relative flex h-10 w-10 items-center justify-center rounded-full text-gray-600 transition hover:bg-gray-100 hover:text-gray-950"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.8"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.836L5.7 6.75m0 0h13.65a1.5 1.5 0 0 1 1.46 1.846l-1.2 5.25a1.5 1.5 0 0 1-1.46 1.154H8.25a1.5 1.5 0 0 1-1.46-1.154L5.7 6.75Zm2.55 10.5a1.5 1.5 0 1 0 3 0m5.25 0a1.5 1.5 0 1 0 3 0"
                />
              </svg>

              {/* Static UI count */}
              <span className="absolute right-0 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-blue-600 px-1 text-[10px] font-bold text-white">
                0
              </span>
            </button>

            {/* Login */}
            <button
              type="button"
              className="ml-2 hidden rounded-xl bg-gray-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800 sm:block"
            >
              Login
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              aria-label="Open menu"
              className="ml-1 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition hover:bg-gray-200 md:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* ================= Mobile Menu UI ================= */}
        <div className="border-t border-gray-100 py-4 md:hidden">
          <div className="flex flex-col gap-1">

            <NavLink
              to="home"
              className="rounded-xl bg-gray-100 px-4 py-3 text-sm font-semibold text-gray-950"
            >
              Home
            </NavLink>

            <NavLink
              to="shop"
              className="rounded-xl px-4 py-3 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-950"
            >
              Shop
            </NavLink>

            <NavLink
              to="categories"
              className="rounded-xl px-4 py-3 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-950"
            >
              Categories
            </NavLink>

            <NavLink
              to="deals"
              className="rounded-xl px-4 py-3 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-950"
            >
              Deals
            </NavLink>

            <button
              type="button"
              className="mt-2 w-full rounded-xl bg-gray-950 px-4 py-3 text-sm font-semibold text-white"
            >
              Login
            </button>

          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;