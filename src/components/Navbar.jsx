function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        <a
          href="#home"
          className="text-2xl font-black tracking-wide"
        >
          S<span className="text-cyan-400">G</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#home" className="text-sm text-slate-300 transition hover:text-cyan-400">
            Home
          </a>

          <a href="#about" className="text-sm text-slate-300 transition hover:text-cyan-400">
            About
          </a>

          <a href="#skills" className="text-sm text-slate-300 transition hover:text-cyan-400">
            Skills
          </a>

          <a href="#projects" className="text-sm text-slate-300 transition hover:text-cyan-400">
            Projects
          </a>

          <a href="#journey" className="text-sm text-slate-300 transition hover:text-cyan-400">
            Journey
          </a>

          <a href="#contact" className="text-sm text-slate-300 transition hover:text-cyan-400">
            Contact
          </a>
        </div>

        <a
          href="#contact"
          className="rounded-xl bg-cyan-400 px-5 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
        >
          Let's Talk
        </a>
      </div>

      <div className="mx-auto flex max-w-7xl gap-5 overflow-x-auto px-6 pb-4 md:hidden">
        <a href="#home" className="whitespace-nowrap text-sm text-slate-400">
          Home
        </a>

        <a href="#about" className="whitespace-nowrap text-sm text-slate-400">
          About
        </a>

        <a href="#skills" className="whitespace-nowrap text-sm text-slate-400">
          Skills
        </a>

        <a href="#projects" className="whitespace-nowrap text-sm text-slate-400">
          Projects
        </a>

        <a href="#contact" className="whitespace-nowrap text-sm text-slate-400">
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;