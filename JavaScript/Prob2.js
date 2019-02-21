var checkbox = document.getElementById('myCheck');

//Method 1
/* checkbox.addEventListener('change', changeEvent);

function changeEvent() {
    if(this.checked){
      document.getElementById('shipName').value = document.getElementById('billName').value;
      document.getElementById('shipAddress').value = document.getElementById('billAddress').value;
      document.getElementById('shipCity').value = document.getElementById('billCity').value;
      document.getElementById('shipState').value = document.getElementById('billState').value;
      document.getElementById('shipZip').value = document.getElementById('billZip').value;
    }
    else
    {
      document.getElementById('shipName').value = "";
      document.getElementById('shipAddress').value = "";
      document.getElementById('shipCity').value = "";
      document.getElementById('shipState').value = "";
      document.getElementById('shipZip').value = "";
    }

}*/

//Method 2
function isSame(){
  if (checkbox.checked == true){
    //copy over the values when the checkbox is checked
    document.getElementById('shipName').value = document.getElementById('billName').value;
    document.getElementById('shipAddress').value = document.getElementById('billAddress').value;
    document.getElementById('shipCity').value = document.getElementById('billCity').value;
    document.getElementById('shipState').value = document.getElementById('billState').value;
    document.getElementById('shipZip').value = document.getElementById('billZip').value;

    //disable the text field when the checkbox is checked
    document.getElementById('shipName').disabled = true;
    document.getElementById('shipAddress').disabled = true;
    document.getElementById('shipCity').disabled = true;
    document.getElementById('shipState').disabled = true;
    document.getElementById('shipZip').disabled = true;
  }
  else
  {
    document.getElementById('shipName').value = document.getElementById('billName').value;
    document.getElementById('shipAddress').value = document.getElementById('billAddress').value;
    document.getElementById('shipCity').value = document.getElementById('billCity').value;
    document.getElementById('shipState').value = document.getElementById('billState').value;
    document.getElementById('shipZip').value = document.getElementById('billZip').value;

    //enable back all input text field
    document.getElementById('shipName').disabled = false;
    document.getElementById('shipAddress').disabled = false;
    document.getElementById('shipCity').disabled = false;
    document.getElementById('shipState').disabled = false;
    document.getElementById('shipZip').disabled = false;
  }
}

function isValid(){
  alert("Your form has been submitted!");
}
