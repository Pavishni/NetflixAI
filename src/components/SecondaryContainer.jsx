import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.trendingSeries && (
      <div className="bg-black">
        <div className="pt-[40%] md:p-0 -mt-36 relative z-20 md:mx-5">
        <MoviesList title={"Trending Shows"} movies={movies?.trendingSeries} />
        <MoviesList title={"Trending Movies"} movies={movies?.trendingMovies} />
        <MoviesList title={"Popular Shows"} movies={movies?.popularSeries} />
        <MoviesList title={"Popular Movies"} movies={movies?.popularMovies} />
        <MoviesList title={"Now playing Shows"} movies={movies?.nowPlayingSeries} />
        <MoviesList title={"Now playing Movies"} movies={movies?.nowPlayingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
