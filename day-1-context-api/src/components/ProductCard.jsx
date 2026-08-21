function ProductCard({ product }) {
  return (
    <div className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Product Image */}
      <div className="flex h-56 items-center justify-center bg-gray-50 p-4 sm:h-64 sm:p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">

        {/* Category */}
        <span className="w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold capitalize text-blue-600">
          {product.category}
        </span>

        {/* Title */}
        <h2 className="mt-3 line-clamp-2 min-h-12 text-base font-bold leading-6 text-gray-900 sm:text-lg">
          {product.title}
        </h2>

        {/* Description */}
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-500">
          {product.description}
        </p>

        {/* Rating */}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1 rounded-lg bg-yellow-50 px-2 py-1">
            <span className="text-yellow-500">★</span>

            <span className="text-sm font-semibold text-gray-800">
              {product.rating.rate}
            </span>
          </div>

          <span className="text-xs text-gray-400 sm:text-sm">
            ({product.rating.count} reviews)
          </span>
        </div>

        {/* Price + Cart */}
        <div className="mt-auto pt-5">
          <div className="flex flex-col gap-4 min-[400px]:flex-row min-[400px]:items-center min-[400px]:justify-between">

            <div>
              <p className="text-xs text-gray-400">
                Price
              </p>

              <p className="text-xl font-bold text-gray-900 sm:text-2xl">
                ${product.price}
              </p>
            </div>

            <button
              className="w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition hover:bg-blue-700 active:scale-95 min-[400px]:w-auto"
            >
              Add to Cart
            </button>

          </div>
        </div>

      </div>
    </div>
  );
}

export default ProductCard;