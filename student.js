// Lab 2 variables
var thename = "Brandon Chang";
var my_message = "cs190 Javascript Lab 2";
var id = 878;

// Lab 2 function
function displayinfo871() {
    alert("Name: " + thename + "\nMessage: " + my_message + "\nID: " + id);
}

// Lab 1 function
function confirmlink537(url) {
    return confirm("Do you want to jump to " + url + "?");
}

// Lab 3 variable
var current = 1; // selects which item is "on special"

// Lab 3 function
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
        current = 1; // wrap around
    }
}
