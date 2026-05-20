import { db } from "./firebase";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  deleteDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";

const outfitsRef = collection(db, "outfits");

export const saveOutfit = async (outfit, userId) => {
  return await addDoc(outfitsRef, {
    ...outfit,
    userId,
    createdAt: serverTimestamp(),
  });
};

export const getUserOutfits = async (userId) => {
  const q = query(outfitsRef, where("userId", "==", userId));
  const snapshot = await getDocs(q);

  return snapshot.docs.map((d) => ({
    id: d.id,
    ...d.data(),
  }));
};

export const deleteOutfit = async (id) => {
  return await deleteDoc(doc(db, "outfits", id));
};