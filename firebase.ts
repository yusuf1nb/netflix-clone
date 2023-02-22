// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6NQc8O-vXpYF5tXXval5IEf9kzbwvIlY",
  authDomain: "netflix-clone-49480.firebaseapp.com",
  projectId: "netflix-clone-49480",
  storageBucket: "netflix-clone-49480.appspot.com",
  messagingSenderId: "834135948460",
  appId: "1:834135948460:web:049e51e55332df80f4b309"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }