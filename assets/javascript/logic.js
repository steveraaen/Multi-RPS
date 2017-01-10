   $(document).ready(function() {
       var config = {
           apiKey: "AIzaSyCpxHYzmMVHenG4b345MQ_rzs9myOeWQzI",
           authDomain: "multi-rps-30f12.firebaseapp.com",
           databaseURL: "https://multi-rps-30f12.firebaseio.com",
           storageBucket: "multi-rps-30f12.appspot.com",
           messagingSenderId: "903429570889"
       };
       firebase.initializeApp(config);

       var database = firebase.database();
       var name = 'steve';
       var curPick = 'Has not picked yet';
       var score = 0;
       $('#add-user').on('click', function() {
           database.ref().set({
               name: name,
               curPick: curPick,
               score: score
           });
           return false;
       });
       database.ref().on('value', function(snapshot){
      console.log(snapshot.val());
      console.log(snapshot.val().name);
      console.log(snapshot.val().curPick);
      console.log(snapshot.val().score);

      $('#p1name').html(snapshot.val().name)
      $('#p1curPick').html(snapshot.val().curPick)
      $('#p1score').html(snapshot.val().score)
       })
   })





















