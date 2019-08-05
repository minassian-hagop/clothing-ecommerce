import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCTDrDMFMiXdaliTb-8hW3TNKLjYIXfMMU",
    authDomain: "crwn-db-add17.firebaseapp.com",
    databaseURL: "https://crwn-db-add17.firebaseio.com",
    projectId: "crwn-db-add17",
    storageBucket: "",
    messagingSenderId: "83165216543",
    appId: "1:83165216543:web:89921a81336081ca"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;