import { db } from "../services/firebase";
import { collection, addDoc } from "firebase/firestore";

export const testFirestoreWrite = async () => {
  try {
    const docRef = await addDoc(collection(db, "test"), {
      message: "AuraFit Firestore working!",
      createdAt: new Date(),
    });

    console.log("Firestore SUCCESS:", docRef.id);
  } catch (error) {
    console.error("Firestore ERROR:", error);
  }
};