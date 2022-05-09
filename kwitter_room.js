var firebaseConfig = {
     apiKey: "AIzaSyBrdhE3SV3l0k-sWQgpW0ZLe06wKVZu_-g",
     authDomain: "birthday-invite-23aee.firebaseapp.com",
     databaseURL: "https://birthday-invite-23aee-default-rtdb.firebaseio.com",
     projectId: "birthday-invite-23aee",
     storageBucket: "birthday-invite-23aee.appspot.com",
     messagingSenderId: "203555920808",
     appId: "1:203555920808:web:d66d17de7f4636e5851b9d"
   };
   
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   
   user_name = localStorage.getItem("user_name");
   
   document.getElementById("user_name").innerHTML = "Welcome!";
   
   function addRoom()
   {
     room_name = document.getElementById("room_name").value;
   
     firebase.database().ref("/").child(room_name).update({
       purpose : "adding room name"
     });
   
       localStorage.setItem("room_name", room_name);
       
       window.location = "kwitter_page.html";
   }
   
   function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
          Room_names = childKey;
          console.log("Room Name - " + Room_names);
         row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
         document.getElementById("output").innerHTML += row;
       });
     });
   
   }
   
   getData();
   
   function redirectToRoomName(name)
   {
     console.log(name);
     localStorage.setItem("room_name", name);
       window.location = "kwitter_page.html";
   }
   
   function logout() {
   localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");
       window.location = "index.html";
   }
   