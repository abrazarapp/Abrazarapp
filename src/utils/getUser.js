import { getDocs, collection, where } from "firebase/firestore";
import { db } from "./firebase";

export const getUser = async (uid) => {
  const usersRef = collection(db, "users");
  const docSnap = await getDocs(usersRef, where("uid", "==", uid));
  if (docSnap.empty) {
    return null;
  }

  if (docSnap.docs[0].exists) {
    return { ...docSnap.docs[0].data(), id: docSnap.docs[0].id };
  } else {
    return null;
  }
};
