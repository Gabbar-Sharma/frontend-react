const Cart = () => {
  const cartItems = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 59.99,
      quantity: 1,
      image: "https://placehold.co/200x200",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 89.99,
      quantity: 2,
      image: "https://placehold.co/200x200",
    },
  ];

  const subtotal = 239.97;
  const shipping = 10;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-4xl">

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Shopping Cart 🛒
          </h1>

          <p className="mt-1 text-gray-500">
            Review your items before checkout.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {/* Cart Items */}
          <div className="space-y-4 lg:col-span-2">

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 rounded-2xl bg-white p-4 shadow-sm"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-24 w-24 rounded-xl object-cover"
                />

                <div className="flex flex-1 flex-col justify-between">

                  <div className="flex justify-between gap-4">
                    <div>
                      <h2 className="font-semibold text-gray-900">
                        {item.name}
                      </h2>

                      <p className="mt-1 text-sm text-gray-500">
                        ${item.price}
                      </p>
                    </div>

                    <button className="text-sm text-red-500 hover:text-red-600">
                      Remove
                    </button>
                  </div>

                  <div className="mt-3 flex items-center justify-between">

                    {/* Quantity */}
                    <div className="flex items-center rounded-lg border border-gray-200">
                      <button className="px-3 py-1.5 text-gray-600 hover:bg-gray-50">
                        −
                      </button>

                      <span className="px-3 text-sm font-medium">
                        {item.quantity}
                      </span>

                      <button className="px-3 py-1.5 text-gray-600 hover:bg-gray-50">
                        +
                      </button>
                    </div>

                    <p className="font-bold text-gray-900">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>

                  </div>

                </div>
              </div>
            ))}

          </div>

          {/* Order Summary */}
          <div className="h-fit rounded-2xl bg-white p-6 shadow-sm">

            <h2 className="text-xl font-bold text-gray-900">
              Order Summary
            </h2>

            <div className="mt-6 space-y-4 text-sm">

              <div className="flex justify-between">
                <span className="text-gray-500">
                  Subtotal
                </span>

                <span className="font-medium text-gray-900">
                  ${subtotal.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">
                  Shipping
                </span>

                <span className="font-medium text-gray-900">
                  ${shipping.toFixed(2)}
                </span>
              </div>

              <div className="border-t border-gray-100 pt-4">
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-900">
                    Total
                  </span>

                  <span className="text-xl font-bold text-indigo-600">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>

            </div>

            <button className="mt-6 w-full rounded-xl bg-indigo-600 py-3.5 font-medium text-white transition hover:bg-indigo-700">
              Proceed to Checkout
            </button>

            <button className="mt-3 w-full rounded-xl border border-gray-200 py-3.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50">
              Continue Shopping
            </button>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Cart;