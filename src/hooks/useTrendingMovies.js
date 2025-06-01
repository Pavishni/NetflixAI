import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrendingMovies } from "../utils/moviesSlice";

const useTrendingMovies = () => {
  const dispatch = useDispatch();
  const getTrendingMovies = async () => {
    const data = await fetch(`https://vercel-tmdb-api.vercel.app/api/movies/trendingMovies`);
    const json = await data.json();
    dispatch(addTrendingMovies(json.results));
  };

  useEffect(() => {
    getTrendingMovies();
  }, []);
};

export default useTrendingMovies;
