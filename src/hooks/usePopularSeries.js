import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularSeries } from "../utils/moviesSlice";

const usePopularSeries = () => {
  const dispatch = useDispatch();
  const getPopularSeries = async () => {
    const data = await fetch(`https://vercel-tmdb-api.vercel.app/api/series/popularSeries`);
    const json = await data.json();
    dispatch(addPopularSeries(json.results));
  };

  useEffect(() => {
    getPopularSeries();
  }, []);
};

export default usePopularSeries;
