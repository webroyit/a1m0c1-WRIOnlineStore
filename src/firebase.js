import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA-t8Crarf9ddG5Gpn8iRpCtyZZooUo6-I",
    authDomain: "online-store-f68a2.firebaseapp.com",
    projectId: "online-store-f68a2",
    storageBucket: "online-store-f68a2.appspot.com",
    messagingSenderId: "405894377182",
    appId: "1:405894377182:web:280e95b7ed605336a09c4f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };