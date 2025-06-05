import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPopularSeries } from "../utils/moviesSlice";
import { popularSeries } from "../utils/constants";

const usePopularSeries = () => {
  const dispatch = useDispatch();
  const popularSeriesStore = useSelector((store) => store.movies.popularSeries);
  const getPopularSeries = async () => {
    const data = await fetch(popularSeries);
    const json = await data.json();
    dispatch(addPopularSeries(json.results));
  };

  useEffect(() => {
    !popularSeriesStore && getPopularSeries();
  }, []);
};

export default usePopularSeries;
