// Lab 1: confirm link function
function confirmlink537(url) {
    if (confirm("Do you want to jump to " + url + "?")) {
        window.location.href = url;
    }
}

// Lab 2: declare variables (outside of any function)
var thename = "Brandon Chang";
var my_message = "cs190 Javascript Lab 2";
var id = 878;

// Lab 2: function to display info in alert
function displayinfo871() {
    alert("Name: " + thename + "\nMessage: " + my_message + "\nID: " + id);
}

// Lab 3: fix syntax errors in displayspecial976
var current = 1; // declare outside functions

function displayspecial976() {
    if (current == 1) {
        alert("The current special is #1"); // fixed unterminated string
    }
    if (current == 2) {
        alert("The current special is #2"); // fixed missing parenthesis
    }
    if (current == 3) {
        alert("The current special is #3"); // fixed missing semicolon
    }
    current = current + 1;
    if (current > 3) {
        current = 1; // wrap around
    }
}
