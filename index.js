// Import stylesheets
import "./style.css";

// Import javascript files
import "./js/add-element.js";

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

import * as firebaseui from "firebaseui";

//  Code for later database connection Please ignore.

// Add Firebase project configuration object here
var firebaseConfig = {
  apiKey: "AIzaSyCnTiONA5kJi8Hroxd3dimv-AlRHeLnpOM",
  authDomain: "csci225-bab55.firebaseapp.com",
  projectId: "csci225-bab55",
  storageBucket: "csci225-bab55.appspot.com",
  messagingSenderId: "145918814164",
  appId: "1:145918814164:web:8bdf18387236af79699841",
  measurementId: "G-CRJL29Q68X"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Save the list to database
$("#save").click(function() {
// document.querySelectorAll('li') ==> nodelist
// for loop to go through each nodelist
// and then get the text content

  $('li').each(function(){
    var value = $(this).text();
    console.log(value);

    firebase
    .firestore()
    .collection("mylist")
    .add({
      item: value//?
    });


  });

});
