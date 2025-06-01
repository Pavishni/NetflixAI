import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrendingSeries } from "../utils/moviesSlice";

const useTrendingSeries = () => {
  const dispatch = useDispatch();
  const getTrendingSeries = async () => {
    const data = await fetch(`https://vercel-tmdb-api.vercel.app/api/series/trendingSeries`);
    const json = await data.json();
    dispatch(addTrendingSeries(json.results));
  };

  useEffect(() => {
    getTrendingSeries();
  }, []);
};

export default useTrendingSeries;
