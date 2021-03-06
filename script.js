// Assignment Code

// Gets the element from HTML for the generate password button
let generatePasswordButton = document.getElementById("generate");

// Creates array for upper case letters, lower case letters, special charactes, and numbers

let onlyUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
let onlyLower = "abcdefghijklmnopqrstuvwyxz".split("");
let onlySpecial = "#$%&()*+,-.,/:;<=>?@[".split("");
let onlyNumeric = "0123456789".split("");

//Generate password function
function generatePassword() {
    let passwordLength = parseInt(prompt("How many characters would you like your password to contain? Choose between 8 and 128"));

    //alerts user if they have entered a number less than 8 or more than 128 or null
    if (passwordLength < 8) {
        alert('The password must be at least 8 characters!');
        return; //break out of function
    }
    if (passwordLength > 128) {
        alert('The password must be less than 128 characters!');
        return; //break out of function
    }
    if (!passwordLength || isNaN(passwordLength)) {
        alert('The password must have a number between 8 and 128');
        return; //break out of function
    }
    console.log(passwordLength);
    //prompt user for special characters, numbers, lowercase and uppercase letters
    let shouldIncludeSpecialCharacters = confirm("Do you want to include special characters?");
    let shouldIncludeNumeric = confirm("Do you want to include numeric characters?");
    let shouldIncludeLowercase = confirm("Do you want to include lowercase characters?");
    let shouldIncludeUppercase = confirm("Do you want to include uppercase characters?");

    //alert users if they did not select one of the above for their password and ends function so they can re-enter
    let userChoseNothing = !shouldIncludeLowercase && !shouldIncludeUppercase && !shouldIncludeNumeric && !shouldIncludeSpecialCharacters;
    if (userChoseNothing) {
        alert("Your password must contain at least one special, numeric, lowercase, or uppercase character");
        return;
    }

    //create variable to ensure one of each user input is elected and if states to run through inputs and choose character
    let includePassword = [];

    function setCharacters(userOption, array) {
        if (userOption) {
            let includeChar = array[(Math.floor(Math.random() * array.length))];
            includePassword.push(includeChar);
            passwordLength--;
            console.log(includePassword);
        }
    }

    //call function to check the user inputs for each character type and select a character if true
    setCharacters(shouldIncludeSpecialCharacters, onlySpecial);
    setCharacters(shouldIncludeNumeric, onlyNumeric);
    setCharacters(shouldIncludeLowercase, onlyLower);
    setCharacters(shouldIncludeUppercase, onlyUpper);

    //remove "," from array to prepare to add on the remainder of the randomized password
    let finalPassword = includePassword.join("");

    //create variable for remainder of password characters
    let passwordPool = [];

    //function to loop and check the user inputs
    function checkOptions(userOption, array) {
        if (userOption) {
            for (i = 0; i < array.length; ++i) {
                passwordPool.push(array[i]);
            }
        }
    }

    //call function to loop and check the user inputs for each character type
    checkOptions(shouldIncludeSpecialCharacters, onlySpecial);
    checkOptions(shouldIncludeNumeric, onlyNumeric);
    checkOptions(shouldIncludeLowercase, onlyLower);
    checkOptions(shouldIncludeUppercase, onlyUpper);

    //randomizes password based on inputs and length
    for (let i = 0; i < passwordLength; ++i) {
        let randomizer = Math.floor(Math.random() * Math.floor(passwordPool.length));
        finalPassword += passwordPool[randomizer];
        console.log(finalPassword);
    };



    //displays the final password in the password element 
    document.getElementById("password").textContent = finalPassword;

}


// listens for user to click the button and then starts the generatePassword funtion
generatePasswordButton.addEventListener('click', generatePassword);