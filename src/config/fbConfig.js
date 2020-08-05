import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyALInFDMkjJC51fZNhNfoHdONUXifEZ7BU",
    authDomain: "project-planner-react-app.firebaseapp.com",
    databaseURL: "https://project-planner-react-app.firebaseio.com",
    projectId: "project-planner-react-app",
    storageBucket: "project-planner-react-app.appspot.com",
    messagingSenderId: "785964978679",
    appId: "1:785964978679:web:221b7ea9f3d416b6c89ef2",
    measurementId: "G-NEJLTGXW2K"
};

firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;

