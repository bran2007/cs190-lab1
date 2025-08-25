// student.js - External JavaScript file for Lab assignments
// Function to confirm navigation before jumping to external links
function confirmlink537(url) {
    var userConfirm = confirm("Do you want to navigate to " + url + "?");
    if (userConfirm) {
        window.open(url, '_blank');
    }
    return false; // Prevent default link behavior
}
