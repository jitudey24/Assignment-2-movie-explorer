const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-8 md:grid-cols-3">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-pink-500">
              MovieExplorer
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Explore movies and discover your next favorite show.
              Search, view ratings, and explore movie details easily.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-3 text-lg font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="/" className="hover:text-white">
                  Home
                </a>
              </li>

              <li>
                <a href="/movies" className="hover:text-white">
                  Movies
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-3 text-lg font-semibold">
              Follow Me
            </h3>

            <div className="flex gap-4">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-white"
              >
                GitHub
              </a>

              <a
                href="#"
                className="text-slate-400 hover:text-white"
              >
                Facebook
              </a>

              <a
                href="#"
                className="text-slate-400 hover:text-white"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} MovieExplorer. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
