$(document).ready(function() {

    var name1 = 'steve';
    var name2 = 'No Opponent Yet';
    var id1 = 'tuAcPvNDV0YeEmxJFsrPjQxJXow1';
    var id2 = 'iSGNBlQyWJNXyo7iike1gcPkB5h1';   
    var curPick1 = 'Has et';
    var curPick2 = 'Has not picked yet';
    var score1 = 0;
    var score2 = 0;
    $('#p1name').html(name1)
    $('#p2name').html(name2)
    $('#p1curPick').html(curPick1)
    $('#p2curPick').html(curPick2)
    $('#p1score').html(score1)
    $('#p2score').html(score2)
    $('#p1id').html(id1)
    $('#p2id').html(id2)
    var config = {
        apiKey: "AIzaSyCpxHYzmMVHenG4b345MQ_rzs9myOeWQzI",
        authDomain: "multi-rps-30f12.firebaseapp.com",
        databaseURL: "https://multi-rps-30f12.firebaseio.com",
        storageBucket: "multi-rps-30f12.appspot.com",
        messagingSenderId: "903429570889"
    };
    firebase.initializeApp(config)
         database = firebase.database();
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
    $('#add-user').on('click', function() {
            var id2 = result;
            name2 = $('#newName').val().trim();
            console.log(id2)
            database = firebase.database()
            database.ref().set({
                name1: name1,
                name2: name2,
                id1: id1,
                id2: id2,
                curPick1: "",
                curPick2: curPick2,
                score1: score1,
                score2: score2,
            });
            return false;
        });
        database.ref().on('value', function(snapshot) {
            console.log(snapshot.val().name1);
            console.log(snapshot.val().name2);
            console.log(snapshot.val().curPick1);
            console.log(snapshot.val().curPick2);
            console.log(snapshot.val().score1);
            console.log(snapshot.val().score2);
            console.log(snapshot.val().id1);
            console.log(snapshot.val().id2);
            $('#p1name').html(snapshot.val().name1)
            $('#p2name').html(snapshot.val().name2)
            $('#p1curPick').html(snapshot.val().curPick1)
            $('#p2curPick').html(snapshot.val().curPick2)
            $('#p1score').html(snapshot.val().score1)
            $('#p2score').html(snapshot.val().score2)
            $('#p1id').html(snapshot.val().id1)
            $('#p2id').html(snapshot.val().id2)
        })

})
