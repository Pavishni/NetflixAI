import AiSearchBar from "./AiSearchBar";
import AiSuggestions from "./AiSuggestions";
import netflixBackground from "../assets/Netflix_background.png";

const AiSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          className="h-screen md:h-screen w-screen object-cover"
          src={netflixBackground}
          alt="logo"
        />
      </div>
      <div className="">
        <AiSearchBar />
        <AiSuggestions />
      </div>
    </>
  );
};

export default AiSearch;
