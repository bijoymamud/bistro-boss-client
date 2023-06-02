import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //!creating user

  const createUser = (email, password) => {
    //user jokh create kora hbe tokh loading hbe
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }

  //!login

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }


  //!logOut

  const logOut = () => {
    setLoading(true);
    return signOut(auth)
  }

  //update userinfo

  const updateUserProfile = (name, photo) => {

    return updateProfile(auth.currentUser, {
      displayName: "name", photoURL: photo
    })

  }

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      console.log('current user', currentUser);
      setLoading(false);
    })
    return () => {
      return unsubscribe();
    }
  }, [])

  const authInfo = {

    user,
    loading,
    createUser,
    signIn,
    logOut,
    updateUserProfile
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;