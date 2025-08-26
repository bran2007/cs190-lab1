// Variables for Lab 2
let thename = "Brandon Chang";
let my_message = "cs190 Javascript Lab 2";
let id = 878;

// Lab 2 function to display variable info
function displayinfo871() {
  alert(
    "Name: " + thename + "\n" +
    "Message: " + my_message + "\n" +
    "ID: " + id
  );
}

// Lab 1 function to confirm link clicks
function confirmlink537(url) {
  let confirmJump = confirm("Do you want to visit this site?");
  if (confirmJump) {
    window.location = url;
    return false;
  }
  return false;
}
