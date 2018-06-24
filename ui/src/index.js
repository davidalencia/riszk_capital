import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import firebase from "firebase";

 
// Initialize Firebase
// TODO: Replace with your project's customized code snippet
const config = {
    apiKey: "AIzaSyCm3ocXfZB0CN287Vo0Kn5C3GL8TcxyJgE",
    authDomain: "riszk-21ae8.firebaseapp.com",
    databaseURL: "https://riszk-21ae8.firebaseio.com",
    projectId: "riszk-21ae8",
    storageBucket: "riszk-21ae8.appspot.com",
    messagingSenderId: "877730538486"
  };
  firebase.initializeApp(config);


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
