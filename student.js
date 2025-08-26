// Lab 1
function confirmlink537(url) {
    if (confirm("Do you want to jump to this link?")) {
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
var current = 1;     // selects which item that is "on special"

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

// Lab 4
var custtype = "direct";

function changetype488() {
    var newtype;
    if (custtype == "direct") newtype = "advertising";
    if (custtype == "advertising") newtype = "subscription";
    if (custtype == "subscription") newtype = "direct";
    custtype = newtype;
    alert("Customer type changed to: " + custtype);
}

function displaytype493() {
    if (custtype == "direct") alert("Buy Now! From this web page! My children need new shoes!");
    if (custtype == "advertising") alert("Support our advertisers! Click on an ad, so I can make money!");
    if (custtype == "subscription") alert("Renew your subscription today! My children need medicine!");
}

// Lab 5
function getName998() {
    var name = prompt("Enter your name:");
    var message = "Your Name Is: " + name + " ";
    if (name.length < 5) message += "You have a short name";
    else if (name.length < 10) message += "You have a medium name";
    else message += "You have a long name";
    document.getElementById("name998").innerText = message;
}

function getAge412() {
    var age = prompt("Enter your age:");
    var message = "Your Age Is: " + age + " ";
    age = Number(age);
    if (age < 18) message += "You are a kid";
    else if (age < 50) message += "You are an adult";
    else message += "You are a senior citizen";
    document.getElementById("age412").innerText = message;
}
