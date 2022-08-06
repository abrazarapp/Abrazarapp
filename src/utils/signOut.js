import { auth } from "./firebase";
import { signOut } from "firebase/auth";

export const signOutUser = () => {
  return signOut(auth);
};
