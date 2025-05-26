import Body from "./components/Body";
import "./index.css";
import netflixFavicon from  "./assets/Netflix_favicon.png"
import { Provider } from "react-redux";
import Header from "./components/Header";
import appStore from "./utils/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <link rel="icon" href={netflixFavicon} />
      <Body />
    </Provider>
  );
}

export default App;
