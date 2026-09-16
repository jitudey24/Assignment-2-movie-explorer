import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">

        {/* Logo / Brand */}
        <a
          href="/"
          className="text-2xl font-bold text-pink-600"
        >
          MovieExplorer
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="/"
            className="font-medium text-slate-700 hover:text-pink-600"
          >
            Home
          </a>

          <a
            href="/movies"
            className="font-medium text-slate-700 hover:text-pink-600"
          >
            Movies
          </a>

          <a
            href="/movies"
            className="rounded-lg bg-slate-900 px-5 py-2.5 font-semibold text-white hover:bg-pink-600"
          >
            Explore Movies
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-lg border border-slate-300 px-3 py-2 text-xl md:hidden"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-slate-200 bg-white px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4">

            <a
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="font-medium text-slate-700 hover:text-pink-600"
            >
              Home
            </a>

            <a
              href="/movies"
              onClick={() => setIsMenuOpen(false)}
              className="font-medium text-slate-700 hover:text-pink-600"
            >
              Movies
            </a>

            <a
              href="/movies"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-lg bg-slate-900 px-5 py-2.5 text-center font-semibold text-white hover:bg-pink-600"
            >
              Explore Movies
            </a>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
