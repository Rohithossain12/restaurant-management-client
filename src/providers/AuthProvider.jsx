import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const [theme, setTheme] = useState("light");

  const handleToggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      if (currentUser?.email) {
        const user = { email: currentUser.email };

        axios
          .post("https://server-nine-gold.vercel.app/jwt", user, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res);
            setLoading(false);
          });
      } else {
        axios
          .post(
            "https://server-nine-gold.vercel.app/logout",
            {},
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            console.log("logout", res.data);
            setLoading(false);
          });
      }
    });
    return () => unSubscribe();
  }, []);

  const authInfo = {
    createUser,
    signIn,
    signInWithGoogle,
    logOut,
    user,
    setUser,
    loading,
    setLoading,
    errorMessage,
    setErrorMessage,
    handleToggleTheme,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
