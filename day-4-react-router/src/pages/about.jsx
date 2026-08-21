function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden bg-slate-950 px-4 py-20 sm:px-6 lg:px-8"
    >
      {/* Background Glow */}
      <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-indigo-600/10 blur-3xl" />

      <div className="absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-purple-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-16 max-w-3xl">
          <span className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm font-bold text-indigo-400">
            ABOUT ME
          </span>

          <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Turning ideas into
            <span className="text-indigo-400">
              {" "}
              digital experiences.
            </span>
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            I'm a developer who enjoys solving problems and building
            useful, scalable and beautiful applications.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid gap-8 lg:grid-cols-2">

          {/* About Card */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 shadow-2xl shadow-black/20 backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-indigo-500/30 sm:p-10">

            {/* Icon */}
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/10 text-xl font-bold text-indigo-400 ring-1 ring-indigo-500/20">
              &lt;/&gt;
            </div>

            <h2 className="text-2xl font-bold text-white">
              Who I Am
            </h2>

            <div className="mt-5 space-y-5 leading-7 text-slate-400">

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

            {/* Mini Stats */}
            <div className="mt-8 grid grid-cols-3 border-t border-slate-800 pt-7">

              <div>
                <p className="text-2xl font-black text-white">
                  10+
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Projects
                </p>
              </div>

              <div className="border-l border-slate-800 pl-5">
                <p className="text-2xl font-black text-white">
                  8+
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Technologies
                </p>
              </div>

              <div className="border-l border-slate-800 pl-5">
                <p className="text-2xl font-black text-white">
                  ∞
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Learning
                </p>
              </div>

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
                className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg transition duration-500 hover:-translate-y-2 hover:border-indigo-500/40 hover:bg-slate-900 hover:shadow-indigo-950/30"
              >

                {/* Icon */}
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/10 font-bold text-indigo-400 ring-1 ring-indigo-500/10 transition duration-300 group-hover:scale-110 group-hover:bg-indigo-500/20">
                  {item.icon}
                </div>

                <h3 className="mt-5 font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
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