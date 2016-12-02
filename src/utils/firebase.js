import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCLEnLFoEBbg3uqlyYIjNdryzQZD5j4hoQ",
  authDomain: "tripfolio-67b0b.firebaseapp.com",
  databaseURL: "https://tripfolio-67b0b.firebaseio.com",
  storageBucket: "tripfolio-67b0b.appspot.com",
  messagingSenderId: "602877533405"
  };

firebase.initializeApp(config);

export default firebase;
