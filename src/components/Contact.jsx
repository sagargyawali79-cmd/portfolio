function Contact() {
  return (
    <section id="contact" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">

        <div className="text-center">
          <p className="font-semibold text-cyan-400">
            CONTACT ME
          </p>

          <h2 className="mt-3 text-4xl font-black sm:text-5xl">
            Let's Work Together
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            Have a project idea, question or collaboration opportunity?
            Feel free to get in touch.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10">

            <h3 className="text-2xl font-bold">
              Get In Touch
            </h3>

            <p className="mt-5 leading-7 text-slate-400">
              I'm always open to learning, collaborating and working
              on interesting web development projects.
            </p>

            <div className="mt-10 space-y-7">

              <div>
                <p className="text-sm text-slate-500">
                  Email
                </p>

                <p className="mt-2 text-slate-200">
                  sagargyawali79@gmail.com
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Location
                </p>

                <p className="mt-2 text-slate-200">
                  Nepal
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Availability
                </p>

                <p className="mt-2 text-cyan-400">
                  Open to opportunities
                </p>
              </div>

            </div>

            <div className="mt-10 flex gap-3">
              <a
                href="https://github.com/sagargyawali79-cmd"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/10 px-5 py-3 text-sm text-slate-300 hover:border-cyan-400 hover:text-cyan-400"
              >
                GitHub
              </a>

              <a
                href="#"
                className="rounded-xl border border-white/10 px-5 py-3 text-sm text-slate-300 hover:border-cyan-400 hover:text-cyan-400"
              >
                LinkedIn
              </a>
            </div>

          </div>

          <form className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10">

            <div className="space-y-5">

              <div>
                <label className="mb-2 block text-sm text-slate-400">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-400">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-400">
                  Message
                </label>

                <textarea
                  rows="6"
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
                ></textarea>
              </div>

              <button
                type="button"
                className="w-full rounded-xl bg-cyan-400 px-6 py-3.5 font-bold text-slate-950 transition hover:bg-cyan-300"
              >
                Send Message
              </button>

            </div>

          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;