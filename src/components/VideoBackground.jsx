import { useSelector } from "react-redux";
import useSeriesTrailer from "../hooks/useSeriesTrailer";

const VideoBackground = ({ seriesId }) => {
  const trailerVideo = useSelector((store) => store.movies.trailerVideoSeries);
  useSeriesTrailer(seriesId);
  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=0&mute=1&vq=medium&playlist=${trailerVideo?.key}`}
        title="YouTube video player"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
