import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/914ad279-199e-4095-9c10-2409dc9e5e1b/web/IN-en-20250519-TRIFECTA-perspective_8f1ca896-9e49-4a4e-90f0-22fc49650bd9_large.jpg"
          alt="MovieBackground"
        />
      </div>
      <form className="w-3/12 absolute p-12 my-40 mx-auto right-0 left-0 bg-black opacity-90 rounded-xl">
        <h1 className="font-bold text-3xl text-white my-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-4 text-white bg-gray-900 opacity-90 font-medium rounded-xs w-full"
          />
        )}
        <input
          type="text"
          placeholder="Email"
          className="p-2 my-4 text-white bg-gray-900 opacity-90 font-medium rounded-xs w-full"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-4 text-white bg-gray-900 opacity-90 font-medium rounded-xs w-full"
        />
        <button className="p-2 my-6 text-white bg-red-600 rounded-xs font-medium w-full cursor-pointer">
          {isSignInForm ? "Sign In" : "Get started"}
        </button>
        <p className="text-white cursor-pointer" onClick={toggleSignIn}>
          {isSignInForm
            ? "New to Netflix? Sign up now"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
