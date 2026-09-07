const Shop = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-6 pt-24">
      <div className="mx-auto max-w-7xl">

        <h1 className="text-3xl font-bold text-gray-900">
          Shop
        </h1>

        <p className="mt-2 text-gray-600">
          Browse all our products.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          <div className="h-64 rounded-xl bg-white p-5 shadow">
            <div className="h-36 rounded-lg bg-gray-200"></div>
            <h2 className="mt-4 font-semibold">Product Name</h2>
            <p className="text-gray-500">$99</p>
          </div>

          <div className="h-64 rounded-xl bg-white p-5 shadow">
            <div className="h-36 rounded-lg bg-gray-200"></div>
            <h2 className="mt-4 font-semibold">Product Name</h2>
            <p className="text-gray-500">$129</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Shop;