import { useParams } from "react-router";

const ProductDetails = () => {
  const { id } = useParams();

  // Abhi dummy data, baad mein API se aayega
  const product = {
    id,
    name: "Wireless Headphones",
    price: 59.99,
    category: "Electronics",
    rating: 4.5,
    description:
      "High-quality wireless headphones with comfortable design, clear sound and long battery life.",
    image: "https://placehold.co/500x500",
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-sm">

        <div className="grid gap-10 md:grid-cols-2">

          {/* Product Image */}
          <div className="flex items-center justify-center rounded-xl bg-gray-100 p-8">
            <img
              src={product.image}
              alt={product.name}
              className="w-full max-w-md rounded-xl object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">

            <p className="mb-2 text-sm font-medium text-purple-600">
              {product.category}
            </p>

            <h1 className="mb-4 text-4xl font-bold text-gray-900">
              {product.name}
            </h1>

            <div className="mb-4 flex items-center gap-3">
              <span className="text-yellow-500">
                ⭐ {product.rating}
              </span>

              <span className="text-gray-400">
                (120 reviews)
              </span>
            </div>

            <p className="mb-6 text-3xl font-bold text-purple-600">
              ${product.price}
            </p>

            <p className="mb-8 leading-7 text-gray-600">
              {product.description}
            </p>

            {/* Quantity */}
            <div className="mb-6">
              <p className="mb-2 font-semibold">Quantity</p>

              <div className="flex w-fit items-center rounded-lg border">
                <button className="px-4 py-2 text-xl">−</button>
                <span className="px-5">1</span>
                <button className="px-4 py-2 text-xl">+</button>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <button className="flex-1 rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white hover:bg-purple-700">
                Add to Cart
              </button>

              <button className="rounded-lg border border-purple-600 px-6 py-3 font-semibold text-purple-600 hover:bg-purple-50">
                ♡ Wishlist
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;