import { createContext, useEffect, useState } from "react";
import app from "../firebase/fairebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  GithubAuthProvider,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  // console.log("from AuthProvider:", loading,user);

  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const handelGoogleLogin = () => {
    signInWithPopup(auth, googleProvider);

  };

const handleGithubLogin =()=>(
    signInWithPopup(auth,githubProvider)
    .then(res=>setUser(res)));

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  
  const handelUpdateUserProfile = (updateData) => {
    return updateProfile(auth.currentUser, updateData);
  };


  const authInfo = {
    user,
    setUser,
    createNewUser,
    handelGoogleLogin,
    handleGithubLogin,
    logOut,
    userLogin,
    loading,
    handelUpdateUserProfile
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
