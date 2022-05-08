import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    
        apiKey: "AIzaSyBHL6LavaO1FFFMfEb0yF09qfcJZtlKZeU",
        authDomain: "team-voting-app-67.firebaseapp.com",
        databaseURL: "https://team-voting-app-67-default-rtdb.firebaseio.com",
        projectId: "team-voting-app-67",
        storageBucket: "team-voting-app-67.appspot.com",
        messagingSenderId: "991202747587",
        appId: "1:991202747587:web:064ddc4582f3be8df6ee76"
      };
      
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();