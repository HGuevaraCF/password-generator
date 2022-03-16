// Assignment Code
var generateBtn = document.querySelector("#generate");
// Assignment of fixed variables
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var upperLower = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz';
var numbers = '1234567890';
var specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// Write password to the #password input
function writePassword() {
    var CaseResult = '';
    var numbersResult = '';
    var charactersResult = '';
    var passwordCase = prompt("¿Lowercase (1), uppercase (2) or both (3)?");
      if(passwordCase != "1" && passwordCase != "2" && passwordCase != "3"){
        passwordCase =  prompt("Please introduce only a number between 1 and 3... ¿Lowercase (1), uppercase (2) or both (3)?")
      }
    var passwordNumeric = confirm("include numbers?");
    var passwordCharacters = confirm("include special characters?");
    var passwordLength = prompt("Specify the password length (8-128 characters");
      if(passwordLength < "8" && passwordLength > "128"){
        passwordLength = prompt("Please specify the password lenght with a number between 8 and 128");
      }
    var lengthInt = parseInt(passwordLength, 10);   // Password length to number
  
  //Evaluate prompt's results in order to generate the same amount of letters, numbers and special characters
    if(passwordNumeric == true && passwordCharacters == true){
      var length = Math.ceil(lengthInt / 3);
    }else if (passwordNumeric == true || passwordCharacters == true){
      var length = Math.ceil(lengthInt / 2);
    }else{
      var length = lengthInt;
    }
}  