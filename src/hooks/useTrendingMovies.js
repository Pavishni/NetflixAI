import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrendingMovies } from "../utils/moviesSlice";
import { trendingMovies } from "../utils/constants";

const useTrendingMovies = () => {
  const dispatch = useDispatch();
  const trendingMoviesStore = useSelector(
    ((store) => store.movies.trendingMovies)
  );
  const getTrendingMovies = async () => {
    const data = await fetch(trendingMovies);
    const json = await data.json();
    dispatch(addTrendingMovies(json.results));
  };

  useEffect(() => {
    !trendingMoviesStore && getTrendingMovies();
  }, []);
};

export default useTrendingMovies;
