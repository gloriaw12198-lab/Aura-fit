import { db } from "./firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

export const createUserProfile = async (user) => {
  if (!user) return;

  await setDoc(doc(db, "users", user.uid), {
    uid: user.uid,
    name: user.displayName || "User",
    email: user.email,
    createdAt: serverTimestamp(),
  });
};