import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const series = useSelector((store) => store.movies?.trendingSeries);
  if (!series) return;
  const mainSeries = series[0];
  const { original_name, overview, id } = mainSeries;
  return (
    <div>
      <VideoTitle title={original_name} overview={overview} />
      <VideoBackground seriesId={id} />
    </div>
  );
};

export default MainContainer;
