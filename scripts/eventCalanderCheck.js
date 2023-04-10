function submit_event() {
    var title = document.forms["events"]["event_title"].value;
    var date = document.forms["events"]["event_date"].value;
    if (title == "") {
        alert("An event must have a title!");
    }
    else {
        if (date.length == 0) {
            alert("An event must have a date!");
        }
        else {
            alert("Event submitted! The society will contact you soon!");
        }
    }
}

document.querySelector("form[name='events']").addEventListener("submit", function(event) {
    event.preventDefault(); // prevent the default form submission
    submit_event(); // call the custom submit_event() function
});
