function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">

        <div>
          <p className="text-xl font-bold">
            Sagar <span className="text-cyan-400">Gyawali</span>
          </p>

          <p className="mt-2 text-sm text-slate-500">
            Full Stack Developer
          </p>
        </div>

        <p className="text-sm text-slate-500">
          © 2026 Sagar Gyawali. All rights reserved.
        </p>

        <a
          href="#home"
          className="rounded-lg border border-white/10 px-4 py-2 text-sm text-slate-300 hover:border-cyan-400 hover:text-cyan-400"
        >
          Back to Top ↑
        </a>

      </div>
    </footer>
  );
}

export default Footer;