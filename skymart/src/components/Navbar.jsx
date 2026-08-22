import { useState } from "react";
import { NavLink } from "react-router";


function Navbar() {
 const [isOpen, setIsOpen] = useState(false)
    console.log(setIsOpen)
  return (
    <header className="border-b border-gray-200 bg-white">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
     
        {/* Logo */}
        <div className="text-2xl font-bold tracking-tight text-gray-900">
          Shop<span className="text-blue-600">X</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <NavLink 
          to="home"
            className="text-sm font-medium text-gray-900 transition hover:text-blue-600"
          >
            Home
          </NavLink>

          <NavLink
            to="shop"
            className="text-sm font-medium text-gray-600 transition hover:text-blue-600"
          >
            Shop
          </NavLink>

          <NavLink
            to="categories"
            className="text-sm font-medium text-gray-600 transition hover:text-blue-600"
          >
            Categories
          </NavLink>

          <NavLink
            to="deals"
            className="text-sm font-medium text-gray-600 transition hover:text-blue-600"
          >
            Deals
          </NavLink>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          
          {/* Search */}
          <button
            type="button"
            aria-label="Search"
            className="rounded-full p-2 text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
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
            className="hidden rounded-full p-2 text-gray-600 transition hover:bg-gray-100 hover:text-gray-900 sm:block"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
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
            aria-label="Cart"
            className="relative rounded-full p-2 text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.836L5.7 6.75m0 0h13.65a1.5 1.5 0 0 1 1.46 1.846l-1.2 5.25a1.5 1.5 0 0 1-1.46 1.154H8.25a1.5 1.5 0 0 1-1.46-1.154L5.7 6.75Zm2.55 10.5a1.5 1.5 0 1 0 3 0m5.25 0a1.5 1.5 0 1 0 3 0"
              />
            </svg>

            {/* Cart Count - Static for now */}
            <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-blue-600 px-1 text-[10px] font-bold text-white">
              0
            </span>
          </button>

          {/* Login */}
          <button
            type="button"
            className="hidden rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800 sm:block"
          >
            Login
          </button>

          {/* Mobile Menu Button */}
          <button
          onClick={() => setIsOpen(!isOpen)}
            type="button"
            aria-label="Open menu"
            className="rounded-full p-2 text-gray-600 transition hover:bg-gray-100 md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;