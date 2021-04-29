
/*********************/
function validateForm() {
    var x = document.forms["myForm"]["name"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
    if (x.length<3){
      alert("Name must be minimum 3 characters");
      return false;
    }
    var y = document.forms["myForm"]["email"].value;
    if (y == "") {
      alert("Email must be filled out");
      return false;
    }
    var z = document.forms["myForm"]["phone"].value;
    if (z == "") {
      alert("Phone number must be filled out");
      return false;
    }
    if (z.length!=10){
      alert("Phone no. must be 10 digits");
      return false;
    }
    var a = document.forms["myForm"]["msg"].value;
    if (a == "") {
      alert("Message must be filled out");
      return false;
    }
    alert("Message sent successfully!");
  }