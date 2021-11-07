var passwordLength = window.prompt("How many characters would you like your password to have? (at least 8 characters and no more than 128 characters)");


var lowercase = function(){
  checklowercase = window.confirm("Would you like to include lowercase?") 
  if (checklowercase) {
  lowercase = "abcdefghijklmnopqrstuvwxyz"
  }
  else {
  lowercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}
}

var uppercase = function (){
  checkuppercase = window.confirm("Would you like to include uppercase?")
  if (checkuppercase) {
    uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  else {
    uppercase = "abcdefghijklmnopqrstuvwxyz"
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


lowercase ()
uppercase ()
numeric ()

var finalpasslist = lowercase + uppercase + numeric

function genPassword() {
for (var i = 1; i <= passwordLength.length; i++) {
  var randomNumber = Math.floor(Math.random() * finalpasslist.length);
  password += finalpasslist.substring(randomNumber, randomNumber +1);
 }
}



var generateBtn = document.querySelector("#generate");
function writePassword() {
  var password = genPassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);