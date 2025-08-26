// Lab 1
function confirmlink537(url) {
    if (confirm("Do you want to jump to " + url + "?")) {
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
var current = 1;

function displayspecial976() {
    if (current == 1) alert("The current special is #1");
    if (current == 2) alert("The current special is #2");
    if (current == 3) alert("The current special is #3");
    current++;
    if (current > 3) current = 1;
}

// Lab 4
var custtype = "direct";

function changetype488() {
    var newtype;
    if (custtype == "direct") newtype = "advertising";
    else if (custtype == "advertising") newtype = "subscription";
    else if (custtype == "subscription") newtype = "direct";
    custtype = newtype;
    alert("Customer type changed to " + custtype);
}

function displaytype493() {
    if (custtype == "direct") alert("Buy Now! From this web page! My children need new shoes!");
    else if (custtype == "advertising") alert("Support our advertisers! Click on an ad, so I can make money!");
    else if (custtype == "subscription") alert("Renew your subscription today! My children need medicine!");
}
