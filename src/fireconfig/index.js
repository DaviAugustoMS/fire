import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


let firebaseConfig = {
  apiKey: "AIzaSyDoBI-CiQqK7jZ350rMM2KfDLMqzy5thyA",
  authDomain: "react-fire-aa9ec.firebaseapp.com",
  databaseURL: "https://react-fire-aa9ec.firebaseio.com",
  projectId: "react-fire-aa9ec",
  storageBucket: "react-fire-aa9ec.appspot.com",
  messagingSenderId: "827806798151",
  appId: "1:827806798151:web:99851289061c6c3fb03c62",
  measurementId: "G-9YEQLZTYXT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;