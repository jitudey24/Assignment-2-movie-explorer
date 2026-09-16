import type { MovieType } from "../type/MovieType";

interface MovieModalProps {
  movie: MovieType;
  onClose: () => void;
}

const MovieModal = ({ movie, onClose }: MovieModalProps) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close movie details"
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-xl text-white hover:bg-red-500"
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
          <h2 className="text-3xl font-bold text-slate-900">{movie.name}</h2>

          <div className="mt-3 flex flex-wrap gap-4 text-sm text-slate-600">
            <span>⭐ Rating: {movie.rating?.average ?? "N/A"}</span>
            <span>📅 Year: {movie.premiered?.slice(0, 4) || "N/A"}</span>
            <span>🎬 Status: {movie.status || "N/A"}</span>
          </div>

          {movie.genres && movie.genres.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {movie.genres.map((genre) => (
                <span
                  key={genre}
                  className="rounded-full bg-pink-100 px-3 py-1 text-sm font-medium text-pink-600"
                >
                  {genre}
                </span>
              ))}
            </div>
          )}

          <div className="mt-5">
            <h3 className="text-xl font-semibold text-slate-900">Overview</h3>
            <div
              className="mt-2 leading-7 text-slate-600"
              dangerouslySetInnerHTML={{
                __html: movie.summary || "No summary available.",
              }}
            />
          </div>

          <div className="mt-5 grid gap-3 text-sm text-slate-600 md:grid-cols-2">
            <p><strong>Language:</strong> {movie.language || "N/A"}</p>
            <p><strong>Runtime:</strong> {movie.runtime ? `${movie.runtime} minutes` : "N/A"}</p>
            <p><strong>Network:</strong> {movie.network?.name || "N/A"}</p>
            <p><strong>Type:</strong> {movie.type || "N/A"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
