import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyD8XLptAcJKc8eGrSSmJo7H0IOCoJwQ35w",
    authDomain: "todoapp-78cf5.firebaseapp.com",
    projectId: "todoapp-78cf5",
    storageBucket: "todoapp-78cf5.appspot.com",
    messagingSenderId: "119029608443",
    appId: "1:119029608443:web:a157e266e92add5b83a55e"
  };
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export {db};



