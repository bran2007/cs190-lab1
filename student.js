// Lab 1: confirm link function
function confirmlink537(url) {
    if (confirm("Do you want to jump to " + url + "?")) {
        window.location.href = url;
    }
}

// Lab 2: variables and display function
var thename = "Brandon Chang";
var my_message = "cs190 Javascript Lab 2";
var id = 878;

function displayinfo871() {
    alert("Name: " + thename + "\nMessage: " + my_message + "\nID: " + id);
}
