$(document).ready(function(){
var database = firebase.database();
console.log(database)
var counter = 0;
$('#click-button').on('click', function(){
	counter++;

	database.ref().set({
        clickCount: counter
      });
	console.log(counter);
})
    database.ref().on("value", function(snapshot) {
      console.log()

      $("#click-value").html(snapshot.val().clickCount);

      clickCounter = snapshot.val().clickCount;
    }, function(errorObject) {
      console.log("The read failed: " + errorObject.code);
    });
})