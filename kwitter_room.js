
//AÑADE TUS ENLACES DE FIREBASE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBB2WHKt7ma8oxAxsZtBRvTOLBpLqBfQzg",
      authDomain: "kwitter-58665.firebaseapp.com",
      databaseURL: "https://kwitter-58665-default-rtdb.firebaseio.com",
      projectId: "kwitter-58665",
      storageBucket: "kwitter-58665.appspot.com",
      messagingSenderId: "572642495573",
      appId: "1:572642495573:web:9eb6e0c2667f589f5918dc"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

     user_name = localStorage.getItem("room_name");

     documwnt.getElementById("user_name").innerHTML = "¡Hola " + user_name + "!";
      
function addRoom(){
     room_name = document.getElementById("room_name").value;

     firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
     });

     localStorage.setItem("room_name",room_name);

     window.location ="kwitter_page.html";

}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código
Room_names=childKey;
console.log ("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //Final del código
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location ="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");

      localStorage.removeItem("room_name");
      window.location = "index.html";
}