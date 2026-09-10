const Deals = () => {
  const deals = [
    {
      title: "Summer Sale",
      discount: "50% OFF",
      text: "On selected products",
    },
    {
      title: "Fashion Deals",
      discount: "40% OFF",
      text: "Latest fashion collection",
    },
    {
      title: "Electronics",
      discount: "30% OFF",
      text: "Upgrade your gadgets",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-4xl">

        <div className="rounded-3xl bg-indigo-600 px-6 py-12 text-center text-white">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest">
            Limited Time
          </p>

          <h1 className="text-4xl font-bold">
            Amazing Deals
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-indigo-100">
            Grab your favourite products before the offers end.
          </p>

          <button className="mt-6 rounded-full bg-white px-6 py-3 text-sm font-semibold text-indigo-600 transition hover:bg-gray-100">
            Shop Deals
          </button>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {deals.map((deal) => (
            <div
              key={deal.title}
              className="rounded-2xl bg-white p-6 shadow-sm"
            >
              <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-500">
                SALE
              </span>

              <h2 className="mt-5 text-xl font-bold text-gray-900">
                {deal.title}
              </h2>

              <p className="mt-2 text-3xl font-bold text-indigo-600">
                {deal.discount}
              </p>

              <p className="mt-2 text-sm text-gray-500">
                {deal.text}
              </p>

              <button className="mt-6 w-full rounded-xl bg-gray-900 py-3 text-sm font-medium text-white hover:bg-gray-800">
                View Deal
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Deals;