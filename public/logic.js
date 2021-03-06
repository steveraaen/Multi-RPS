$(document).ready(function() {
    // =============================================================
    // Set initial values (with explici user references for testing)
    var name1 = 'Steve';
    var name2 = 'No Opponent Yet';
    var id1 = 'tuAcPvNDV0YeEmxJFsrPjQxJXow1';
    var id2 = 'iSGNBlQyWJNXyo7iike1gcPkB5h1';
    var curPick1 = 'Has Not Picked yet';
    var curPick2 = 'Has not picked yet';
    var score1 = 0;
    var score2 = 0;
    // =============================================================
    // Assign values to the game info divs
    $('#p1name').html(name1)
    $('#p2name').html(name2)
    $('#p1curPick').html(curPick1)
    $('#p2curPick').html(curPick2)
    $('#p1score').html(score1)
    $('#p2score').html(score2)
    $('#p1id').html(id1)
    $('#p2id').html(id2)
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
        name2 = $('#newName').val().trim();
        // =============================================================
        // Refer to Firebase database and overwrite them with key value pairs
        database.ref().set({
            name1: name1,
            name2: name2,
            id1: id1,
            id2: id2,
            curPick1: curPick1,
            curPick2: curPick2,
            score1: score1,
            score2: score2,
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
    })
    function chooseRPS(){

    }

})

















