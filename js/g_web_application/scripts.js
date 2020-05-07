function validation() {
  var user = document.getElementById("cName").value;
  var phone = document.getElementById("cPhone").value;
  var origin = document.getElementById("cOrigin").value;
  var destination = document.getElementById("cDestination").value;
  

  //Name validation
  if (user.length <= 2 || user.length > 20) {
    document.getElementById("username").innerHTML =
      "Username lenght must be between 2 and 20";
    return false;
  }else{
    document.getElementById("username").innerHTML =
      "";
  }
  if (!isNaN(user)) {
    document.getElementById("username").innerHTML =
      "Only characters are allowed";
    return false;
  }else{
    document.getElementById("username").innerHTML =
      "";
  }

  //Phone validation
  if (isNaN(phone)) {
    document.getElementById("phonein").innerHTML =
      "User must write digits only not characters";
    return false;
  }else{
    document.getElementById("phonein").innerHTML =
      "";
  }
  if (phone.length != 11) {
    document.getElementById("phonein").innerHTML =
      "Phone must be 11 digits only";
    return false;
  }else{
    document.getElementById("phonein").innerHTML =
      "";
  }

  //Origin validation
  if (origin.length <= 2 || origin.length > 20) {
    document.getElementById("originva").innerHTML =
      "Origin lenght must be between 2 and 20";
    return false;
  }else{
    document.getElementById("originva").innerHTML =
      "";
  }
  if (!isNaN(origin)) {
    document.getElementById("originva").innerHTML =
      "Only characters are allowed";
    return false;
  }else{
    document.getElementById("originva").innerHTML =
      "";
  }

  //Destination validation
  if (destination.length <= 2 || destination.length > 20) {
    document.getElementById("destinationva").innerHTML =
      "Destination lenght must be between 2 and 20";
    return false;
  }else{
    document.getElementById("destinationva").innerHTML =
      "";
  }
  if (!isNaN(destination)) {
    document.getElementById("destinationva").innerHTML =
      "Only characters are allowed";
    return false;
  }else{
    document.getElementById("destinationva").innerHTML =
      "";
  }


}
