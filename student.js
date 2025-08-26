// Lab 2 variables
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
    alert("Customer type changed to: " + custtype);
}

function displaytype493() {
    if (custtype == "direct") alert("Buy Now! From this web page! My children need new shoes!");
    else if (custtype == "advertising") alert("Support our advertisers! Click on an ad, so I can make money!");
    else if (custtype == "subscription") alert("Renew your subscription today! My children need medicine!");
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
    var age = Number(prompt("Enter your age:"));
    var message = "Your Age Is: " + age + " ";
    if (age < 18) message += "You are a kid";
    else if (age < 50) message += "You are an adult";
    else message += "You are a senior citizen";
    document.getElementById("age412").innerText = message;
}

// Lab 6
function getBreaks876() {
    var num;
    do {
        num = Number(prompt("Enter a number from 1 to 5:"));
    } while (num < 1 || num > 5);
    var breaks = "";
    for (var i = 0; i < num; i++) {
        breaks += "<br>";
    }
    document.getElementById("breaks876").innerHTML = breaks;
}

function getCards495() {
    var num;
    do {
        num = Number(prompt("Enter a number from 2 to 7:"));
    } while (num < 2 || num > 7);
    var cards = "";
    for (var i = 0; i < num; i++) {
        cards += "Card #" + i + " ";
    }
    document.getElementById("cards495").innerText = cards;
}
