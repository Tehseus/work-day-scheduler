//variable for appending class pastpresentfuture
//for loop to take the current time and apply past, present or future
var pastpresentfuture = document.getElementById("#ppf");
var timeDisplay =  $("#currentDay");
// if (condition) {
    
// } else if (condition) {

// } else {
    
// }


function displayTime() {
    var now = moment().format("dddd, MMMM Do YYYY")
    timeDisplay.text(now);
}

setInterval(displayTime, 1000)
