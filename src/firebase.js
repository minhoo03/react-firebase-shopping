import firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyB8IDUo6IaL7_F6Ek17yykiDswq561R6_c",
    authDomain: "react-firebase-shopping.firebaseapp.com",
    projectId: "react-firebase-shopping",
    storageBucket: "react-firebase-shopping.appspot.com",
    messagingSenderId: "224017651931",
    appId: "1:224017651931:web:9765222a5b9667e2dad4fe",
    measurementId: "G-YGCMZPED8H"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);