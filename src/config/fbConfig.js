
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/functions'
var firebaseConfig = {
   apiKey: "AIzaSyBMuEMdaI7HvkZNxhqqQwOtjo-rWZFsAks",
   authDomain: "practice-project-c4134.firebaseapp.com",
   databaseURL: "https://practice-project-c4134.firebaseio.com",
   projectId: "practice-project-c4134",
   storageBucket: "practice-project-c4134.appspot.com",
   messagingSenderId: "976606395874",
   appId: "1:976606395874:web:b3c7528b1b04e231f68dbb",
   measurementId: "G-WFE0W22PQF"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 //firebase.analytics();
 firebase.firestore().settings({timestampsInSnapshots:true});
export default firebase;
