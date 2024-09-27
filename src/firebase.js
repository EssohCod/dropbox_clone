import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

const app = firebase.initializeApp({
  apiKey: "AIzaSyArbmZDvfgU8dZ6MS79FtHNg9jDzbGi8Uw",
  authDomain: "my-dropbox-clone-16a05.firebaseapp.com",
  projectId: "my-dropbox-clone-16a05",
  storageBucket: "my-dropbox-clone-16a05.appspot.com",
  messagingSenderId: "1094090779865",
  appId: "1:1094090779865:web:ad36b37854e6779d3862c8",
  measurementId: "G-TNYCZWB3GG"
})

const firestore = app.firestore()


export const database = {
  folders: firestore.collection("folders"),
  files: firestore.collection("files"),
  formatDoc: doc => {
    return { id: doc.id, ...doc.data() }
  },
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
}
export const storage = app.storage()
export const auth = app.auth()
export default app

