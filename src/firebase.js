import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDHoftN28xt6b6ql-iLDuhSRXBucS13F4M",
    authDomain: "react-disneyplus-clone.firebaseapp.com",
    projectId: "react-disneyplus-clone",
    storageBucket: "react-disneyplus-clone.appspot.com",
    messagingSenderId: "975091467572",
    appId: "1:975091467572:web:4b9a1c3d83c1c313b1d161",
    measurementId: "G-V1MX8FB9CR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore(); /* access to our firebase cloud firestore where we INPUT all of our data */
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;