function Home() {
  return (
    <section className="bg-white">
      {" "}
      <div className="mx-auto flex min-h-[70vh] max-w-4xl items-center justify-center px-6 text-center">
        {" "}
        <div className="max-w-3xl">
          {" "}
          {/* Badge */}{" "}
          <span className="inline-block rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
            {" "}
            Welcome to our website {" "}
          </span>{" "}
          {/* Heading */}{" "}
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            {" "}
            Build something{" "}
            <span className="text-blue-600"> amazing.</span>{" "}
          </h1>{" "}
          {/* Description */}{" "}
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-500 sm:text-lg">
            {" "}
            A simple, modern and powerful platform to help you bring your ideas
            to life.{" "}
          </p>{" "}
          {/* Buttons */}{" "}
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            {" "}
            <button className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700">
              {" "}
              Get Started{" "}
            </button>{" "}
            <button className="rounded-lg border border-gray-200 px-6 py-3 font-medium text-gray-700 transition hover:bg-gray-50">
              {" "}
              Learn More{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}

export default Home;
