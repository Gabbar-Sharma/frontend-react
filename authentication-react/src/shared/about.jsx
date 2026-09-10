const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-4xl">

        <div className="rounded-3xl bg-white px-6 py-14 text-center shadow-sm">

          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
            About ShopX
          </p>

          <h1 className="mt-3 text-4xl font-bold text-gray-900">
            Shopping made simple.
          </h1>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-500">
            ShopX is a modern e-commerce platform designed to make
            online shopping simple, fast and enjoyable.
          </p>

        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
            <div className="text-3xl">🚚</div>
            <h2 className="mt-4 font-bold text-gray-900">
              Fast Delivery
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Get your orders delivered quickly.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
            <div className="text-3xl">🔒</div>
            <h2 className="mt-4 font-bold text-gray-900">
              Secure Shopping
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Your shopping experience stays safe.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
            <div className="text-3xl">❤️</div>
            <h2 className="mt-4 font-bold text-gray-900">
              Customer First
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              We focus on making customers happy.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default About;