export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-darkBg/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#top" className="text-sm font-semibold tracking-[0.3em] text-brandGreen uppercase">
          Sergio
        </a>
        <nav className="flex items-center gap-6 text-sm text-slate-300">
          <a href="#proyectos" className="transition hover:text-white">
            Proyectos
          </a>
          <a href="#skills" className="transition hover:text-white">
            Skills
          </a>
          <a href="#contacto" className="transition hover:text-white">
            Contacto
          </a>
        </nav>
      </div>
    </header>
  )
}
