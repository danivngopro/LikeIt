import "./header.css";
import React, { useState } from "react";
import { authentication } from "../Firebase/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function singInWithFirebase() {
  let google_provider = new GoogleAuthProvider();
  signInWithPopup(authentication, google_provider)
    .then((res) => {
      console.log(res.user.uid);
    })
    .catch((err) => {
      console.log(err);
    });
}

function SignIn() {
  return (
    <button className="button-2" onClick={singInWithFirebase}>
      sign in with google
    </button>
  );
}

function signOutOfGoogle() {
  authentication.signOut();
}

function SignOut() {
  return (
    <button className="button-2" onClick={signOutOfGoogle}>
      sign Out
    </button>
  );
}

function SignInHeader() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  authentication.onAuthStateChanged((user) => {
    if (user) return setIsUserSignedIn(true);
    return setIsUserSignedIn(false);
  });

  if (!isUserSignedIn) return <SignIn></SignIn>;
  else return <SignOut></SignOut>;
}

function Header() {
  return <SignInHeader></SignInHeader>
}

export default Header;
