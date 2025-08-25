// student.js - External JavaScript file for Lab assignments

// Lab 2 Variables (created at top of file, not in a function)
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
    return false; // Prevent default link behavior
}
