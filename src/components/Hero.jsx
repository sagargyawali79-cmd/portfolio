
function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-32"
    >
      {/* Background Glow */}
      <div className="absolute left-10 top-40 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 h-60 w-60 rounded-full bg-blue-500/10 blur-3xl"></div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        {/* Left Content */}
        <div>
          <p className="mb-5 text-lg font-semibold text-cyan-400">
            Hello, I'm
          </p>

          <h1 className="text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
            Sagar
            <br />
            <span className="text-cyan-400">Gyawali</span>
          </h1>

          <h2 className="mt-6 text-2xl font-bold text-slate-200 sm:text-3xl">
            Full Stack Developer
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
            I build modern, responsive and user-friendly web applications
            with clean interfaces, powerful backend systems and scalable
            technologies.
          </p>

          {/* Main Buttons */}
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-cyan-400 px-7 py-3.5 font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-300"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-slate-600 px-7 py-3.5 font-bold transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
            >
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-10 flex gap-4">
            <a
              href="https://github.com/sagargyawali79-cmd"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/10 px-5 py-3 text-sm text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/sagar-gyawali-b326683b9/"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/10 px-5 py-3 text-sm text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right Side - Profile Photo */}
        <div className="flex justify-center">
          <div className="relative flex h-80 w-80 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/5 shadow-2xl shadow-cyan-500/20 sm:h-96 sm:w-96">
            
            {/* Decorative Circles */}
            <div className="absolute inset-3 rounded-full border border-cyan-400/20"></div>
            <div className="absolute inset-6 rounded-full border border-cyan-400/10"></div>

            {/* Profile Image */}
            <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-cyan-400/50 shadow-xl shadow-cyan-500/20 sm:h-80 sm:w-80">
             
<img
  src="/sagar.jpg"
  alt="Sagar Gyawali"
  className="h-full w-full object-cover object-top transition duration-500 hover:scale-110"
/>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
