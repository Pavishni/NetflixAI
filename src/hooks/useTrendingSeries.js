import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrendingSeries } from "../utils/moviesSlice";
import { trendingSeries } from "../utils/constants";

const useTrendingSeries = () => {
  const dispatch = useDispatch();
  const trendingSeriesStore = useSelector(
    (store) => store.movies.trendingSeries
  );
  const getTrendingSeries = async () => {
    const data = await fetch(trendingSeries);
    const json = await data.json();
    dispatch(addTrendingSeries(json.results));
  };

  useEffect(() => {
    !trendingSeriesStore && getTrendingSeries();
  }, []);
};

export default useTrendingSeries;
