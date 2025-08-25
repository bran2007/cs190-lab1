<!doctype html>
<!--
 * Who: Brandon Chang
 * What: CMP SCI cs190 Lab Web Page Project
 * When: 08/25/2025  
 * What: Lab Web Page #1
-->
<html>
<head>
<meta charset="UTF-8">
<script>
// Lab 2 Variables (created at top of file, not in a function)
var thename = "Brandon Chang";
var my_message = "cs190 Javascript Lab 2";
var id = 878;

// Lab 2 Function - Display variable information in alert box
function displayinfo871() {
    var message = "Name: " + thename + "\\n" + 
                  "Message: " + my_message + "\\n" + 
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

// Lab 5 Function - Get customer name and display message with control statement
function getName998() {
    var name = prompt("Please enter your name:");
    var message = "Your Name Is: " + name + " ";
    
    // Control statement based on name length
    if (name.length < 5) {
        message += "You have a short name";
    } else if (name.length < 10) {
        message += "You have a medium name";
    } else {
        message += "You have a long name";
    }
    
    // Display message next to button
    document.getElementById("name998").innerHTML = message;
}

// Lab 5 Function - Get customer age and display message with control statement
function getAge412() {
    var age = parseInt(prompt("Please enter your age:"));
    var message = "Your Age Is: " + age + " ";
    
    // Control statement based on age
    if (age < 18) {
        message += "You are a kid";
    } else if (age < 50) {
        message += "You are an adult";
    } else {
        message += "You are a senior citizen";
    }
    
    // Display message next to button
    document.getElementById("age412").innerHTML = message;
}
</script>
</head>
<body>

    <h2>Lab 2 Assignment</h2>
<a href="javascript:displayinfo871();">Web Page Information</a>
<hr>

<h2>Lab 1 Assignment</h2>
<a href="https://www.google.com" onclick="confirmlink537('https://www.google.com'); return false;">Go to Google</a><br><br>
<a href="https://www.walmart.com" onclick="confirmlink537('https://www.walmart.com'); return false;">Go to Walmart</a>
</body>

    <h2>Lab 5 Assignment</h2>
<button onclick="getName998();">Enter Customer Name</button>
<span id="name998"></span><br>
<button onclick="getAge412();">Enter Customer Age</button>
<span id="age412"></span>
<hr>
    
</html>
