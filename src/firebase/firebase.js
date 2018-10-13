import firebase from 'firebase/app';
import 'firebase/auth';

var config = {
  apiKey: "AIzaSyAWr8lH4NILK9YEBBehMy1WhVIWY5aJzcc",
  authDomain: "portfolio-485d3.firebaseapp.com",
  databaseURL: "https://portfolio-485d3.firebaseio.com",
  projectId: "portfolio-485d3",
  storageBucket: "portfolio-485d3.appspot.com",
  messagingSenderId: "255836842342"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};