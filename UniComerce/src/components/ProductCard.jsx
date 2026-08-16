function ProductCard({ product }) {
  return (
    <article className="group relative w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

      {/* Discount */}
      <span className="absolute left-3 top-3 z-10 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white sm:left-4 sm:top-4">
        -20%
      </span>

      {/* Wishlist */}
      <button
        className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-gray-500 shadow-md backdrop-blur transition-all duration-300 hover:scale-110 hover:bg-red-50 hover:text-red-500 sm:right-4 sm:top-4 sm:h-10 sm:w-10"
      >
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z"
          />
        </svg>
      </button>

      {/* Image */}
      <div className="relative flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 p-6 sm:h-64 sm:p-7 lg:h-72 lg:p-8">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/5" />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5">

        {/* Category */}
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-indigo-600">
          {product.category}
        </p>

        {/* Title */}
        <h2 className="mb-2 line-clamp-2 min-h-[44px] text-base font-bold leading-6 text-gray-900 transition-colors duration-300 group-hover:text-indigo-600 sm:text-lg">
          {product.title}
        </h2>

        {/* Description */}
        <p className="mb-4 line-clamp-2 text-sm leading-5 text-gray-500">
          {product.description}
        </p>

        {/* Rating */}
        <div className="mb-4 flex items-center gap-2">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className={`h-4 w-4 ${
                  star <= Math.round(product.rating.rate)
                    ? "fill-yellow-400 text-yellow-400"
                    : "fill-gray-200 text-gray-200"
                }`}
                viewBox="0 0 20 20"
              >
                <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.2 1 5.9-5.2-2.8-5.2 2.8 1-5.9-4.3-4.2 5.9-.9L10 1.5z" />
              </svg>
            ))}
          </div>

          <span className="text-sm font-semibold text-gray-700">
            {product.rating.rate}
          </span>

          <span className="text-xs text-gray-400">
            ({product.rating.count})
          </span>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-3 border-t border-gray-100 pt-4 min-[400px]:flex-row min-[400px]:items-center min-[400px]:justify-between">

          {/* Price */}
          <div>
            <p className="text-xs text-gray-400 line-through">
              ${(product.price * 1.2).toFixed(2)}
            </p>

            <p className="text-xl font-extrabold text-gray-900 sm:text-2xl">
              ${product.price.toFixed(2)}
            </p>
          </div>

          {/* Cart Button */}
          <button
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-700 hover:shadow-xl active:scale-95 min-[400px]:w-auto"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-2 2h13m-9 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm8 0a1 1 0 1 1-2 0 1 1 0 1 2 0 1 1 0 0 1 2 0Z"
              />
            </svg>

            Add to Cart
          </button>

        </div>
      </div>
    </article>
  );
}

export default ProductCard;