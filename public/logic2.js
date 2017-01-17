$(document).ready(function() {

    // =============================================================
    // Set initial player objects (with explicit user references for testing)
    var players = [
    { name  : 'Steve', 
      id    : 'tuAcPvNDV0YeEmxJFsrPjQxJXow1',
      score : 0,
      curPick : 'Has Not Picked yet' 
    },
    { name  : 'Waiting For Player',
      id    : 'iSGNBlQyWJNXyo7iike1gcPkB5h1',
      score : 0,
      curPick : 'Has Not Picked yet' 
    }];
    var player1, player2;
    console.log(player1)
   // =============================================================
    // Assign values to the game info divs
    $('#p1name').html(players[0].name)
    $('#p2name').html(players[1].name)
    $('#p1curPick').html(players[0].curPick)
    $('#p2curPick').html(players[1].curPick)
    $('#p1score').html(players[0].score)
    $('#p2score').html(players[1].score)
    $('#p1id').html(players[0].id)
    $('#p2id').html(players[1].id)
        // =============================================================
       // Set Firebase configuration settings
    var config = {
        apiKey: "AIzaSyCpxHYzmMVHenG4b345MQ_rzs9myOeWQzI",
        authDomain: "multi-rps-30f12.firebaseapp.com",
        databaseURL: "https://multi-rps-30f12.firebaseio.com",
        storageBucket: "multi-rps-30f12.appspot.com",
        messagingSenderId: "903429570889"
    };
    // =============================================================
    // Initialize Firebase, make shortcut to firebase.database
    firebase.initializeApp(config)
    database = firebase.database();
    // =============================================================
    // When user clicks add-user button, name2 is assigned value of input id = newName
    $('#add-user').on('click', function() {
        players2.name = $('#newName').val().trim();
        // =============================================================
        // Refer to Firebase database and overwrite them with key value pairs
        database.ref().set({
            name1: players[0].name,
            name2: players[1].name,
            id1: players[0].id,
            id2: players[1].id,
            curPick1: players[0].curPick,
            curPick2: players[1].curPick,
            score1: players[0].score,
            score2: players[1].score,
        });
        // ==============================================================
        // Prevent the browser from ssubmitting the form
        return false;
    });
    // ==============================================================
    // Get snapshot of values from database and update game info divs
    database.ref().on('value', function(snapshot) {
        $('#p1name').html(snapshot.val().name1)
        $('#p2name').html(snapshot.val().name2)
        $('#p1curPick').html(snapshot.val().curPick1)
        $('#p2curPick').html(snapshot.val().curPick2)
        $('#p1score').html(snapshot.val().score1)
        $('#p2score').html(snapshot.val().score2)
        $('#p1id').html(snapshot.val().id1)
        $('#p2id').html(snapshot.val().id2)
    function chooseRPS(){
console.log(snapshot)

    }
    chooseRPS()
    })



})

















