import { auth } from "./firebase";
import { signInAnonymously, browserSessionPersistence } from "firebase/auth";

export const signInAnon = async () => {
  auth.setPersistence(auth, browserSessionPersistence);

  signInAnonymously(auth)
    .then(() => {
      return auth.currentUser;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};
