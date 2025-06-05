import { auth } from "../utils/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import netflixLogo from "../assets/Netflix_Logo_PMS.png";
import userIcon from "../assets/userIcon.png";
import { toggleAISearch } from "../utils/aiSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const aiSearch = useSelector((store) => store.aiSearch.showAISearch);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleAISearch = () => {
    dispatch(toggleAISearch());
  };

  return (
    <div className="w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44 " src={netflixLogo} alt="logo" />
      {user && (
        <div className="flex p-2">
          <button
            className="px-4 py-1 mt-2 h-10 bg-red-800 text-white rounded-lg cursor-pointer"
            onClick={handleAISearch}
          >
            {aiSearch ? "Back to Home" : "AI Search"}
          </button>
          <p className="text-white font-bold m-4 p-1">{user.displayName}</p>
          <img className="w-12 h-12 p-1" alt="UserIcon" src={userIcon} />
          <button
            className="text-white font-bold cursor-pointer"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
