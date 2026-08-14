
function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white">
            S
          </div>

          <span className="text-xl font-bold tracking-tight text-gray-900">
            Shop<span className="text-blue-600">ly</span>
          </span>
        </a>

        {/* Navigation */}
        <div className="flex items-center gap-2">

          <a
            href=""
            className="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
          >
            Products
          </a>

          <a
            href="#"
            className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
          >
            Cart

            {/* Cart Count */}
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-600 px-1.5 text-xs font-semibold text-white">
              0
            </span>
          </a>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;