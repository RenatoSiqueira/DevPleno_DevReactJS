import firebase from 'firebase/app'
import 'firebase/database'

const config = {
    apiKey: "AIzaSyBHlmJ94YcSo5HYlWHIanXiU3sWf79rzyQ",
    authDomain: "commentsdevplenoreactjs.firebaseapp.com",
    databaseURL: "https://commentsdevplenoreactjs.firebaseio.com",
    projectId: "commentsdevplenoreactjs",
    storageBucket: "commentsdevplenoreactjs.appspot.com",
    messagingSenderId: "476722872402"
  };
  firebase.initializeApp(config);

  export const database = firebase.database()