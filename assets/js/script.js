//variable for appending class pastpresentfuture
//for loop to take the current time and apply past, present or future
// var pastPresentFuture = document.getElementById("ppf");
var timeDisplay =  $("#currentDay");


if ("pm" === moment().format("a")&& "12" === moment().format("hh")) {
    var current_time = Number(moment().format("hh"));
} else if ("am" === moment().format("a")&& "12" === moment().format("hh")) {
    var current_time = Number(moment().format("hh"))-12;
} else if ("am" === moment().format("a")) {
    var current_time = Number(moment().format("hh"));
} else {
    var current_time = Number(moment().format("hh"))+12;
} 


// $("#ppf").addClass("present");



function displayTime() {
    var now = moment().format("MMM DD, YYYY [at] hh:mm:ss a")
    timeDisplay.text(now);
}

setInterval(displayTime, 1000);
//if now < current_time, set to class future
//else if now = current_time, set to class present
//else set class to past
var timeSlot = parseInt($( "div.hour" ).html());

$(document).ready(function(){
    // Loop through each div element with the class box
    $("textarea.form-control").each(function(){
        // Test if the div element is empty
        if (timeSlot < current_time) {
            $(this).addClass("past");
        } else if (timeSlot == current_time) {
            $(this).addClass("present");
        } else {
            $(this).addClass("future");
        }
    });
});

$(".saveBtn").on("click", function () {
    var savedInput = $(this).siblings("textarea").val()
    var timeInput = $(this).parent().attr("value")
    localStorage.setItem(timeInput, savedInput);
  });
for (let i = 0; i < 9; i++) {
    $(`#${i}`).val(localStorage.getItem(i));
}