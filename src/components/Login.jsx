import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidation } from "../utils/checkValidation";
import netflixBackground from "../assets/Netflix_background.png";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };
  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const handleSubmit = () => {
    const message = checkValidation(
      fullName?.current?.value,
      email?.current?.value,
      password?.current?.value
    );
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={netflixBackground} alt="MovieBackground" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 my-40 mx-auto right-0 left-0 bg-black opacity-90 rounded-xl"
      >
        <h1 className="font-bold text-3xl text-white my-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            ref={fullName}
            placeholder="Full Name"
            className="p-2 my-4 text-white bg-gray-900 opacity-90 font-medium rounded-xs w-full"
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email"
          className="p-2 my-4 text-white bg-gray-900 opacity-90 font-medium rounded-xs w-full"
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-2 my-4 text-white bg-gray-900 opacity-90 font-medium rounded-xs w-full"
        />
        <p className="text-red-600">{errorMessage}</p>
        <button
          className="p-2 my-6 text-white bg-red-600 rounded-xs font-medium w-full cursor-pointer"
          onClick={handleSubmit}
        >
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
