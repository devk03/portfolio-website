
import { onAuthStateChanged, signOut } from "firebase/auth";

export const handleSignOut = (auth:any ,{isAdmin, setIsAdmin}:any) => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("Signed out successfully");
        setIsAdmin(false);
      })
      .catch((error) => {
        // An error happened.
        console.error("Sign out error", error);
      });
  };