import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCw4vCZ_ogewj-w7wIG2LCgLr-Gl_6zoGk",
  authDomain: "contact-keeper-b50a2.firebaseapp.com",
  databaseURL: "https://contact-keeper-b50a2.firebaseio.com",
  projectId: "contact-keeper-b50a2",
  storageBucket: "contact-keeper-b50a2.appspot.com",
  messagingSenderId: "136350316487",
  appId: "1:136350316487:web:9bf75e6aa3699739"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
