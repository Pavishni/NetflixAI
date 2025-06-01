import Moviecard from "./MovieCard";

const MoviesList = ({ title, movies }) => {
  console.log("First movie:", movies);
  return (
    <div className="px-6">
      <h1 className="text-xl font-bold py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll overflow-y-hidden">
        <div className="flex">
          {movies?.map((movie) => (
            <Moviecard key={movie?.id} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
