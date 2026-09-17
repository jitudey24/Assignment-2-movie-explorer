import type { MovieType } from "../types/MovieType";

interface MovieCardProps {
  movie: MovieType;
  onSeeDetails: (movie: MovieType) => void;
}

const MovieCard = ({ movie, onSeeDetails }: MovieCardProps) => {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
      <img
        src={movie.image?.medium || "https://via.placeholder.com/300x450?text=No+Image"}
        alt={movie.name}
        className="h-80 w-full object-cover"
      />

      <div className="p-5">
        <h2 className="truncate text-xl font-bold text-slate-800">{movie.name}</h2>

        <div className="mt-3 flex items-center justify-between text-sm text-slate-500">
          <span>📅 {movie.premiered?.slice(0, 4) || "N/A"}</span>
          <span>⭐ {movie.rating?.average ?? "N/A"}</span>
        </div>

        <button
          type="button"
          onClick={() => onSeeDetails(movie)}
          className="relative z-20 mt-5 block w-full cursor-pointer rounded-lg bg-slate-900 px-4 py-2.5 font-semibold text-white transition hover:bg-pink-600"
        >
          See Details
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
