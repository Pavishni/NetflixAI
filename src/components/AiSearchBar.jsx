import { useRef } from "react";
import { generateSuggestions } from "../utils/generate";
import { useDispatch } from "react-redux";
import { addAiResults } from "../utils/aiSlice";
import { searchQueryURL } from "../utils/constants";

const AiSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchTMDB = async (query) => {
    const data = await fetch(searchQueryURL + query);
    const json = await data.json();
    return json.results;
  };

  const handleAISearch = async () => {
    const result = await generateSuggestions(searchText.current.value);
    const tmdbresults = await Promise.all(
      result.map((suggestion) => searchTMDB(suggestion))
    );
    dispatch(addAiResults({ movieNames: result, movieResults: tmdbresults }));
  };
  return (
    <div className="relative pt-[15%] flex justify-center">
      <form
        className="grid grid-cols-12 w-1/2"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="bg-white col-span-9 rounded-lg p-4 m-4 hover:border-1"
          placeholder="What would you like to watch?"
        />
        <button
          className="bg-red-800 text-white col-span-3 rounded-lg px-4 py-2 my-4 cursor-pointer hover:border-1"
          onClick={handleAISearch}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default AiSearchBar;
