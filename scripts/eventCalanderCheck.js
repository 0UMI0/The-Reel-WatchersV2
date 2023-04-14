function submit_event() {
    // Get the title and date from the form
    var title = document.forms["events"]["event_title"].value;
    var date = document.forms["events"]["event_date"].value;


    // Check if the title is empty
    if (title == "") {
        alert("The event must have a title!"); // Alert the user if title is empty
    }
    else {
        if (date.length == 0) {
            alert("The event must have a date!"); // Alert the user if date is empty
        }
        else {
            alert("Event submitted!"); // Alert the user that the event has been submitted
        }
    }
}

document.querySelector("form[name='events']").addEventListener("submit", function (event) {
    event.preventDefault(); // prevent the default form submission
    submit_event(); // call the custom submit_event() function
});
