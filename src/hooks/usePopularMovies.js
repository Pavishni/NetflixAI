import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { popularMovies } from "../utils/constants";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMoviesStore = useSelector((store) => store.movies.popularMovies);
  const getPopularMovies = async () => {
    const data = await fetch(popularMovies);
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    !popularMoviesStore && getPopularMovies();
  }, []);
};

export default usePopularMovies;
