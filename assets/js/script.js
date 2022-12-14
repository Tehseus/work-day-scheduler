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
// var timeSlot = parseInt($( "div.hour" ).html());
console.log(current_time);
$(document).ready(function(){
    // Loop through each textarea element with the class form-control
    $("textarea.form-control").each(function(){
        // Compares timeSlot and current_time and adds appropriate class to add styling to element
        // var timeSlot = parseInt($( "div.hour" ).html()); //initial variable used to compare, found out it was ineffective leaving for 
        var hourSlot = parseInt($(this).attr("id"));
        console.log(hourSlot+"hourSlot");
        if (hourSlot < current_time) {
            $(this).addClass("past");
        } else if (hourSlot ===current_time) {
            $(this).addClass("present");
        } else if(hourSlot >current_time){
            $(this).addClass("future");
        }
    });
});

//function that should record user input in local storage for recall later
$(".saveBtn").on("click", function () {
    console.log(this);
    var text = $(this).siblings(".description").val();
    console.log(text);//had to log to check for output
    var time = $(this).siblings(".form-control").attr("id"); 
    console.log(time);//had to log to check for output
    localStorage.setItem(time, text); //set items in local storage.
})

//for loop to recall items saved in local storage, not currently working lol
for (let i = 9; i < 18; i++) {
    $(`#${i}`).val(localStorage.getItem(i));
}