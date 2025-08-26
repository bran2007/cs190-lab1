function confirmlink537(url) {
    var confirmJump = confirm("Do you want to go to this site?");
    if (confirmJump) {
        window.location.href = url;
    }
}
