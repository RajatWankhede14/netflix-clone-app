import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB6ig2vOi7GN_XblI0fBNUuPU8App2O1Bs",
    authDomain: "netflix-build-a8d1e.firebaseapp.com",
    projectId: "netflix-build-a8d1e",
    storageBucket: "netflix-build-a8d1e.appspot.com",
    messagingSenderId: "832035596905",
    appId: "1:832035596905:web:d3247aae4fea48e090d0f8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export { auth }
  export default db; 

  