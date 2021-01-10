// Assignment Code

// Gets the element from HTML for the generate password button
var generatePasswordButton = document.getElementById("generate");

// Creates array for upper case letters, lower case letters, special charactes, and numbers
var onlyUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var onlyLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var onlySpecial = ['#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '['];
var onlyNumeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//create function for user inputs for password and to generate password

function generatePassword() {


    //this function generates the prompts and user values for the password
    function generateInputs() {

        //prompt and create variable for user input for character length - will also convert the input to and integer

        var length = parseInt(prompt("How many characters would you like your password to contain? Choose between 8 and 128"));

        //alerts user if they have entered a number less than 8 or more than 128
        if (length < 8) {
            alert('The password must be at least 8 characters!');
            return;
        }
        if (length > 128) {
            alert('The password must be less than 128 characters!');
            return;
        }

        //prompt user for special characters
        var shouldIncludeSpecialCharacters = confirm("Do you want to include special characters?");

        //prompt user for numeric characters
        var shouldIncludeNumeric = confirm("Do you want to include numeric characters?");

        //prompt user for lowercase characters
        var shouldIncludeLowercase = confirm("Do you want to include lowercase characters?");

        //prompt user for uppercase characters
        var shouldIncludeUppercase = confirm("Do you want to include uppercase characters?");

        //alert users if they did not select one of the above for their password and ends function so they can re-enter
        if (!shouldIncludeLowercase && !shouldIncludeUppercase && !shouldIncludeNumeric && !shouldIncludeSpecialCharacters) {
            alert("Your password must contain at least one special, numeric, lowercase, or uppercase character");
            return;
        }

        var questionOptions = {
            length: length,
            specialCharacters: shouldIncludeSpecialCharacters,
            numeric: shouldIncludeNumeric,
            lowerCase: shouldIncludeLowercase,
            upperCase: shouldIncludeUppercase
        };
        // stops the generateinputs function and returns the questionOptions based on user input
        return questionOptions;

    }

    var options = generateInputs();
    console.log(options);

    var passwordPool = [];
    console.log(passwordPool);

    if (options.specialCharacters) {
        for (i = 0; i < onlySpecial.length; ++i) {
            passwordPool.push(onlySpecial[i]);
        }
    }
    if (options.numeric) {
        for (i = 0; i < onlyNumeric.length; ++i) {
            passwordPool.push(onlyNumeric[i]);
        }
    }
    if (options.lowerCase) {
        for (i = 0; i < onlyLower.length; ++i) {
            passwordPool.push(onlyLower[i]);
        }
    }
    if (options.upperCase) {
        for (i = 0; i < onlyUpper.length; ++i) {
            passwordPool.push(onlyUpper[i]);
        }
    }

    var finalPassword = [];

    for (let i = 0; i < options.length; ++i) {
        var randomizer = Math.floor(Math.random() * Math.floor(passwordPool.length));
        finalPassword.push(passwordPool[randomizer]);
    }

    console.log(finalPassword);

    var superFinal = finalPassword.join('');
    console.log(superFinal);

    //displays the final password in the password element 
    document.getElementById("password").textContent = superFinal;
}

// listens for user to click the button and then starts the generatePassword funtion
generatePasswordButton.addEventListener('click', generatePassword);