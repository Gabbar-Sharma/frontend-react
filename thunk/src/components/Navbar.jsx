import { useState } from "react";
import { Link, NavLink } from "react-router";
import useAuth from "../features/auth/hooks/authHook";

function Navbar() {
     const {logout} = useAuth()
  const [isOpen, setIsOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `relative text-sm font-medium transition-colors duration-200 ${
      isActive
        ? "text-indigo-600"
        : "text-gray-600 hover:text-indigo-600"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <nav>
        {/* ================= DESKTOP / MAIN NAV ================= */}
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">

          {/* Logo */}
          <Link
            to="/main/home"
            className="shrink-0 text-2xl font-bold tracking-tight text-gray-900"
          >
            Shop<span className="text-indigo-600">X</span>
          </Link>

          {/* Search */}
          <div className="hidden flex-1 md:block">
            <div className="relative mx-auto max-w-lg">
              <input
                type="search"
                placeholder="Search products..."
                className="h-10 w-full rounded-full border border-gray-200 bg-gray-50 pl-11 pr-4 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 hover:border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
              />

              <svg
                className="absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m21 21-4.35-4.35m2.35-5.65a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
                />
              </svg>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-7 md:flex">

            <NavLink
              to="/main/home"
              className={navLinkClass}
            >
              Home
            </NavLink>

            <NavLink
              to="/main/products"
              className={navLinkClass}
            >
              Products
            </NavLink>

            {/* Wishlist */}
            <Link
              to="/main/wishlist"
              className="group relative flex h-10 w-10 items-center justify-center rounded-full text-gray-600 transition hover:bg-gray-100 hover:text-indigo-600"
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

              <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[9px] font-bold text-white">
                2
              </span>
            </Link>

            {/* Cart */}
            <Link
              to="/main/cart"
              className="group relative flex h-10 w-10 items-center justify-center rounded-full text-gray-600 transition hover:bg-gray-100 hover:text-indigo-600"
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
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13 5.4 5M7 13l-2 2h13m-9 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm8 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
                />
              </svg>

              <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-indigo-600 text-[9px] font-bold text-white">
                3
              </span>
            </Link>

            {/* Account */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsAccountOpen(!isAccountOpen)}
                className="flex h-10 items-center gap-2 rounded-full px-3 text-gray-600 transition hover:bg-gray-100 hover:text-indigo-600"
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
                    d="M20 21a8 8 0 1 0-16 0m12-11a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
                  />
                </svg>

                <span className="text-sm font-medium">
                  Account
                </span>

                <svg
                  className={`h-4 w-4 transition-transform ${
                    isAccountOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m6 9 6 6 6-6"
                  />
                </svg>
              </button>

              {/* Account Dropdown */}
              {isAccountOpen && (
                <div className="absolute right-0 mt-3 w-52 overflow-hidden rounded-xl border border-gray-200 bg-white py-2 shadow-xl">
                  <Link
                    to="/main/account"
                    onClick={() => setIsAccountOpen(false)}
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                  >
                    My Account
                  </Link>

                  <Link
                    to="/main/orders"
                    onClick={() => setIsAccountOpen(false)}
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                  >
                    My Orders
                  </Link>

                  <div className="my-1 border-t border-gray-100" />

                  <button
                   onClick={logout}
                    type="button"
                    className="block w-full px-4 py-2.5 text-left text-sm text-red-500 hover:bg-red-50"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 md:hidden">

            {/* Mobile Cart */}
            <Link
              to="/main/cart"
              className="relative flex h-10 w-10 items-center justify-center rounded-full text-gray-700 hover:bg-gray-100"
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
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13 5.4 5M7 13l-2 2h13m-9 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm8 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
                />
              </svg>

              <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-indigo-600 text-[9px] font-bold text-white">
                3
              </span>
            </Link>

            {/* Hamburger */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full text-gray-700 transition hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              {isOpen ? (
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
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              ) : (
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
              )}
            </button>
          </div>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {isOpen && (
          <div className="border-t border-gray-100 bg-white px-4 pb-5 pt-4 md:hidden">

            {/* Mobile Search */}
            <div className="relative mb-4">
              <input
                type="search"
                placeholder="Search products..."
                className="h-11 w-full rounded-xl border border-gray-200 bg-gray-50 pl-11 pr-4 text-sm outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-100"
              />

              <svg
                className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m21 21-4.35-4.35m2.35-5.65a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
                />
              </svg>
            </div>

            {/* Mobile Links */}
            <div className="space-y-1">

              <NavLink
                to="/main/home"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block rounded-xl px-4 py-3 text-sm font-medium ${
                    isActive
                      ? "bg-indigo-50 text-indigo-600"
                      : "text-gray-700 hover:bg-gray-50"
                  }`
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/main/products"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block rounded-xl px-4 py-3 text-sm font-medium ${
                    isActive
                      ? "bg-indigo-50 text-indigo-600"
                      : "text-gray-700 hover:bg-gray-50"
                  }`
                }
              >
                Products
              </NavLink>

              <NavLink
                to="/main/wishlist"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block rounded-xl px-4 py-3 text-sm font-medium ${
                    isActive
                      ? "bg-indigo-50 text-indigo-600"
                      : "text-gray-700 hover:bg-gray-50"
                  }`
                }
              >
                Wishlist
              </NavLink>

              <NavLink
                to="/main/cart"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block rounded-xl px-4 py-3 text-sm font-medium ${
                    isActive
                      ? "bg-indigo-50 text-indigo-600"
                      : "text-gray-700 hover:bg-gray-50"
                  }`
                }
              >
                Cart
              </NavLink>

              <div className="my-2 border-t border-gray-100" />

              <Link
                to="/main/account"
                onClick={() => setIsOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                My Account
              </Link>

            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;