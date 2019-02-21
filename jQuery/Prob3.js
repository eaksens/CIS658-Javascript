$(document).ready(function() {
  $("button").click(function() {
    validateName();
    validateAge();
    validateGender();
  });
});

function validateName() {
  if (($("#asd").val()).length > 24 || $("#asd").val() == "") {
    $("#errorName").text("Error: Please enter the valid Name");
  } else {
    $("#errorName").text(" ");
  }
}

function validateAge() {
  if ($("#age").val() == "") {
    $("#errorAge").text("Please Enter Valid Age");
  }
  else if($("#age").isNumeric() == false ) {
    $("#errorAge").text("Error: Age have to be Number");
  }
  else {
    $("#errorAge").text(" ");
  }
}

function validateGender() {
  if($("#female").prop('checked') == false && $("#male").prop('checked') == false){
    //document.getElementById("errorGender").innerHTML = " Please Select Your Gender";
    $("#errorGender").text(" Please Select Your Gender");
  }
  else{
    $("#errorGender").text(" ");
  }
}
