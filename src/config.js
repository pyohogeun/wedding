import * as firebase from "firebase/app";
import * as firestore from 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCs-9RTqCPmYz-7QLRAASBfvqEfAeqj1Es",
    authDomain: "vipwedding-8b9ae.firebaseapp.com",
    databaseURL: "https://vipwedding-8b9ae.firebaseio.com",
    projectId: "vipwedding-8b9ae",
    storageBucket: "vipwedding-8b9ae.appspot.com",
    messagingSenderId: "904409527001",
    appId: "1:904409527001:web:ee4522f91e83cb9d0644c8",
    measurementId: "G-0SXSWDPE79"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
firebase.firestore();


const db = firebase.firestore();

export default db;