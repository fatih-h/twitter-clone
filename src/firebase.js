import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwCXu6Vu_rUluSOPN5F0OX0_CPx-sGsi8",
  authDomain: "twitter-clone-3ab94.firebaseapp.com",
  projectId: "twitter-clone-3ab94",
  storageBucket: "twitter-clone-3ab94.appspot.com",
  messagingSenderId: "525962903143",
  appId: "1:525962903143:web:9fdb3b84954bc861935ec2",
  measurementId: "G-EPCK3GYR8S"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;