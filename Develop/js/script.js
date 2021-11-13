// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function userChoices() {
  var lenth = parseInt(prompt("Enter the number of characters, between 8 and 128, you would like your password to be."), 10);
  if ((lenth >= 8) && (lenth <= 128)) {
    var lowerCaseLetters = confirm("Would you like to include lowercase letters in your password?");
    if (lowerCaseLetters === true) {
      minimumLowerCases = functionArray.getRandomLower();
      minimumCount++;
    } else {
      alert("You pressed cancel!");
    }
    var upperCaseLetters = confirm("Would you like to include uppercase letters in your password?");
    if (upperCaseLetters === true) {
      minimumUpperCases = functionArray.getRandomUpper();
      minimumCount++;
    } else {
      alert("You pressed cancel!");
    }
    var numbers = confirm("Would you like to include numbers in your password?");
    if (numbers === true) {
      minimumNumbers = functionArray.getRandomNumber();
      minimumCount++;
    } else {
      alert("You pressed cancel!");
    }
    var specialCharacters = confirm("Would you like to includ special symbols in your password?");
    if (specialCharacters === true) {
      minimumSpecialCharacters = functionArray.getRandomSymbol();
      minimumCount++;
    } else {
      alert("You pressed cancel!");
    };
    var password = "";
    for (let i = 0; i < (parseInt(length) - minimumCount); i++) {
      var getRandomNumber = Math.floor(Math.random() * 4);
      password += functionArray[getRandomNumber]();
    }
      var passwordText = document.querySelector("#password");
      passwordText.value = password; 
    } else {
      alert("Invalid response. You must pick a number between 8 and 128.");
    }
  }
  var minimumCount = 0;
  var minimumLowerCases = "";
  var minimumUpperCases = "";
  var minimumNumbers = "";
  var minimumSpecialCharacters = "";

  password =+ minimumLowerCases;
  password =+ minimumUpperCases;
  password =+ minimumNumbers;
  password =+ minimumSpecialCharacters;

  function generatePassword() {
    var options = userChoices();
  }

  var functionArray = {
    getRandomLower: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    },

    getRandomUpper: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26) +65);
    },

    getRandomNumber: function() {
      return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    },

    getRandomSymbol: function() {
      const symbols = '!@#$%^&*(){}[]=<>?,.';
      return symbols[Math.floor(Math.random() * symbols.length)];
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
