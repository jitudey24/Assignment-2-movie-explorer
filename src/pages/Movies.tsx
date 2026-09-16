import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";
import Loading from "../components/Loading";
import { getShows, searchShows } from "../services/tvmazeApi";
import type { MovieType } from "../type/MovieType";

const Movies = () => {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedMovie, setSelectedMovie] = useState<MovieType | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError("");
        setMovies(await getShows());
      } catch (error) {
        setError("Something went wrong. Please try again.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  useEffect(() => {
    if (!search.trim()) return;

    const timer = window.setTimeout(async () => {
      try {
        setLoading(true);
        setError("");
        const data = await searchShows(search);
        setMovies(data.map((item) => item.show));
      } catch (error) {
        setError("Search failed. Please try again.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    }, 400);

    return () => window.clearTimeout(timer);
  }, [search]);

  return (
    <main className="min-h-screen bg-slate-100 px-5 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-slate-900">Explore Movies</h1>
          <p className="mt-3 text-slate-600">
            Search and discover your favorite movies and TV shows.
          </p>
        </div>

        <div className="mx-auto mb-10 max-w-2xl">
          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search movie or TV show..."
            className="w-full rounded-xl border border-slate-300 bg-white px-5 py-4 text-slate-800 outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-200"
          />
        </div>

        {loading && <Loading />}

        {!loading && error && (
          <div className="py-10 text-center">
            <p className="text-lg font-medium text-red-500">{error}</p>
          </div>
        )}

        {!loading && !error && movies.length === 0 && (
          <div className="py-10 text-center">
            <p className="text-lg text-slate-500">No movies found.</p>
          </div>
        )}

        {!loading && !error && movies.length > 0 && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onSeeDetails={setSelectedMovie}
              />
            ))}
          </div>
        )}

        {selectedMovie && (
          <MovieModal
            movie={selectedMovie}
            onClose={() => setSelectedMovie(null)}
          />
        )}
      </div>
    </main>
  );
};

export default Movies;
