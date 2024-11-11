import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

export const AuthContext  = createContext()

const AuthProvider = ({children}) => {

  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true)

  const createUser = (email, password)=>{
    setLoader(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const logInUser=(email, password)=>{
    setLoader(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

 useEffect(()=>{
 const unsubcribe = onAuthStateChanged(auth, currentUser=>{
       setUser(currentUser)
       setLoader(false)
  })

  return ()=>{
    unsubcribe()
  }

 },[]);

 const signOutUser =()=>{
     return signOut(auth)
 }

 const signWithGoogle=()=>{
     const googleProvider = new GoogleAuthProvider()

    return signInWithPopup(auth, googleProvider)
 }

 const updateUserProfile =(name)=>{
     return updateProfile(auth.currentUser,{displayName:name})  
 }



   const authInfo = {
    createUser,
    logInUser,
    user,
    signOutUser,
    loader,
    signWithGoogle,
    updateUserProfile
   }

    return (
        <AuthContext.Provider value={authInfo}>
          {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;