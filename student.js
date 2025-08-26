// Lab 1
function confirmlink537(url) {
    if (confirm("Do you want to jump to this site?")) {
        window.location = url;
    }
}

// Lab 2
var thename = "Brandon Chang";
var my_message = "cs190 Javascript Lab 2";
var id = 878;

function displayinfo871() {
    alert("Name: " + thename + "\nMessage: " + my_message + "\nID: " + id);
}

// Lab 3
var current = 1;  // selects which item is "on special"

function displayspecial976() {
    if (current == 1) {
        alert("The current special is #1");
    }
    if (current == 2) {
        alert("The current special is #2");
    }
    if (current == 3) {
        alert("The current special is #3");
    }
    current = current + 1;
    if (current > 3) {
        current = 1;  // wrap around
    }
}
