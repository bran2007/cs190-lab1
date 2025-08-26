var thename = "Brandon Chang";
var my_message = "cs190 Javascript Lab 2";
var id = 878;

function displayinfo871() {
    var message = "Name: " + thename + "\n" + 
                  "Message: " + my_message + "\n" + 
                  "ID: " + id;
    alert(message);
}

function confirmlink537(url) {
    var userConfirm = confirm("Do you want to navigate to " + url + "?");
    if (userConfirm) {
        window.open(url, '_blank');
    }
    return false;
}

var current = 1;

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
        current = 1;
    }
}
