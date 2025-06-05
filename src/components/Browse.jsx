import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import AiSearch from "./AiSearch";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useNowPlayingSeries from "../hooks/useNowPlayingSeries";
import usePopularSeries from "../hooks/usePopularSeries";
import useTrendingSeries from "../hooks/useTrendingSeries";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useNowPlayingSeries();
  usePopularSeries();
  useTrendingSeries();

  const showAiSearch = useSelector((store) => store.aiSearch.showAISearch);
  return (
    <div>
      <Header />
      {showAiSearch ? (
        <AiSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
