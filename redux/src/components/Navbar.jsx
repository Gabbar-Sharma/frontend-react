const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold">
          Shop<span className="text-violet-600">X</span>
        </h1>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <span className="cursor-pointer text-sm font-medium text-gray-700 hover:text-violet-600">
            Home
          </span>

          <span className="cursor-pointer text-sm font-medium text-gray-700 hover:text-violet-600">
            Shop
          </span>

          <span className="cursor-pointer text-sm font-medium text-gray-700 hover:text-violet-600">
            Products
          </span>
        </div>

        {/* Search */}
        <div className="hidden w-64 lg:block">
          <input
            type="text"
            placeholder="Search products..."
            className="h-10 w-full rounded-lg border border-gray-300 px-4 text-sm outline-none focus:border-violet-600"
          />
        </div>

        {/* Login Button */}
        <button
          type="button"
          className="rounded-lg bg-violet-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-violet-700"
        >
          Login
        </button>

      </div>
    </nav>
  );
};

export default Navbar;