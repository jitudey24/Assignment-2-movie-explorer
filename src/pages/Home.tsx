const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[600px] overflow-hidden">
        {/* Background */}
        <img
          src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba"
          alt="Movie background"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto flex min-h-[600px] max-w-7xl items-center px-5">
          <div className="max-w-2xl text-white">
            <p className="mb-4 text-lg font-semibold text-pink-400">
              Welcome to MovieExplorer
            </p>

            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Discover Your Next
              <span className="text-pink-500"> Favorite Movie</span>
            </h1>

            <p className="mt-6 text-base leading-7 text-slate-200 md:text-lg">
              Explore thousands of movies and TV shows. Search for your
              favorite shows, check ratings, and discover detailed
              information about them.
            </p>

            <a
              href="/movies"
              className="mt-8 inline-block rounded-lg bg-pink-600 px-6 py-3 font-semibold text-white transition hover:bg-pink-700"
            >
              Explore Movies →
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-slate-50 px-5 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-slate-900">
              Why MovieExplorer?
            </h2>

            <p className="mt-3 text-slate-600">
              Everything you need to discover amazing movies and shows.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Feature 1 */}
            <div className="rounded-xl bg-white p-6 text-center shadow-md">
              <div className="text-4xl">🔍</div>

              <h3 className="mt-4 text-xl font-bold text-slate-900">
                Easy Search
              </h3>

              <p className="mt-3 text-slate-600">
                Quickly find your favorite movies and TV shows by title.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="rounded-xl bg-white p-6 text-center shadow-md">
              <div className="text-4xl">⭐</div>

              <h3 className="mt-4 text-xl font-bold text-slate-900">
                Ratings
              </h3>

              <p className="mt-3 text-slate-600">
                Check movie ratings and discover highly-rated shows.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="rounded-xl bg-white p-6 text-center shadow-md">
              <div className="text-4xl">🎬</div>

              <h3 className="mt-4 text-xl font-bold text-slate-900">
                Movie Details
              </h3>

              <p className="mt-3 text-slate-600">
                View genres, release dates, summaries, and more information.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
