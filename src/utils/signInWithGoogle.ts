import {  Auth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const signInGoogle = async (auth:Auth) =>{
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider).catch(console.log)
} 