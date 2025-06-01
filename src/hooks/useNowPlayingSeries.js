import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingSeries } from "../utils/moviesSlice";

const useNowPlayingSeries = () => {
  const dispatch = useDispatch();
  const getNowPlayingSeries = async () => {
    const data = await fetch(`https://vercel-tmdb-api.vercel.app/api/series/nowPlayingSeries`);
    const json = await data.json();
    dispatch(addNowPlayingSeries(json.results));
  };

  useEffect(() => {
    getNowPlayingSeries();
  }, []);
};

export default useNowPlayingSeries;
