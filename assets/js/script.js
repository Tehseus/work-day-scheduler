//variable for displaying time under header
var timeDisplay =  $("#currentDay");

//if statement to set current_time to military time for comparison later
if ("pm" === moment().format("a")&& "12" === moment().format("hh")) {
    var current_time = Number(moment().format("hh"));
} else if ("am" === moment().format("a")&& "12" === moment().format("hh")) {
    var current_time = Number(moment().format("hh"))-12;
} else if ("am" === moment().format("a")) {
    var current_time = Number(moment().format("hh"));
} else {
    var current_time = Number(moment().format("hh"))+12;
} 

//function that uses variable timeDisplay to format time using moment.js
function displayTime() {
    var now = moment().format("MMM DD, YYYY [at] hh:mm:ss a")
    timeDisplay.text(now);
}
//used to call displaytime and it updates every 1000 milliseconds
setInterval(displayTime, 1000);
//if now < current_time, set to class future
//else if now = current_time, set to class present
//else set class to past
var timeSlot = parseInt($( "div.hour" ).html());

$(document).ready(function(){
    // Loop through each textarea element with the class form-control
    $("textarea.form-control").each(function(){
        // Compares timeSlot and current_time and adds appropriate class to add styling to element
        if (timeSlot < current_time) {
            $(this).addClass("past");
        } else if (timeSlot == current_time) {
            $(this).addClass("present");
        } else {
            $(this).addClass("future");
        }
    });
});
//function that should record user input in local storage for recall later, not currently working lol
$(".saveBtn").on("click", function () {
    var savedInput = $(this).siblings("textarea").val()
    var timeInput = $(this).parent().attr("value")
    localStorage.setItem(timeInput, savedInput);
  });
//for loop to recall items saved in local storage, not currently working lol
for (let i = 0; i < 10; i++) {
    $(`#${i}`).val(localStorage.getItem(i));
}