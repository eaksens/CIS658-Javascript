var name_, age, female, male;

function isValid(){
  //declare global variables
   name_ = document.getElementById("asd");
   age = document.getElementById("age");
   female = document.getElementById("female");
   male = document.getElementById("male");
  //console.log(name.value);
  //console.log(name.length);
   //gender = document.getElementById("gender");
  validateName();
  validateAge();
  validateGender();
}

//name (text, 24 chars max, mandatory)
function validateName(){
  if (name_.value == "" ){
    document.getElementById("errorName").innerHTML = " Please Enter Valid Name";
    document.getElementById("errorName").style.color = "red";

  }
  else if(name_.length >24){
    document.getElementById("errorName").innerHTML = " Your name is longer than 24 characters";
    document.getElementById("errorName").style.color = "red";
  }
  else{
    document.getElementById("errorName").innerHTML = "";
  }
}

//age (numeric, mandatory)
function validateAge(){
  if(age.value == "" ){
    document.getElementById("errorAge").innerHTML = " Please Enter Valid Age";
    document.getElementById("errorAge").style.color = "red";
  }
  else if(isNaN(age.value) == true){
    document.getElementById("errorAge").innerHTML = " Error: Age has to be number";
    document.getElementById("errorAge").style.color = "red";

  }
  else{
    document.getElementById("errorAge").innerHTML = "";
  }
}

//gender (male/female, mandatory)
function validateGender(){
  if(female.checked == false && male.checked == false){
    document.getElementById("errorGender").innerHTML = " Please Select Your Gender";
    document.getElementById("errorGender").style.color = "red";
  }
  else{
    document.getElementById("errorGender").innerHTML = "";
  }
}
