import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBOngbG6PY9yt2ZozsdydZNYzm1m0KwFB8",
  authDomain: "appcondominio-21b58.firebaseapp.com",
  databaseURL: "https://appcondominio-21b58-default-rtdb.firebaseio.com",
  projectId: "appcondominio-21b58",
  storageBucket: "appcondominio-21b58.appspot.com",
  messagingSenderId: "306715766473",
  appId: "1:306715766473:web:fb308adf3fc627ad5e6718",
  measurementId: "G-TTRTS6BX6L",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database };
