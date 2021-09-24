// Start 
// Input variables: 
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

// Special characters 
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// Numeric characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Alphabetical characters
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Space is for the Uppercase conversion
space = [];
// Choices declared outside the if statement so they can be concatenated upon condition
var choices;
// converts letters to uppercase 
var toUpper = function (x) {
    return x.toUpperCase();
};
// creates a variable for uppercase conversion
alpha2 = alpha.map(toUpper);


var generateBtn = document.querySelector("#generate");



generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password;
 
 }

// Start function to generate password
function generatePassword() {
    // Asks for user input
    enter = parseInt(prompt("How many characters would you like in your password? Choose between 8 and 128"));
    // First if statement for user validation 
    // Console log format for output
    console.log(enter);

    if (!enter) {
        alert("Value required");
    } else if (enter < 8 || enter > 128) {
        // Validates user input
        // Start user input prompts
        enter = parseInt(prompt("You must choose between 8 and 128"));
        

    } else {
    // Continues once user input is validated
        confirmNumber = confirm("Will this contain numbers?");
        confirmCharacter = confirm("Will this contain special characters?");
        confirmUppercase = confirm("Will this contain Uppercase letters?");
        confirmLowercase = confirm("Will this contain Lowercase letters?");
    };

    // Else if for 4 negative options
    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        choices = alert("You must choose a criterias");

    }

    // Else if for 4 positive options
    else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

        choices = character.concat(number, alpha, alpha2);
        console.log(choices);
    }
    // Else if for 3 positive options
    else if (confirmCharacter && confirmNumber && confirmUppercase) {
        choices = character.concat(number, alpha2);
        console.log(choices);
    }
    else if (confirmCharacter && confirmNumber && confirmLowercase) {
        choices = character.concat(number, alpha);
        console.log(choices);
    }
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        choices = character.concat(alpha, alpha2);
        console.log(choices);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = number.concat(alpha, alpha2);
        console.log(choices);
    }
    // Else if for 2 positive options 
    else if (confirmCharacter && confirmNumber) {
        choices = character.concat(number);
        console.log(choices);

    } else if (confirmCharacter && confirmLowercase) {
        choices = character.concat(alpha);
        console.log(choices);

    } else if (confirmCharacter && confirmUppercase) {
        choices = character.concat(alpha2);
        console.log(choices);
    }
    else if (confirmLowercase && confirmNumber) {
        choices = alpha.concat(number);
        console.log(choices);

    } else if (confirmLowercase && confirmUppercase) {
        choices = alpha.concat(alpha2);
        console.log(choices);

    } else if (confirmNumber && confirmUppercase) {
        choices = number.concat(alpha2);
        console.log(choices);
    }
    // Else if for 1 positive option
    else if (confirmCharacter) {
        choices = character;
        console.log(choices);
    }
    else if (confirmNumber) {
        choices = number;
        console.log(choices);
    }
    else if (confirmLowercase) {
        choices = alpha;
        console.log(choices);
    }
    // Space variable to fill uppercase conversion
    else if (confirmUppercase) {
        choices = space.concat(alpha2);
        console.log(choices);
    };

    // userPassword variable is an array placeholder for user generated amount of length
    var userPassword = [];

    // Random selection for all variables: 
    for (var i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        userPassword.push(pickChoices);
    }
    // This joins the password array and converts it to a string
    var password = userPassword.join("");
    UserInput(password);
    return password;

}
// Puts the password value into the textbox
function UserInput(password) {
    document.getElementById("password").textContent = password;

}

