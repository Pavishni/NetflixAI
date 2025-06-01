import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTrendingMovies from "../hooks/useTrendingMovies"
import useNowPlayingSeries from "../hooks/useNowPlayingSeries";
import usePopularSeries from "../hooks/usePopularSeries";
import useTrendingSeries from "../hooks/useTrendingSeries"



const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useNowPlayingSeries();
  usePopularSeries();
  useTrendingSeries();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
