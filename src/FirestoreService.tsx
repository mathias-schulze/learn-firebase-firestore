import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDd0t8fC92HZ3QrUG83qfDX5Jpl8cNb5gE",
  authDomain: "msz-firebase-test.firebaseapp.com",
  projectId: "msz-firebase-test",
  storageBucket: "msz-firebase-test.appspot.com",
  messagingSenderId: "162770684564",
  appId: "1:162770684564:web:87a68408808c8f7cb98281",
  measurementId: "G-2DK3CSEW53"
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export const getUsers = () => {
  return db.collection('users')
}

export const addUser = (newUser: any) => {
    db.collection('users').add({
         firstname: newUser.firstname,
         lastname: newUser.lastname,
         mail: newUser.mail
    });
}
