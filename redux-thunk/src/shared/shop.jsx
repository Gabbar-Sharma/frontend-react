const Shop = () => {
  const categories = [
    "Electronics",
    "Fashion",
    "Beauty",
    "Home",
    "Sports",
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-4xl">

        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Shop
          </h1>
          <p className="mt-2 text-gray-500">
            Find everything you need in one place.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {categories.map((category) => (
            <div
              key={category}
              className="cursor-pointer rounded-2xl bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-50 text-xl">
                🛍️
              </div>

              <h2 className="font-semibold text-gray-800">
                {category}
              </h2>

              <p className="mt-1 text-sm text-gray-400">
                Explore products
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Shop;