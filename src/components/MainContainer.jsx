import { useSelector } from "react-redux"
import VideoBackground from "./VideoBackground"
import VideoTitle from "./VideoTitle"

const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    if(!movies) return;
    const mainMovie = movies[0];
    console.log(mainMovie);
    const{original_title, plot_overview, trailer} = mainMovie
  return (
    <div>
        <VideoTitle title={original_title} overview={plot_overview}/>
        <VideoBackground trailer={trailer}/>
    </div>
  )
}

export default MainContainer