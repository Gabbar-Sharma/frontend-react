
function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen bg-white px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">

        <div className="mb-16 text-center">
          <span className="rounded-full bg-indigo-50 px-4 py-2 text-sm font-bold text-indigo-600">
            EXPERIENCE
          </span>

          <h1 className="mt-6 text-4xl font-black text-slate-900 sm:text-5xl">
            My journey so far.
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-slate-500">
            My learning, development and professional journey.
          </p>
        </div>

        <div className="relative">

          {/* Timeline */}
          <div className="absolute left-4 top-0 h-full w-px bg-slate-200 sm:left-1/2 sm:-translate-x-1/2" />

          {/* Item */}
          <div className="relative mb-12 grid gap-8 sm:grid-cols-2">

            <div className="sm:pr-12 sm:text-right">
              <span className="text-sm font-bold text-indigo-600">
                2026 — Present
              </span>

              <h2 className="mt-2 text-xl font-bold text-slate-900">
                Full Stack Development
              </h2>
            </div>

            <div className="relative pl-10 sm:pl-12">
              <span className="absolute -left-1.25 top-1 h-3 w-3 rounded-full bg-indigo-600 ring-4 ring-indigo-100 sm:-left-1.5" />

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm leading-7 text-slate-600">
                  Building projects with React, Node.js, APIs, databases
                  and modern frontend technologies.
                </p>
              </div>
            </div>
          </div>

          {/* Item */}
          <div className="relative mb-12 grid gap-8 sm:grid-cols-2">

            <div className="order-2 pl-10 sm:order-1 sm:pl-0 sm:pr-12 sm:text-right">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-left sm:text-right">
                <p className="text-sm leading-7 text-slate-600">
                  Learning advanced React concepts, component architecture,
                  state management and API integration.
                </p>
              </div>
            </div>

            <div className="relative order-1 pl-10 sm:order-2 sm:pl-12">
              <span className="absolute -left-1.25 top-1 h-3 w-3 rounded-full bg-purple-600 ring-4 ring-purple-100 sm:-left-1.5" />

              <span className="text-sm font-bold text-purple-600">
                2025
              </span>

              <h2 className="mt-2 text-xl font-bold text-slate-900">
                React Development
              </h2>
            </div>
          </div>

          {/* Item */}
          <div className="relative grid gap-8 sm:grid-cols-2">

            <div className="sm:pr-12 sm:text-right">
              <span className="text-sm font-bold text-indigo-600">
                2024
              </span>

              <h2 className="mt-2 text-xl font-bold text-slate-900">
                Started Development Journey
              </h2>
            </div>

            <div className="relative pl-10 sm:pl-12">
              <span className="absolute -left-1.25 top-1 h-3 w-3 rounded-full bg-indigo-600 ring-4 ring-indigo-100 sm:-left-1.5" />

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm leading-7 text-slate-600">
                  Started learning programming fundamentals, web
                  technologies and software development.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Experience;