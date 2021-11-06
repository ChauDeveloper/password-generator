
console.log (finalpasslist)
 

var lowercase = function(){
  checklowercase = window.confirm("Would you like to include lowercase?") 
  if (checklowercase) {
  lowercase = "abcdefghijklmnopqrstuvwxyz"
  }
  else {
  finalpasslist = finalpasslist.toUpperCase()
}
}

var uppercase = function (){
  checkuppercase = window.confirm("Would you like to include uppercase?")
  if (checkuppercase) {
    uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  else {
    finalpasslist = finalpasslist.toLowerCase()
  }
}

var numeric = function () {
  checknumeric = window.confirm("Would you like to include numeric?")
  if (checknumeric) {
    numeric = "0123456789"
  }
  else {
    numeric = ""
  }
}

var speccharacter = function () {
  speccharacter = window.prompt("Which special characters would you like to use in your password? These are the characters you can use (!#$%&'()*+,-./:;<=>?@[\]^_`{|}~)")

  switch (speccharacter) {
    case "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~)":
      this.speccharacter 
      break;
    case " 0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ":
    window.alert("You need to provide a valid answer! Please try again.") 
    speccharacter ()
    break;
  }
}

var password=document.getElementById("password");
function genPassword() {
  var passwordLength = window.prompt("How many characters would you like your password to have? (at least 8 characters and no more than 128 characters)");
for (var i = 1; i <= passwordLength; i++) {
  var randomNumber = Math.floor(Math.random() * finalpasslist.length);
  password += finalpasslist.substring(randomNumber, randomNumber +1);
 }
       document.getElementById("password").value = password;
}

var finalpasslist = lowercase() + uppercase() + numeric() + speccharacter()



 genPassword();




// Assignment code here

//window.confirm("Would you like to include lowercase?")

//window.confirm("Would you like to include uppercase?")

//window.confirm("Would you like to include numeric?")

//window.prompt("Which special characters would you like to use in your password? These are the characters you can use (!#$%&'()*+,-./:;<=>?@[\]^_`{|}~)")

//window.confirm("Are you sure that you'd like to stop generating your unique password?")

//window.alert("You need to provide a valid answer! Please try again.")

//window.alert ("Goodbye! Refresh the page to generate your unique password again.")


// Get references to the #generate element
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function writePassword() {
 // var password = generatePassword();
  //var passwordText = document.querySelector("#password");

//  passwordText.value = password;
//}
// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
