 $(document).ready(function(){
$("#myCheck").click(function() {
  isSame();
});
});

function isSame() {
  if ($("#myCheck").is(':checked')) {
    //copy over the values when the checkbox is checked
    //document.getElementById('shipName').value = document.getElementById('billName').value;
    $("#shipName").val($("#billName").val());
    $("#shipAddress").val($("#billAddress").val());
    $("#shipCity").val($("#billCity").val());
    $("#shipState").val($("#billState").val());
    $("#shipZip").val($("#billZip").val());

    //Disable the textfield
    //document.getElementById('shipName').disabled = true;
    $("#shipName").prop('disabled', true);
    $("#shipAddress").prop('disabled', true);
    $("#shipCity").prop('disabled', true);
    $("#shipState").prop('disabled', true);
    $("#shipZip").prop('disabled', true);
  } else {
    //copy over the values when the checkbox is NOT checked
    //document.getElementById('shipName').value = document.getElementById('billName').value;
    $("#shipName").val($("#billName").val());
    $("#shipAddress").val($("#billAddress").val());
    $("#shipCity").val($("#billCity").val());
    $("#shipState").val($("#billState").val());
    $("#shipZip").val($("#billZip").val());

    //Enable back the textfield
    //document.getElementById('shipName').disabled = true;
    $("#shipName").prop("disabled", false);
    $("#shipName").prop("disabled", false);
    $("#shipAddress").prop("disabled", false);
    $("#shipCity").prop("disabled", false);
    $("#shipState").prop("disabled", false);
    $("#shipZip").prop("disabled", false);
  }
}
