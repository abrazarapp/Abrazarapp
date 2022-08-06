import { getDocs, collection, where, query } from "firebase/firestore";
import { db } from "./firebase";

export const getUser = async (uid) => {
  const q = query(collection(db, "users"), where("uid", "==", uid));
  const docSnap = await getDocs(q);
  if (docSnap.empty) {
    return null;
  }

  if (docSnap.docs[0].exists) {
    return { ...docSnap.docs[0].data(), id: docSnap.docs[0].id };
  } else {
    return null;
  }
};
