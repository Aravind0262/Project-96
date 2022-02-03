var firebaseConfig = {
    apiKey: "AIzaSyCeOoyqb98TVI_LF5eSlKHKZMPWDcAXG_w",
    authDomain: "project-94-9b55a.firebaseapp.com",
    databaseURL: "https://project-94-9b55a-default-rtdb.firebaseio.com",
    projectId: "project-94-9b55a",
    storageBucket: "project-94-9b55a.appspot.com",
    messagingSenderId: "650759663361",
    appId: "1:650759663361:web:9607249b1081275678b500"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//YOUR FIREBASE LINKS
var user_name=localStorage.getItem("Username");
var room_name=localStorage.getItem("Roomname");
function send(){
    var msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        message:msg,
        Username:user_name,
        like:0
    });
    document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();
