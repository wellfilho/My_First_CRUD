import firebase from "firebase/app";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyDaHSTMLJbXZ2ytCUzxlYfQqiGFoWEyfcQ",
  authDomain: "my-first-crud-c4f1e.firebaseapp.com",
  projectId: "my-first-crud-c4f1e",
  storageBucket: "my-first-crud-c4f1e.appspot.com",
  messagingSenderId: "989777666715",
  appId: "1:989777666715:web:40b9b35673b23a96c39c3e",
};

const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();
