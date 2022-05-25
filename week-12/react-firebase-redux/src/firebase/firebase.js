import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCbQzH1nS5eIn0XfnJGJfe_yurKrLkQ50Q",
    authDomain: "react-redux-firebase-aut-f58ab.firebaseapp.com",
    projectId: "react-redux-firebase-aut-f58ab",
    storageBucket: "react-redux-firebase-aut-f58ab.appspot.com",
    messagingSenderId: "595571993079",
    appId: "1:595571993079:web:369c863c495313fb2ba6f2"
}

export const myFirebase = initializeApp(firebaseConfig)

const baseDb = getFirestore(myFirebase)

export const db = baseDb