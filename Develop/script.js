// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var askLength = prompt("What is the length?")
  var askLower = confirm('Do you want lowercase?')
  var askUpper = confirm('Do you want Uppercase?')
  var askSpecial = confirm('Do you want Special characters?')
  var askNumber = confirm("Do you want Numbers?")
  var lowercase = "abcdefghijklmnopqrstuvwxyz"
  var Uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var Numbers = "1234567890"
  var special = "-=\][/,.<>!@#$%^&*()_+"
  var selected = ""
  if (askLower) {
    selected = selected + lowercase
  }
  if (askUpper) {
    selected = selected + Uppercase
  }
  if (askNumber) {
    selected = selected + Numbers
  }
  if (askSpecial) {
    selected = selected + special
  }
  console.log(selected)




var password =""
  for (var i=0; i < askLength; i++) {
    var randomIndex = Math.floor(Math.random() * selected.length);
    password += selected.charAt(randomIndex);
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
