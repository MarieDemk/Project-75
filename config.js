import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBggtWGR0oBTA20vpzBanZcmeV0zIn3OiQ",
  authDomain: "project-71-e51bc.firebaseapp.com",
  projectId: "project-71-e51bc",
  storageBucket: "project-71-e51bc.appspot.com",
  messagingSenderId: "194631665032",
  appId: "1:194631665032:web:163abe2916f8938dce263d"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
