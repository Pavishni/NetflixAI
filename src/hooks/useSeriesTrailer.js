import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideoSeries } from "../utils/moviesSlice";
import { useEffect } from "react";
import { seriesVideos } from "../utils/constants";

const useSeriesTrailer = (seriesId) => {
  const dispatch = useDispatch();
  const trailerVideoSeries = useSelector((store) =>store.movies.trailerVideoSeries)
  const getSeriesVideos = async () => {
    const data = await fetch(seriesVideos + seriesId);
    const json = await data.json();
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideoSeries(trailer));
  };
  useEffect(() => {
    !trailerVideoSeries && getSeriesVideos();
  }, []);
};

export default useSeriesTrailer;
