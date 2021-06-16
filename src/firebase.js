import firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyDWLXmD1ikbks1ZZr6xlgB4y8xbD7feNHk",
    authDomain: "react-shopping-8037f.firebaseapp.com",
    projectId: "react-shopping-8037f",
    storageBucket: "react-shopping-8037f.appspot.com",
    messagingSenderId: "750094818417",
    appId: "1:750094818417:web:4fea89328b530ec7f38fd0",
    measurementId: "G-CB8F2BWR85"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase