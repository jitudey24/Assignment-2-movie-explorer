const MovieCard = ({ movie, onSeeDetails }) => {
  const show = movie.show || movie;

  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">

      {/* Movie Poster */}
      <img
        src={
          show.image?.medium ||
          "https://via.placeholder.com/300x450?text=No+Image"
        }
        alt={show.name}
        className="h-80 w-full object-cover"
      />

      {/* Movie Information */}
      <div className="p-5">
        <h2 className="truncate text-xl font-bold text-slate-800">
          {show.name}
        </h2>

        <div className="mt-3 flex items-center justify-between text-sm text-slate-500">
          <span>
            📅 {show.premiered?.slice(0, 4) || "N/A"}
          </span>

          <span>
            ⭐ {show.rating?.average || "N/A"}
          </span>
        </div>

        {/* See Details Button */}
        <button
          onClick={() => onSeeDetails(show)}
          className="mt-5 w-full rounded-lg bg-slate-900 px-4 py-2.5 font-semibold text-white transition hover:bg-pink-600"
        >
          See Details
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
