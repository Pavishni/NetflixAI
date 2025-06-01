import { useDispatch } from "react-redux";
import { addTrailerVideoSeries } from "../utils/moviesSlice";
import { useEffect } from "react";

const useSeriesTrailer = (seriesId) => {
  const dispatch = useDispatch();
  const getSeriesVideos = async () => {
    const data = await fetch(
      `https://vercel-tmdb-api.vercel.app/api/series/seriesVideos?seriesId=${seriesId}`
    );
    const json = await data.json();
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideoSeries(trailer));
  };
  useEffect(() => {
    getSeriesVideos();
  }, []);
};

export default useSeriesTrailer;
