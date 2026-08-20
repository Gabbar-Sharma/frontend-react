function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-white px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-16 max-w-3xl">
          <span className="rounded-full bg-indigo-50 px-4 py-2 text-sm font-bold text-indigo-600">
            ABOUT ME
          </span>

          <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Turning ideas into
            <span className="text-indigo-600"> digital experiences.</span>
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-500">
            I'm a developer who enjoys solving problems and building
            useful, scalable and beautiful applications.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">

          {/* About Card */}
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7 sm:p-10">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600 text-xl text-white shadow-lg shadow-indigo-200">
              &lt;/&gt;
            </div>

            <h2 className="text-2xl font-bold text-slate-900">
              Who I Am
            </h2>

            <div className="mt-5 space-y-4 leading-7 text-slate-600">
              <p>
                I'm passionate about software development and enjoy
                creating applications that solve real-world problems.
              </p>

              <p>
                My journey started with frontend development and gradually
                expanded into backend development, databases, APIs,
                system design and cloud technologies.
              </p>

              <p>
                I believe in continuously learning, writing clean code
                and improving my engineering skills every day.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="grid gap-5 sm:grid-cols-2">

            {[
              {
                title: "Problem Solver",
                text: "I enjoy breaking complex problems into simple solutions.",
                icon: "✦",
              },
              {
                title: "Clean Code",
                text: "I focus on readable, maintainable and scalable code.",
                icon: "</>",
              },
              {
                title: "Continuous Learning",
                text: "Always exploring new technologies and better approaches.",
                icon: "↗",
              },
              {
                title: "User Focused",
                text: "Building experiences that are simple and useful.",
                icon: "◎",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-indigo-200 hover:shadow-xl"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 font-bold text-indigo-600">
                  {item.icon}
                </div>

                <h3 className="mt-5 font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;