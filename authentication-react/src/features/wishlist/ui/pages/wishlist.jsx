const Wishlist = () => {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 59.99,
      image: "https://placehold.co/400x400",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 89.99,
      image: "https://placehold.co/400x400",
    },
    {
      id: 3,
      name: "Running Shoes",
      price: 74.99,
      image: "https://placehold.co/400x400",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-4xl">

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            My Wishlist ❤️
          </h1>

          <p className="mt-1 text-gray-500">
            Products you saved for later.
          </p>
        </div>

        <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-64 w-full object-cover"
                />

                <button className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-red-500 shadow">
                  ♥
                </button>
              </div>

              <div className="p-5">
                <h2 className="font-semibold text-gray-900">
                  {product.name}
                </h2>

                <p className="mt-2 text-xl font-bold text-indigo-600">
                  ${product.price}
                </p>

                <button className="mt-4 w-full rounded-xl bg-indigo-600 py-3 text-sm font-medium text-white transition hover:bg-indigo-700">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Wishlist;