var firebaseConfig = {
  apiKey: "AIzaSyCSOsAdb5KlBTWg8OaI-kb3Np_apubBzBs",
  authDomain: "clone-7e368.firebaseapp.com",
  projectId: "clone-7e368",
  storageBucket: "clone-7e368.appspot.com",
  messagingSenderId: "156834042204",
  appId: "1:156834042204:web:4717c05711d9747a88b199",
  measurementId: "G-VF48NF5E0E"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var db = firebase.firestore();


  
// const firebaseConfig = {
//   apiKey: "AIzaSyCSOsAdb5KlBTWg8OaI-kb3Np_apubBzBs",
//   authDomain: "clone-7e368.firebaseapp.com",
//   projectId: "clone-7e368",
//   storageBucket: "clone-7e368.appspot.com",
//   messagingSenderId: "156834042204",
//   appId: "1:156834042204:web:4717c05711d9747a88b199",
//   measurementId: "G-VF48NF5E0E"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// var db = firebase.firestore();