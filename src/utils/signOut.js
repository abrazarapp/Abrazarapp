import { auth } from "./firebase";
import { signOut } from "firebase/auth";

export const signOutUser = () => {
  signOut(auth).then(() => {
    window.location.replace("/");
  });
};
