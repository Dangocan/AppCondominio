import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB1STZRy-xWXiUruq6xcL8w58JIZieWJTo",
  authDomain: "appcondominio-d54ad.firebaseapp.com",
  projectId: "appcondominio-d54ad",
  storageBucket: "appcondominio-d54ad.appspot.com",
  messagingSenderId: "7183906306",
  appId: "1:7183906306:web:3d5bf0e0153955c054d91b",
  measurementId: "G-DNFXKBKJ6B",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database };
