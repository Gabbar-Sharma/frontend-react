const Products = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-6 pt-24">
      <div className="mx-auto max-w-7xl">

        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">
            Products
          </h1>

          <select className="rounded-lg border bg-white px-4 py-2">
            <option>Sort by</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="rounded-xl bg-white p-5 shadow"
            >
              <div className="h-44 rounded-lg bg-gray-200"></div>

              <h2 className="mt-4 font-semibold">
                Product {item}
              </h2>

              <p className="mt-1 text-gray-500">
                $99.00
              </p>

              <button className="mt-4 w-full rounded-lg bg-violet-600 py-2 text-sm font-semibold text-white">
                Add to Cart
              </button>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Products;