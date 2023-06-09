import axios from "axios";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //!Login With Google
  const googleProvider = new GoogleAuthProvider();

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

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)

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


      //get and set token
      if (currentUser) {
        axios.post('http://localhost:5000/jwt', { email: currentUser.email })
          .then(data => {
            console.log(data.data.token);
            localStorage.setItem('access-token', data.data.token)
          })
      }
      else {
        localStorage.removeItem('access-token')
      }

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
    updateUserProfile,
    googleSignIn
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;