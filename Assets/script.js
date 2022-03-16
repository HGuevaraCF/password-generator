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

    // This function generates a string of random characters and will be applied to every type of character
    function generateString(length, variable) {
        let Result = '';
        const charactersLength = variable.length;1
        for ( let i = 0; i < length; i++ ) {
            Result += variable.charAt(Math.floor(Math.random() * charactersLength));
        }
    
        return Result;
    }

    // This switch section decides between prodividg random uppercase, lowercase or both
    switch(passwordCase){
        case '1':
        CaseResult = generateString(length, lowercase);
        break;
        case '2':
        CaseResult = generateString(length, uppercase);
        break;
        case '3':
        CaseResult = generateString(length, upperLower);
        break;
        default:
        CaseResult = '';
    }

    // Generates a string of random numbers
    if(passwordNumeric){
        numbersResult = generateString(length, numbers);
    }else{
        numbersResult = '';
    }

    // Generates a string of random special characters
    if(passwordCharacters){
    charactersResult = generateString(length, specialCharacters);
    }else{
        charactersResult = '';
    }

    //Concatenates every type of character string
    result = CaseResult + numbersResult + charactersResult;

    // Given that the previous variable is ordered by character type, it is neccesary to split - shuffle - join
    var shuffledResult = result.split('').sort(function(){return 0.5-Math.random()}).join('');

    // Making sure the final password has the required lenght
    var password = shuffledResult.substring(0, lengthInt);

    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);