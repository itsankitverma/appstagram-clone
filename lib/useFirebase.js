import React, { useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { app } from "./firebase-config";
import { useRouter } from "next/router";
import { getFirestore } from "firebase/firestore";

function useFirebase() {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const router = useRouter();
  const [user, setUsers] = useState();
  const db = getFirestore();
  React.useEffect(() => {
    onAuthStateChanged(auth, (users) => {
      if (users !== undefined) {
        setUsers(users);
      }
    });
  }, []);

  const signOutWithGoogle = () => {
    signOut(auth)
      .then(() => {
        router.push("/login");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleLoginWitgGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        router.push("/username");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };
  return {
    handleLoginWitgGoogle,
    user,
    signOutWithGoogle,
    db,
  };
}

export default useFirebase;
