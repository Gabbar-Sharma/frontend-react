function Navbar() {
  return (
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <h1 className="text-xl font-bold text-gray-900">
          User<span className="text-blue-600">Hub</span>
        </h1>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <button className="rounded-lg px-4 py-2.5 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-900">
            Show Users
          </button>

          <button className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 active:scale-95">
            + Create User
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
