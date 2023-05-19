import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../../util/firebase/firebase.config";
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const [redirectLink, setRedirectLink] = useState("/");
  const apiDomain = "http://localhost:5000/";

  //login with email and password
  const createUSerWithEmail = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //log in with google
  const logInWithGoogle = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  };
  //login with email
  const logInWithEmail = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //log out user
  const logOut = () => {
    return signOut(auth);
  };

  //observe user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoader(false);
      if (currentUser?.email) {
        fetch(`${apiDomain}jwt`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ email: currentUser?.email }),
        })
          .then(res => res.json())
          .then(data => {
            localStorage.setItem("access_token", data.token);
          })
          .catch(err => console.log(err));
      }
    });
    return () => {
      return unsubscribe();
    };
  }, []);
  const data = {
    apiDomain,
    createUSerWithEmail,
    user,
    loader,
    logInWithGoogle,
    logOut,
    logInWithEmail,
    redirectLink,
    setRedirectLink,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
