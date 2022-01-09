// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var lowerString = "abcdefghijklmnopqrstuvwxyz";
var lowerArray = lowerString.split("")
var upperString = lowerString.toUpperCase();
var upperArray = upperString.split("")
var numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var symbolsString = "!@#$%^&*(){}[]=<>?,.";
var symbolsArray = symbolsString.split("")

function userChoices() {
  var length = parseInt(prompt("Enter the number of characters, between 8 and 128, you would like your password to be."));
  console.log(length)
  var lowerCaseLetters = confirm("Would you like to include lowercase letters in your password?");
  var upperCaseLetters = confirm("Would you like to include uppercase letters in your password?");
  var numbers = confirm("Would you like to include numbers in your password?");
  var specialCharacters = confirm("Would you like to include special symbols in your password?");
  var totalArray = [];
  var password = "";
  var passwordText = document.querySelector("#password");

  if(lowerCaseLetters === true) {
    totalArray = totalArray.concat(lowerArray)
    console.log(totalArray)
  }
  if(upperCaseLetters === true) {
    totalArray = totalArray.concat(upperArray)
    console.log(totalArray)
  }
  if(numbers === true) {
    totalArray = totalArray.concat(numArray)
    console.log(totalArray)
  }
  if(specialCharacters === true) {
    totalArray = totalArray.concat(symbolsArray)
    console.log(totalArray)
  }
  return {totalArray, length};
// if ((length >= 8) && (length <= 128)) {
  
//   if (lowerCaseLetters === true) {
//     function getRandomLower() {
//       return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
//     }
//     selectedFunctionsArray.push(getRandomLower);
//     console.log("selectedFunctionsArray", selectedFunctionsArray);
//     console.log(getRandomLower);
//   }

//   if (upperCaseLetters === true) {
//     function getRandomUpper() {
//       return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
//     }
//     selectedFunctionsArray.push(getRandomUpper);
//     console.log("selectedFunctionsArray", selectedFunctionsArray);
//     console.log(getRandomUpper);
//   }

//   if (numbers === true) {
//     function getRandomNumber() {
//       return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
//     }
//     selectedFunctionsArray.push(getRandomNumber);
//     console.log("selectedFunctionsArray", selectedFunctionsArray);
//     console.log(getRandomNumber);
//   }

//   if (specialCharacters === true) {
//     function getRandomSymbol() {
//         const symbols = '!@#$%^&*(){}[]=<>?,.';
//         return symbols[Math.floor(Math.random() * symbols.length)];
//       }
//       selectedFunctionsArray.push(getRandomSymbol);
//     console.log("selectedFunctionsArray", selectedFunctionsArray);
//     console.log(getRandomSymbol);
//   }

//   if (selectedFunctionsArray.length) {
//     for (var i = 0; i < (parseInt(length)); i++) {
//       var selectedFunctionsArray = selectedFunctionsArray[Math.floor(Math.random() * selectedFunctionsArray.length)];
//       password = password + character; }
//     } else {
//     alert("You need to select at least one option from lowercase letters, uppercase letters, numbers, and special characters! Please try again!")
//     }
//   }
};
function generatePassword(){
  var results = userChoices();
  var passArray = []
    for(var i = 0; i < results.length; i++) {
      var index = Math.floor(Math.random()*results.totalArray.length)
      console.log(index)
      var digit = results.totalArray[index]
      passArray.push(digit)
    }
  return passArray.join("")
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
