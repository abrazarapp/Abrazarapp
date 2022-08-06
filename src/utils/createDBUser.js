import { db } from "./firebase";
import { addDoc, collection } from "firebase/firestore";
import { auth } from "./firebase";

export const createDBUser = async (user) => {
  const { uid } = auth.currentUser;
  try {
    await addDoc(collection(db, "users"), { ...user, uid });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
