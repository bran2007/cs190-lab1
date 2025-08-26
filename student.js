// Lab 2 Variables
var thename = "Brandon Chang";
var my_message = "cs190 Javascript Lab 2";
var id = 878;

// Lab 2 Function - Display variable information in alert box
function displayinfo871() {
    var message = "Name: " + thename + "\n" + 
                  "Message: " + my_message + "\n" + 
                  "ID: " + id;
    alert(message);
}

// Lab 1 Function - Confirm navigation before jumping to external links
function confirmlink537(url) {
    var userConfirm = confirm("Do you want to navigate to " + url + "?");
    if (userConfirm) {
        window.open(url, '_blank');
    }
    return false;
}

// Lab 3 - Today's Special
var current = 1;  // declare outside the function

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
