// Assignment code here

window.prompt("How many characters would you like your password to have? (at least 8 characters and no more than 128 characters)")

window.confirm("Would you like to include lowercase?")

window.confirm("Would you like to include uppercase?")

window.confirm("Would you like to include numeric?")

window.prompt("Which special characters would you like to use in your password? These are the characters you can use (!#$%&'()*+,-./:;<=>?@[\]^_`{|}~)")

window.confirm("Are you sure that you'd like to stop generating your unique password?")

window.alert("You need to provide a valid answer! Please try again.")

window.alert ("Goodbye! Refresh the page to generate your unique password again.")


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
