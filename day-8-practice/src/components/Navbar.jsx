import { NavLink } from "react-router";
import { useContext } from "react";
import {MyStore }from "../context-api/MyContext";

function Navbar() {
  const {IsOpen , setIsOpen} = useContext(MyStore);
  return (
    <header
      className="
        sticky top-0 z-50
        border-b border-gray-200
        bg-white/95 backdrop-blur
        dark:border-gray-800
        dark:bg-gray-950/95
      "
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between">
          {/* ================= Logo ================= */}
          <div className="shrink-0 cursor-pointer">
            <NavLink
              to="/"
              className="
                text-2xl font-extrabold tracking-tight
                text-gray-950
                dark:text-white
              "
            >
              Shop<span className="text-blue-600">X</span>
            </NavLink>
          </div>

          {/* ================= Desktop Navigation ================= */}
          <div className="hidden items-center gap-8 md:flex">
            <NavLink
              to="home"
              className="
                relative py-2 text-sm font-semibold
                text-gray-950
                after:absolute after:bottom-0 after:left-0
                after:h-0.5 after:w-full after:rounded-full
                after:bg-blue-600
                dark:text-white
              "
            >
              Home
            </NavLink>

            <NavLink
              to="shop"
              className="
                py-2 text-sm font-medium
                text-gray-600
                transition-colors hover:text-gray-950
                dark:text-gray-400
                dark:hover:text-white
              "
            >
              Shop
            </NavLink>

            <NavLink
              to="categories"
              className="
                py-2 text-sm font-medium
                text-gray-600
                transition-colors hover:text-gray-950
                dark:text-gray-400
                dark:hover:text-white
              "
            >
              Categories
            </NavLink>

            <NavLink
              to="deals"
              className="
                py-2 text-sm font-medium
                text-gray-600
                transition-colors hover:text-gray-950
                dark:text-gray-400
                dark:hover:text-white
              "
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
              className="
                cursor-pointer
                flex h-10 w-10 items-center justify-center
                rounded-full
                text-gray-600
                transition
                hover:bg-gray-100
                hover:text-gray-950
                dark:text-gray-400
                dark:hover:bg-gray-800
                dark:hover:text-white
              "
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
              className="
              cursor-pointer
                hidden h-10 w-10 items-center justify-center
                rounded-full
                text-gray-600
                transition
                hover:bg-gray-100
                hover:text-gray-950
                sm:flex
                dark:text-gray-400
                dark:hover:bg-gray-800
                dark:hover:text-white
              "
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
              className="
              cursor-pointer
                relative flex h-10 w-10 items-center justify-center
                rounded-full
                text-gray-600
                transition
                hover:bg-gray-100
                hover:text-gray-950
                dark:text-gray-400
                dark:hover:bg-gray-800
                dark:hover:text-white
              "
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

              <span
                className="
                  absolute right-0 top-0
                  flex h-4 min-w-4 items-center justify-center
                  rounded-full
                  bg-blue-600
                  px-1
                  text-[10px] font-bold text-white
                "
              >
                0
              </span>
            </button>

            {/* ================= Dark Mode Button ================= */}
            <button
              type="button"
              aria-label="Toggle dark mode"
              className="
              cursor-pointer
                flex h-10 w-10 items-center justify-center
                rounded-full
                text-gray-600
                transition
                hover:bg-gray-100
                hover:text-gray-950
                dark:text-gray-400
                dark:hover:bg-gray-800
                dark:hover:text-white
              "
            >
              {/* Sun */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.8"
                stroke="currentColor"
                className="h-5 w-5 dark:hidden"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v1.5M12 19.5V21M4.22 4.22l1.06 1.06m13.44 13.44 1.06 1.06M3 12h1.5m15 0H21M4.22 19.78l1.06-1.06M18.72 5.28l1.06-1.06M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z"
                />
              </svg>

              {/* Moon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.8"
                stroke="currentColor"
                className="hidden h-5 w-5 dark:block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"
                />
              </svg>
            </button>

            {/* Login */}
            <button
              type="button"
              className="
              cursor-pointer
                ml-2 hidden rounded-xl
                bg-gray-950
                px-5 py-2.5
                text-sm font-semibold text-white
                transition
                hover:bg-gray-800
                sm:block
                dark:bg-white
                dark:text-gray-950
                dark:hover:bg-gray-200
              "
            >
              Login
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!IsOpen)}
              type="button"
              aria-label="Open menu"
              className="
                ml-1 flex h-10 w-10 items-center justify-center
                rounded-full
                bg-gray-100
                text-gray-700
                transition
                cursor-pointer
                hover:bg-gray-200
                md:hidden
                dark:bg-gray-800
                dark:text-gray-300
                dark:hover:bg-gray-700
              "
            >
             {IsOpen ? (
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
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
             ):(
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
             )}
            </button>
          </div>
        </div>

        {/* ================= Mobile Menu ================= */}
        
   <div
          className={`
            border-t border-gray-100
            py-4
            md:hidden
            dark:border-gray-800
             transition-all duration-300 ease-in-out
             overflow-hidden
    ${IsOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'}
            `}
        >
          <div className="flex flex-col gap-1">
            <NavLink
              to="home"
              className="
                rounded-xl
                bg-gray-100
                px-4 py-3
                text-sm font-semibold
                text-gray-950
                dark:bg-gray-800
                dark:text-white
              "
            >
              Home
            </NavLink>

            <NavLink
              to="shop"
              className="
                rounded-xl
                px-4 py-3
                text-sm font-medium
                text-gray-600
                transition
                hover:bg-gray-100
                hover:text-gray-950
                dark:text-gray-400
                dark:hover:bg-gray-800
                dark:hover:text-white
              "
            >
              Shop
            </NavLink>

            <NavLink
              to="categories"
              className="
                rounded-xl
                px-4 py-3
                text-sm font-medium
                text-gray-600
                transition
                hover:bg-gray-100
                hover:text-gray-950
                dark:text-gray-400
                dark:hover:bg-gray-800
                dark:hover:text-white
              "
            >
              Categories
            </NavLink>

            <NavLink
              to="deals"
              className="
                rounded-xl
                px-4 py-3
                text-sm font-medium
                text-gray-600
                transition
                hover:bg-gray-100
                hover:text-gray-950
                dark:text-gray-400
                dark:hover:bg-gray-800
                dark:hover:text-white
              "
            >
              Deals
            </NavLink>

            <button
              type="button"
              className="
                mt-2 w-full rounded-xl
                bg-gray-950
                px-4 py-3
                text-sm font-semibold text-white
                dark:bg-white
                dark:text-gray-950
              "
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
