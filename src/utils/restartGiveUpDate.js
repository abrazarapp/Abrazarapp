import { doc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";

export const restartGiveUpDate = async ({ id, credentials, ...user }) => {
  try {
    const userRef = doc(db, "users", id);
    await updateDoc(userRef, { dateFrom: user.dateFrom });
    return true;
  } catch {
    console.log("error restarting giveUpDate");
    return false;
  }
};
