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
  const apiDomain = "http://localhost:5000/";

  //login with email and password
  const createUSerWithEmail = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //log in with google
  const logInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  //login with email
  const logInWithEmail = (email, password) => {
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
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
