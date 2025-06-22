
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkVXGG6lH3vvZB8-NRwkLN2qAfJ_h_HNE",
  authDomain: "ordering-app-81160.firebaseapp.com",
  projectId: "ordering-app-81160",
  storageBucket: "ordering-app-81160.appspot.com",
  messagingSenderId: "353651481287",
  appId: "1:353651481287:web:1fa5851e29205cb7afbce2"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });





// Initialize Firebase
