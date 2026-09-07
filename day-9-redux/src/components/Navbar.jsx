import { useState } from "react";
import { NavLink } from "react-router";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <div className="flex-shrink-0">
          <h1 className="cursor-pointer text-2xl font-extrabold tracking-tight text-gray-900">
            Shop<span className="text-violet-600">X</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <NavLink to={"/main"} className="text-sm font-semibold text-violet-600">
            Home
          </NavLink>

          <NavLink to={"/main/shop"} className="text-sm font-medium text-gray-600 transition hover:text-violet-600">
            Shop
          </NavLink>

          <NavLink to={"/main/products"} className="text-sm font-medium text-gray-600 transition hover:text-violet-600">
            Products
          </NavLink>

          <NavLink to={"/main/about"} className="text-sm font-medium text-gray-600 transition hover:text-violet-600">
            About
          </NavLink>
        </div>

        {/* Search */}
        <div className="hidden lg:block">
          <div className="relative w-64">
            {/* Search Icon */}
            <svg
              className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m21 21-4.35-4.35m0 0A7.5 7.5 0 1 0 6.04 6.04a7.5 7.5 0 0 0 10.61 10.61Z"
              />
            </svg>

            <input
              type="text"
              placeholder="Search products..."
              className="h-10 w-full rounded-xl border border-gray-200 bg-gray-50 pl-9 pr-4 text-sm text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-100"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2 sm:gap-3">

          {/* Wishlist */}
          <NavLink to={"/main/wishlist"}
            className="hidden h-10 w-10 items-center justify-center rounded-xl text-gray-600 transition hover:bg-gray-100 hover:text-violet-600 sm:flex"
            aria-label="Wishlist"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z"
              />
            </svg>
          </NavLink>

          {/* Cart */}
          <NavLink to={"/main/cart"}
            className="relative flex h-10 w-10 items-center justify-center rounded-xl text-gray-600 transition hover:bg-gray-100 hover:text-violet-600"
            aria-label="Shopping cart"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
                d="M3 3h2l2.4 11.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 1.9-1.4L21 7H6"
              />
              <circle cx="10" cy="20" r="1" />
              <circle cx="18" cy="20" r="1" />
            </svg>

            {/* Cart Count */}
            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-violet-600 px-1 text-[10px] font-bold text-white">
              2
            </span>
          </NavLink>

          {/* Login */}
          <NavLink className="hidden rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-violet-700 hover:shadow-md sm:block">
            Login
          </NavLink>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-gray-700 transition hover:bg-gray-50 md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              /* X Icon */
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 6l12 12M18 6 6 18"
                />
              </svg>
            ) : (
              /* Hamburger Icon */
              <svg
                className="h-5 w-5"
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
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-gray-100 bg-white md:hidden">
          <div className="mx-auto max-w-7xl space-y-1 px-4 py-4 sm:px-6">

            {/* Mobile Search */}
            <div className="relative mb-4">
              <svg
                className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m21 21-4.35-4.35m0 0A7.5 7.5 0 1 0 6.04 6.04a7.5 7.5 0 0 0 10.61 10.61Z"
                />
              </svg>

              <input
                type="text"
                placeholder="Search products..."
                className="h-11 w-full rounded-xl border border-gray-200 bg-gray-50 pl-9 pr-4 text-sm outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
              />
            </div>

            {/* Links */}
            <button className="block w-full rounded-xl bg-violet-50 px-4 py-3 text-left text-sm font-semibold text-violet-600">
              Home
            </button>

            <button className="block w-full rounded-xl px-4 py-3 text-left text-sm font-medium text-gray-600 transition hover:bg-gray-50 hover:text-violet-600">
              Shop
            </button>

            <button className="block w-full rounded-xl px-4 py-3 text-left text-sm font-medium text-gray-600 transition hover:bg-gray-50 hover:text-violet-600">
              Products
            </button>

            <button className="block w-full rounded-xl px-4 py-3 text-left text-sm font-medium text-gray-600 transition hover:bg-gray-50 hover:text-violet-600">
              About
            </button>

            {/* Mobile Login */}
            <button className="mt-3 w-full rounded-xl bg-violet-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-violet-700">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;