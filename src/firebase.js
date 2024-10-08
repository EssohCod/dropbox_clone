import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const app = firebase.initializeApp({
  apiKey: "AIzaSyA08-tnMC_z26W00bSkK0yFT2DOUQzxTn4",
  authDomain: "baseclonebox.firebaseapp.com",
  projectId: "baseclonebox",
  storageBucket: "baseclonebox.appspot.com",
  messagingSenderId: "576434653119",
  appId: "1:576434653119:web:4b06a52599aa300184030a",
  measurementId: "G-XEEFGK4X5X"
});

// Firestore database instance
const firestore = app.firestore();

export const database = {
  folders: firestore.collection("folders"),
  files: firestore.collection("files"),
  users: firestore.collection("users"),
  formatDoc: (doc) => {
    return { id: doc.id, ...doc.data() };
  },
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
};

// Firebase services
export const storage = app.storage();
export const auth = app.auth();

export default app;
