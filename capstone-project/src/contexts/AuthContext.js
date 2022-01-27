import React, { useContext, useEffect, useState } from "react";
import { auth, createUser, authStateChanged } from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [signedIn, setSignedIn] = useState(false);

  function signup(email, password) {
    return createUser(auth, email, password)
      .then((userCredential) => {
        setCurrentUser(userCredential.user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }

  useEffect(() => {
    const unsubscribe = authStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setSignedIn(false);
      }
    });
  }, []);

  const value = {
    currentUser,
    signup,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
