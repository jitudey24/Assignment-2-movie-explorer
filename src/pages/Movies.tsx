import { useEffect, useState } from "react";

import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";
import Loading from "../components/Loading";

interface Movie {
  id: number;
  name: string;
  image?: {
    medium?: string;
    original?: string;
  };
  premiered?: string;
  rating?: {
    average?: number;
  };
  genres?: string[];
  summary?: string;
  status?: string;
  language?: string;
  runtime?: number;
  network?: {
    name?: string;
  };
  type?: string;
}

interface SearchResult {
  score: number;
  show: Movie;
}

const Movies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  // Load all movies
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch("https://api.tvmaze.com/shows");

        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }

        const data: Movie[] = await response.json();

        setMovies(data);
      } catch (error) {
        setError("Something went wrong. Please try again.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  // Search movies
  useEffect(() => {
    const searchMovies = async () => {
      if (!search.trim()) {
        return;
      }

      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(search)}`
        );

        if (!response.ok) {
          throw new Error("Search failed");
        }

        const data: SearchResult[] = await response.json();

        const searchResults = data.map((item) => item.show);

        setMovies(searchResults);
      } catch (error) {
        setError("Search failed. Please try again.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    const timer = setTimeout(() => {
      searchMovies();
    }, 400);

    return () => clearTimeout(timer);
  }, [search]);

  return (
    <main className="min-h-screen bg-slate-100 px-5 py-12">
      <div className="mx-auto max-w-7xl">

        {/* Page Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-slate-900">
            Explore Movies
          </h1>

          <p className="mt-3 text-slate-600">
            Search and discover your favorite movies and TV shows.
          </p>
        </div>

        {/* Search Box */}
        <div className="mx-auto mb-10 max-w-2xl">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search movie or TV show..."
            className="w-full rounded-xl border border-slate-300 bg-white px-5 py-4 text-slate-800 outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-200"
          />
        </div>

        {/* Loading */}
        {loading && <Loading />}

        {/* Error */}
        {!loading && error && (
          <div className="py-10 text-center">
            <p className="text-lg font-medium text-red-500">
              {error}
            </p>
          </div>
        )}

        {/* Empty Result */}
        {!loading && !error && movies.length === 0 && (
          <div className="py-10 text-center">
            <p className="text-lg text-slate-500">
              No movies found.
            </p>
          </div>
        )}

        {/* Movie Grid */}
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

        {/* Movie Modal */}
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
