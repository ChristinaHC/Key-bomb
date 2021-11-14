// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function userChoices() {
  var length = parseInt(prompt("Enter the number of characters, between 8 and 128, you would like your password to be."), 10);
  var lowerCaseLetters = confirm("Would you like to include lowercase letters in your password?");
  var upperCaseLetters = confirm("Would you like to include uppercase letters in your password?");
  var numbers = confirm("Would you like to include numbers in your password?");
  var specialCharacters = confirm("Would you like to include special symbols in your password?");
  var selectedFunctionsArray = [];
  var password = "";
  var passwordText = document.querySelector("#password");

if ((length >= 8) && (length <= 128)) {
  
  if (lowerCaseLetters === true) {
    function getRandomLower() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }
    selectedFunctionsArray.push(getRandomLower);
    console.log("selectedFunctionsArray", selectedFunctionsArray);
    console.log(getRandomLower);
  }

  if (upperCaseLetters === true) {
    function getRandomUpper() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }
    selectedFunctionsArray.push(getRandomUpper);
    console.log("selectedFunctionsArray", selectedFunctionsArray);
    console.log(getRandomUpper);
  }

  if (numbers === true) {
    function getRandomNumber() {
      return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    }
    selectedFunctionsArray.push(getRandomNumber);
    console.log("selectedFunctionsArray", selectedFunctionsArray);
    console.log(getRandomNumber);
  }

  if (specialCharacters === true) {
    function getRandomSymbol() {
        const symbols = '!@#$%^&*(){}[]=<>?,.';
        return symbols[Math.floor(Math.random() * symbols.length)];
      }
      selectedFunctionsArray.push(getRandomSymbol);
    console.log("selectedFunctionsArray", selectedFunctionsArray);
    console.log(getRandomSymbol);
  }

  if (selectedFunctionsArray.length) {
    for (var i = 0; i < (parseInt(length)); i++) {
      var selectedFunctionsArray = selectedFunctionsArray[Math.floor(Math.random() * selectedFunctionsArray.length)];
      password = password + character; }
    } else {
    alert("You need to select at least one option from lowercase letters, uppercase letters, numbers, and special characters! Please try again!")
    }
  }
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
