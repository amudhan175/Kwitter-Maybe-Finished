const firebaseConfig = {
    apiKey: "AIzaSyDrEthaseqr0KjYpSKmR3P64kHwwHwMmeQ",
    authDomain: "kwitter-80531.firebaseapp.com",
    databaseURL: "https://kwitter-80531-default-rtdb.firebaseio.com",
    projectId: "kwitter-80531",
    storageBucket: "kwitter-80531.appspot.com",
    messagingSenderId: "945725248641",
    appId: "1:945725248641:web:b88f71d82c701ade8ba980",
    measurementId: "G-4PZCB5H2GS"
  };

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_tag = "<h4>"+name+"<img class='user_tick' src='tick.png'> </h4>";
message_tag = "<h4 class='message_label'>"+message+"</h4>";
like_button = "<button class='btn btn-primary' id="+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'>";
span_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like:"+ like +"</span></button><hr>";
row = name_tag+message_data+like_button+span_tag;
document.getElementById("output").innerHTML += row;
//End code
 } });  }); }
getData();
function Send(){
    message = document.getElementById("message_input").value;
    firebase.database().ref(room_name).push({
        name:room_names
        message:message
        like:0
    });
    document.getElementById("message_input").value= "";
}
function updatelike(){
    console.log("Clicked on the like button - " + message_id)
    button_id=message_id;
    likes = document.getElementById(button_id).value;
    update_likes=Number(likes) + 1;
    console.log(update_likes);
    firebase.database().ref(room_name).child(message_id).update({
        like:update_likes
    });
}
function logout(){
    localStorage.removeItem("room_name");
    localStorage.removeItem("username");
    window.location.replace("index.html");
}