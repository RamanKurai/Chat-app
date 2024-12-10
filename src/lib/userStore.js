import { doc, getDoc } from "firebase/firestore";
import { create } from "zustand";
import { db } from "./firebase";

export const useUserStore = create((set) => ({
  currentUser: null,
  isLoading: true,
  fetchUserInfo: async (uid) => {
    console.log("Fetching user info for UID:", uid);
    if (!uid) {
      console.log("No UID provided. Setting currentUser to null.");
      return set({ currentUser: null, isLoading: false });
    }

    try {
      const docRef = doc(db, "user", uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("User data retrieved:", docSnap.data());
        set({ currentUser: docSnap.data(), isLoading: false });
      } else {
        console.log("User document does not exist in Firestore.");
        set({ currentUser: null, isLoading: false });
      }
    } catch (error) {
      console.error("Error fetching user info:", error);
      set({ currentUser: null, isLoading: false });
    }
  },
}));
