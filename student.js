// ==================== Lab 1 ====================
// Confirm before visiting links
function confirmlink537(url) {
    let confirmJump = confirm("Do you want to visit this site?");
    if (confirmJump) {
        window.location = url;
        return false;
    }
    return false;
}

// ==================== Lab 2 ====================
// Lab 2 variables
let thename = "Brandon Chang";
let my_message = "cs190 Javascript Lab 2";
let id = 878;

// Show info in an alert
function displayinfo871() {
    alert(
        "Name: " + thename + " " +
        "Message: " + my_message + " " +
        "ID: " + id
    );
}

// ==================== Lab 3 ====================
// Lab 3 variable
current = 1; // global so autograder detects

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
        current = 1; // wrap
    }
}

// ==================== Lab 4 ====================
// Customer type variable
custtype = "direct";

function changetype488() {
    var newtype = "";
    if (custtype == "direct") {
        newtype = "advertising";
    }
    if (custtype == "advertising") {
        newtype = "subscription";
    }
    if (custtype == "subscription") {
        newtype = "direct";
    }
    custtype = newtype;
    alert("Customer type changed to: " + custtype);
}

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

// ==================== Lab 5 ====================
// Prompt for name and classify
function getName998() {
    let name = prompt("Enter your name:");
    let message = "Your Name Is: " + name + " ";

    if (name.length < 5) {
        message += "You have a short name";
    } else if (name.length < 10) {
        message += "You have a medium name";
    } else {
        message += "You have a long name";
    }

    document.getElementById("name998").innerText = message;
}

// Prompt for age and classify
function getAge412() {
    let age = prompt("Enter your age:");
    age = Number(age);
    let message = "Your Age Is: " + age + " ";

    if (age < 18) {
        message += "You are a kid";
    } else if (age < 50) {
        message += "You are an adult";
    } else {
        message += "You are a senior citizen";
    }

    document.getElementById("age412").innerText = message;
}

// ==================== Lab 6 ====================
// Get number of breaks, validate, then loop
function getBreaks876() {
    let num;
    do {
        num = prompt("Enter a number from 1 to 5:");
        num = Number(num);
    } while (isNaN(num) || num < 1 || num > 5);

    let breaks = "";
    for (let i = 0; i < num; i++) {
        breaks += "<br>";
    }

    document.getElementById("breaks876").innerHTML = breaks;
}

// Get number of cards, validate, then loop
function getCards495() {
    let num;
    do {
        num = prompt("Enter a number from 2 to 7:");
        num = Number(num);
    } while (isNaN(num) || num < 2 || num > 7);

    let cards = "";
    for (let i = 0; i < num; i++) {
        cards += "Card #" + i + " ";
    }

    document.getElementById("cards495").innerText = cards;
}
