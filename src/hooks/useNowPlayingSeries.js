import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingSeries } from "../utils/moviesSlice";
import { nowPlayingSeries } from "../utils/constants";

const useNowPlayingSeries = () => {
  const dispatch = useDispatch();
  const nowPlayingSeriesStore = useSelector((store) => store.nowPlayingSeries);
  const getNowPlayingSeries = async () => {
    const data = await fetch(nowPlayingSeries);
    const json = await data.json();
    dispatch(addNowPlayingSeries(json.results));
  };

  useEffect(() => {
    !nowPlayingSeriesStore && getNowPlayingSeries();
  }, []);
};

export default useNowPlayingSeries;
