// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyClOD-cc9a1RRcXnD-gsA4F0zRbfomJNRs",
    authDomain: "a-clone-486cd.firebaseapp.com",
    databaseURL: "https://a-clone-486cd.firebaseio.com",
    projectId: "a-clone-486cd",
    storageBucket: "a-clone-486cd.appspot.com",
    messagingSenderId: "1054957988184",
    appId: "1:1054957988184:web:6ff81b9742e73da4addd2d",
    measurementId: "G-BSHD8F9WRF"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()
  const auth = firebase.auth();

  export {db, auth}