// ==================== Lab 4 ====================
// Global variable for customer type
custtype = "direct"; // starts as "direct"

// Function to change customer type
function changetype488() {
    var newtype = ""; // local variable
    if (custtype == "direct") {
        newtype = "advertising";
    }
    if (custtype == "advertising") {
        newtype = "subscription";
    }
    if (custtype == "subscription") {
        newtype = "direct";
    }
    custtype = newtype; // assign local to global
    alert("Customer type changed to: " + custtype);
}

// Function to display custom sales pitch
function displaytype493() {
    if (custtype == "direct") {
        alert("Buy Now! From this web page! My children need new shoes!");
    }
    if (custtype == "advertising") {
        alert("Support our advertisers! Click on an ad, so I can make money!");
    }
    if (custtype == "subscription") {
        alert("Renew your subscription today! My children need medicine!");
    }
}

// ==================== Lab 3 ====================
current = 1; // selects which item is "on special"

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


// ==================== Lab 2 ====================
// Lab 2 variables
let thename = "Brandon Chang";
let my_message = "cs190 Javascript Lab 2";
let id = 878;

// Lab 2 function: shows all info in an alert
function displayinfo871() {
    alert(
        "Name: " + thename + " " +
        "Message: " + my_message + " " +
        "ID: " + id
    );
}

// ==================== Lab 1 ====================
// Lab 1 function: confirms before visiting links
function confirmlink537(url) {
    let confirmJump = confirm("Do you want to visit this site?");
    if (confirmJump) {
        window.location = url;
        return false;
    }
    return false;
}
