import { useSelector } from "react-redux";
import { IMG_CDN } from "../utils/constants";

const AiSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store.aiSearch);
  if (!movieNames) return null;

  const getTopResultsPerMovie = (movieResults, movieNames) => {
    if (!movieResults || !movieNames) return [];
    const flatResults = movieResults.flat();
    const topResults = [];

    movieNames.forEach((query) => {
      const lowerQuery = query.toLowerCase().trim();
      const match = flatResults.find((item) => {
        const name = (item.title || item.name || "").toLowerCase().trim();
        return (
          (item.media_type === "movie" || item.media_type === "tv") &&
          name === lowerQuery
        );
      });
      if (match) topResults.push(match);
    });

    return topResults;
  };

  const topResults = getTopResultsPerMovie(movieResults, movieNames);

  return (
    <div className="relative flex flex-col gap-8 p-6 opacity-85">
      {topResults.map((item, index) => (
        <div
          key={index}
          className="bg-black text-white rounded-xl shadow-md p-6"
        >
          <h3 className="text-xl font-bold mb-4">{item.title || item.name}</h3>
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <img
              src={IMG_CDN + item.poster_path}
              alt={item.title || item.name}
              className="justify-center md:w-48 rounded-md object-cover"
            />
            <p className="font-extrabold">Overview:</p>
            <p className="text-gray-400 text-sm md:text-base">
              {item.overview || "No description available."}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AiSuggestions;
