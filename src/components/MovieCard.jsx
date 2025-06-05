import { IMG_CDN } from "../utils/constants";

const Moviecard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className="w-40 pr-4 hover:scale-110 duration-300 ease-in-out shadow-lg">
      <img alt="Movie Card" src={IMG_CDN + posterPath}/>
    </div>
  )
}

export default Moviecard;