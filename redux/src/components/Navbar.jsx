import { useState } from "react";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      {/* Top Offer Bar */}
      <div className="hidden bg-black px-4 py-2 text-center text-sm text-white sm:block">
        Free shipping on orders over ₹999
      </div>

      {/* Main Navbar */}
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 lg:hidden"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
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
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          {/* Logo */}
          <a
            href="/"
            className="shrink-0 text-2xl font-extrabold tracking-tight text-gray-900"
          >
            Shop<span className="text-indigo-600">X</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 lg:flex">

            {/* Categories */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                className="flex items-center gap-1 text-sm font-medium text-gray-700 transition hover:text-indigo-600"
              >
                Categories

                <svg
                  className={`h-4 w-4 transition-transform ${
                    isCategoryOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Category Dropdown */}
              {isCategoryOpen && (
                <div className="absolute left-0 top-10 w-64 rounded-xl border border-gray-200 bg-white p-3 shadow-xl">
                  {[
                    "Electronics",
                    "Men's Fashion",
                    "Women's Fashion",
                    "Home & Living",
                    "Beauty",
                    "Sports",
                    "Groceries",
                  ].map((category) => (
                    <a
                      key={category}
                      href="#"
                      className="block rounded-lg px-4 py-3 text-sm text-gray-700 transition hover:bg-gray-50 hover:text-indigo-600"
                    >
                      {category}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#"
              className="text-sm font-medium text-gray-700 transition hover:text-indigo-600"
            >
              New Arrivals
            </a>

            <a
              href="#"
              className="text-sm font-medium text-gray-700 transition hover:text-indigo-600"
            >
              Best Sellers
            </a>

            <a
              href="#"
              className="text-sm font-medium text-red-600 transition hover:text-red-700"
            >
              Offers
            </a>
          </div>

          {/* Search */}
          <div className="hidden max-w-xl flex-1 md:flex">
            <div className="relative w-full">
              <input
                type="search"
                placeholder="Search products..."
                className="w-full rounded-xl border border-gray-300 bg-gray-50 py-2.5 pl-11 pr-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
              />

              <svg
                className="absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m21 21-4.35-4.35m2.35-5.65a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
                />
              </svg>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-1 sm:gap-2">

            {/* Wishlist */}
            <button
              type="button"
              className="relative rounded-lg p-2 text-gray-700 transition hover:bg-gray-100 hover:text-red-500"
              aria-label="Wishlist"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z"
                />
              </svg>

              <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white">
                2
              </span>
            </button>

            {/* Account */}
            <div className="relative hidden sm:block">
              <button
                type="button"
                onClick={() => setIsAccountOpen(!isAccountOpen)}
                className="flex items-center gap-2 rounded-lg p-2 text-gray-700 transition hover:bg-gray-100"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M20 21a8 8 0 0 0-16 0M12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                  />
                </svg>

                <span className="hidden text-sm font-medium lg:block">
                  Account
                </span>
              </button>

              {isAccountOpen && (
                <div className="absolute right-0 top-12 w-52 rounded-xl border border-gray-200 bg-white p-3 shadow-xl">
                  <div className="border-b border-gray-100 px-3 pb-3">
                    <p className="text-sm font-semibold text-gray-900">
                      Welcome!
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                      Sign in to access your account
                    </p>
                  </div>

                  <a
                    href="#"
                    className="mt-2 block rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    Sign In
                  </a>

                  <a
                    href="#"
                    className="block rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    My Orders
                  </a>

                  <a
                    href="#"
                    className="block rounded-lg px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    Profile
                  </a>
                </div>
              )}
            </div>

            {/* Cart */}
            <button
              type="button"
              className="relative rounded-lg p-2 text-gray-700 transition hover:bg-gray-100 hover:text-indigo-600"
              aria-label="Shopping cart"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M3 3h2l2.4 11.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 1.9-1.4L21 7H6M10 20a1 1 0 1 1-2 0m11 0a1 1 0 1 1-2 0"
                />
              </svg>

              <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-indigo-600 px-1 text-[10px] font-bold text-white">
                3
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="pb-3 md:hidden">
          <div className="relative">
            <input
              type="search"
              placeholder="Search products..."
              className="w-full rounded-xl border border-gray-300 bg-gray-50 py-2.5 pl-11 pr-4 text-sm outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
            />

            <svg
              className="absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m21 21-4.35-4.35m2.35-5.65a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
              />
            </svg>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="border-t border-gray-100 py-4 lg:hidden">
            <div className="space-y-1">

              <a
                href="#"
                className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Categories
              </a>

              <a
                href="#"
                className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                New Arrivals
              </a>

              <a
                href="#"
                className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Best Sellers
              </a>

              <a
                href="#"
                className="block rounded-lg px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50"
              >
                Offers
              </a>

              <div className="my-2 border-t border-gray-100" />

              <a
                href="#"
                className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                My Orders
              </a>

              <a
                href="#"
                className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                My Account
              </a>

              <a
                href="#"
                className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Wishlist
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;