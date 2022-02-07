
var firebaseConfig = {
      apiKey: "AIzaSyBZfLTjDRE16I40CK9SNCprpK9x4v9nroc",
      authDomain: "let-chat-web-app-fe476.firebaseapp.com",
      databaseURL: "https://let-chat-web-app-fe476-default-rtdb.firebaseio.com",
      projectId: "let-chat-web-app-fe476",
      storageBucket: "let-chat-web-app-fe476.appspot.com",
      messagingSenderId: "997831504484",
      appId: "1:997831504484:web:8df1338e3c3b33bdcaa571",
      measurementId: "G-2DRQPX8JZ6"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    user_name = localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
    
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });
    
        localStorage.setItem("room_name", room_name);
       
        window.location = "kwitter page.html";
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
        window.location = "kwitter page.html";
    }
    
    function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
        window.location = "index.html";
    }
    