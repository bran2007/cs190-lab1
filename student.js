function confirmlink537(url) {
  let confirmJump = confirm("Do you want to visit this site?");
  if (confirmJump) {
    window.location = url;
    return false; 
  }
  return false; 
}
