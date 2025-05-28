import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { watchModeAPI } from "../../env";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlaying = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      `https://api.watchmode.com/v1/list-titles/?apiKey=${watchModeAPI}&list_id=new_releases`
    );
    const json = await data.json();

    const movieIds = json.titles
      .filter((item) => item.type === "movie")
      .slice(0, 2)
      .map((item) => item.id);

    // Fetch all details in parallel
    const detailPromises = movieIds.map((id) =>
      fetch(
        `https://api.watchmode.com/v1/title/${id}/details/?apiKey=${watchModeAPI}`
      ).then((res) => res.json())
    );

    const movieDetails = await Promise.all(detailPromises);

    // Filter out adult-rated movies (e.g., R or NC-17)
    const safeMovies = movieDetails.filter(
      (movie) =>
        movie.us_rating !== "R" &&
        movie.us_rating !== "NC-17" &&
        movie.user_rating !== null // ensure rating exists
    );

    const sortedMovies = safeMovies.sort(
      (a, b) => b.user_rating - a.user_rating
    );

    dispatch(addNowPlayingMovies(sortedMovies));

  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlaying;
