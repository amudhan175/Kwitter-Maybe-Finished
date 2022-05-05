
//ADD YOUR FIREBASE LINKS HERE
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
     
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_id=localStorage.getItem("user_name");
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

      //Start code
       console.log("Room Name - ", room_name);
       row="<button class='room_name'>"+Room_names+"onclick='redirecttoroom(this.id)>#"+ Room_names + "</div>";
       document.getElementById("output").innerHTML = row;
      
     
       
      //End code
      });});}
getData();
function add_room(){
      room_name = document.getElementById("room_name").value;
      firebase.database.ref("/").child(room_name).update({
      purpose : "adding room name"
      });
      localStorage.setItem("room_name:", room_name);
      window.location = "kwitter_page.html"
      

}
function redirecttoroom(Room_Names){
      console.log(Room_Names);
      localStorage.setItem("name", Room_Names);
      window.location = "kwitter_page.html";
}
function Logout(){
  localStorage.removeItem("name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
