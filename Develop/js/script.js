// Assignment code here
var numOfChar = {
  from: 8,
  to: 128
}

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
    // minimumLowerCases = functionArray.getRandomLower();
    // minimumCount++;
    console.log(getRandomLower);
  } else {
    alert("You pressed cancel!");
  }
  if (upperCaseLetters === true) {
    function getRandomUpper() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }
    selectedFunctionsArray.push(getRandomUpper);
    console.log("selectedFunctionsArray", selectedFunctionsArray);
    console.log(getRandomUpper);
    // minimumUpperCases = functionArray.getRandomUpper();
    // minimumCount++;
  } else {
    alert("You pressed cancel!");
  }
  if (numbers === true) {
    function getRandomNumber() {
      return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    }
    selectedFunctionsArray.push(getRandomNumber);
    console.log("selectedFunctionsArray", selectedFunctionsArray);
    console.log(getRandomNumber);
    // minimumNumbers = functionArray.getRandomNumber();
    // minimumCount++;
  } else {
    alert("You pressed cancel!");
  }
  if (specialCharacters === true) {
    function getRandomSymbol() {
        const symbols = '!@#$%^&*(){}[]=<>?,.';
        return symbols[Math.floor(Math.random() * symbols.length)];
      }
      selectedFunctionsArray.push(getRandomSymbol);
    console.log("selectedFunctionsArray", selectedFunctionsArray);
      console.log(getRandomSymbol);
      // minimumSpecialCharacters = functionArray.getRandomSymbol();
      // minimumCount++;
    } else {
      alert("You pressed cancel!");
    };
  if (selectedFunctionsArray.length) {
    for (var i = 0; i < (parseInt(length)); i++) {
      var passwordText = selectedFunctionsArray[Math.floor(Math.random() * selectedFunctionsArray.length)];
      password = password + character; }
  } else {
    alert("You need to select at least one user option!")
  }
  
passwordText.value = password; 
} else {
  alert("Invalid response. You must pick a number between 8 and 128.");
}
  // password += functionArray[getRandomNumber]();
  }
  // var minimumCount = 0;
  // var minimumLowerCases = "";
  // var minimumUpperCases = "";
  // var minimumNumbers = "";
  // var minimumSpecialCharacters = "";

  // password =+ minimumLowerCases;
  // password =+ minimumUpperCases;
  // password =+ minimumNumbers;
  // password =+ minimumSpecialCharacters;

  function generatePassword() {
    var options = userChoices();
  }

  // var functionArray = {
  //   getRandomLower: function() {
  //     return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  //   },

  //   getRandomUpper: function() {
  //     return String.fromCharCode(Math.floor(Math.random() * 26) +65);
  //   },

  //   getRandomNumber: function() {
  //     return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  //   },

  //   getRandomSymbol: function() {
  //     const symbols = '!@#$%^&*(){}[]=<>?,.';
  //     return symbols[Math.floor(Math.random() * symbols.length)];
  // }
// }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
