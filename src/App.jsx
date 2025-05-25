import Body from "./components/Body";
import "./index.css";
import netflixFavicon from  "./assets/Netflix_favicon.png"

function App() {
  return (
    <div>
      <link rel="icon" href={netflixFavicon} />
      <Body />
    </div>
  );
}

export default App;
