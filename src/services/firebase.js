import firebase from 'firebase/compat/app';
import "firebase/compat/database";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB5EWu4KufKhd3UgMd36MLF40vUaq-lUnM",
    authDomain: "first-project-c623f.firebaseapp.com",
    projectId: "first-project-c623f",
    storageBucket: "first-project-c623f.appspot.com",
    messagingSenderId: "110859615199",
    appId: "1:110859615199:web:8987e16b989ccefd47e26a"
};

const firebaseDb = firebase.initializeApp(firebaseConfig);
export const db = firebaseDb.database().ref();
export const auth = firebase.auth();