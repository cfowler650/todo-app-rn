import firebase from 'firebase';
import 'firebase/firestore';

let config = {
  apiKey: "AIzaSyDrfLcrGFlhgKL27NPp7-EfHVla1GfQwy0",
  authDomain: "todo-app-native.firebaseapp.com",
  databaseURL: "https://todo-app-native.firebaseio.com",
  projectId: "todo-app-native",
  storageBucket: "todo-app-native.appspot.com",
  messagingSenderId: "507284385441",
  appId: "1:507284385441:web:5b51b8588e43cd8fd10ae0"
}

// Initialize Firebase
let app = firebase.initializeApp(config);

export const db = firebase.firestore()

export default firebase;


