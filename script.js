var specialCharacters = ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", ".",];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

// Array of uppercase characters to be included in password
var upperCasedCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword(){

var finalPass = [];

var promptPass = prompt("Enter length of password (between 8 and 128).");
promptPass = parseInt(promptPass);

if(isNaN(promptPass) || promptPass < 8 || promptPass > 128){
  confirm("Please enter a valid number of password characters.");
  return;
}
else{
  var ifSpecial = confirm("Press OK to confirm special characters.");

  var ifNum = confirm("Press OK to confirm numbers.");

  var ifLow = confirm("Press OK to confirm lowercase letters.");

  var ifCap = confirm("Press OK to confirm uppercase letters.");
 
 ifelse();

 var array = [];
 for(i = 0; i < promptPass; i++){
  var math =  Math.floor(Math.random() * finalPass.length-1);
  var variable = finalPass[math];
  array.unshift(variable);
}

  var newArray = array.join("");
  return newArray;
  
}

function ifelse(){
if(ifSpecial){
  finalPass =  finalPass.concat(specialCharacters);
 }
 if(ifNum){
   finalPass = finalPass.concat(numericCharacters);
 }
 if(ifLow){
   finalPass = finalPass.concat(lowerCasedCharacters);
 }
 if(ifCap){
   finalPass = finalPass.concat(upperCasedCharacters);
 }
 if (!ifNum && !ifCap && !ifLow && !ifSpecial) {
   alert("Please choose at least one character type for your password.")
 }
 else{
   return;
 }

}
}


