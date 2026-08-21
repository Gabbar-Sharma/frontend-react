function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-slate-950 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Left */}
          <div>
            <span className="rounded-full bg-indigo-500/10 px-4 py-2 text-sm font-bold text-indigo-400">
              CONTACT
            </span>

            <h1 className="mt-7 text-4xl font-black text-white sm:text-5xl">
              Let's build something
              <span className="block text-indigo-400">
                great together.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-8 text-slate-400">
              Have an idea, opportunity or project in mind? I'd love
              to hear about it. Send me a message and let's talk.
            </p>

            <div className="mt-10 space-y-5">

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-indigo-400">
                  @
                </div>

                <div>
                  <p className="text-xs text-slate-500">Email</p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    your@email.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-indigo-400">
                  in
                </div>

                <div>
                  <p className="text-xs text-slate-500">LinkedIn</p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    linkedin.com/in/yourname
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-indigo-400">
                  {"</>"}
                </div>

                <div>
                  <p className="text-xs text-slate-500">GitHub</p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    github.com/yourusername
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl sm:p-8">

            <h2 className="text-xl font-bold text-white">
              Send me a message
            </h2>

            <div className="mt-7 space-y-5">

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-xl border border-slate-700 bg-slate-950 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                />
              </div>

              <button
                type="button"
                className="w-full rounded-xl bg-indigo-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-900/20 transition duration-300 hover:-translate-y-1 hover:bg-indigo-500"
              >
                Send Message →
              </button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;