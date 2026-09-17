import { useEffect, useState } from "react";
import type { MovieType } from "../types/MovieType";
import { getShowDetails } from "../services/tvmazeApi";

interface MovieModalProps {
  movie: MovieType;
  onClose: () => void;
}

const MovieModal = ({ movie, onClose }: MovieModalProps) => {
  const [director, setDirector] = useState("Not available");

  useEffect(() => {
    let active = true;

    const loadDetails = async () => {
      try {
        const details = await getShowDetails(movie.id);
        const directors = details._embedded?.crew
          ?.filter((member) => member.type?.toLowerCase() === "director")
          .map((member) => member.person?.name)
          .filter(Boolean);

        if (active && directors && directors.length > 0) {
          setDirector(directors.join(", "));
        }
      } catch (error) {
        console.error("Failed to load director:", error);
      }
    };

    loadDetails();

    return () => {
      active = false;
    };
  }, [movie.id]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="movie-modal-title"
    >
      <div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close movie details"
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-xl text-white transition hover:bg-red-500"
        >
          ✕
        </button>

        <img
          src={
            movie.image?.original ||
            movie.image?.medium ||
            "https://via.placeholder.com/800x500?text=No+Image"
          }
          alt={movie.name}
          className="h-64 w-full object-cover md:h-96"
        />

        <div className="p-6">
          <h2 id="movie-modal-title" className="text-3xl font-bold text-slate-900">
            {movie.name}
          </h2>

          <div className="mt-4 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
            <p><strong>⭐ Rating:</strong> {movie.rating?.average ?? "N/A"}</p>
            <p><strong>📅 Release Date:</strong> {movie.premiered || "N/A"}</p>
            <p><strong>🎬 Director:</strong> {director}</p>
            <p><strong>📺 Status:</strong> {movie.status || "N/A"}</p>
            <p><strong>🌐 Language:</strong> {movie.language || "N/A"}</p>
            <p><strong>⏱ Runtime:</strong> {movie.runtime ? `${movie.runtime} minutes` : "N/A"}</p>
            <p><strong>📡 Network:</strong> {movie.network?.name || "N/A"}</p>
            <p><strong>🎭 Type:</strong> {movie.type || "N/A"}</p>
          </div>

          <div className="mt-5">
            <h3 className="text-xl font-semibold text-slate-900">Genres</h3>
            {movie.genres && movie.genres.length > 0 ? (
              <div className="mt-2 flex flex-wrap gap-2">
                {movie.genres.map((genre) => (
                  <span
                    key={genre}
                    className="rounded-full bg-pink-100 px-3 py-1 text-sm font-medium text-pink-600"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            ) : (
              <p className="mt-2 text-slate-500">No genres available.</p>
            )}
          </div>

          <div className="mt-5">
            <h3 className="text-xl font-semibold text-slate-900">Overview</h3>
            <div
              className="mt-2 leading-7 text-slate-600"
              dangerouslySetInnerHTML={{
                __html: movie.summary || "No overview available.",
              }}
            />
          </div>

          <button
            type="button"
            onClick={onClose}
            className="mt-6 rounded-lg bg-red-500 px-5 py-2 font-semibold text-white transition hover:bg-red-600"
          >
            ✕ Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
