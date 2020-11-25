// Declaring our variables
    //4 matrixes are used so that they can be turned on or off

var lowerLetters = [97, 122];
var upperLetters = [65, 90];
var numbers = [48, 57];
var specialCharacters = [33, 47];





// Write password to the #securePassword input
function writePassword() {
    //html pulling variables are placed inside the function so that their values can be changed between generations
    var ucLetters = document.querySelector("#ucLetters").checked;
    var lcLetters = document.querySelector("#lcLetters").checked;
    var nums = document.querySelector("#nums").checked;
    var specialChars = document.querySelector("#specialChars").checked;

    //retrieving the user inputted length of the password - will be used to determine the # of characters selected and pushed
    var length = document.querySelector("#length").value;

    //declaring empty arrays to work with
    var randomCharacterArr = [];
    var password = [];


    //looping through each indevidual array (if checked) and pushing their values to an all encompasing array called 'randomCharacterarr' 
        //after several iterations, I discovered that using unicode was much easier than the individual characters
    if (ucLetters){
        for(var i = upperLetters[0]; i <= upperLetters[1].last; i++){
            randomCharacterArr.push(i);
        }
    }
    if (lcLetters){
        for(var i = lowerLetters[0]; i <= lowerLetters[1]; i++){
            randomCharacterArr.push(i);
        }
    }
    if (nums){
        for(var i = numbers[0]; i <= numbers[1]; i++){
            randomCharacterArr.push(i);
        }
    }
    if (specialChars){
        for(var i = specialCharacters[0]; i <= specialCharacters[1]; i++){
            randomCharacterArr.push(i);
        }
    }
    if(ucLetters == 0 && lcLetters == 0 && nums == 0 && specialChars == 0){
        alert("Error: No character perameters selected");
    }

    //loops through the randomCharacterArr 'length' number of times, each time randomly selecting a character code and converting it to the corresponding character
    for(i = 0; i < length; i++){
        password.push(String.fromCharCode(randomCharacterArr[Math.floor(Math.random() * randomCharacterArr.length)]));
    }

    //this joins the individual elements of the password array into a string which is set the the final variable 'securePassword'
    securePassword.textContent = password.join('');
}




// Creates generate button and adds event listener
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);



function copyTxt() {
    /* Get the text field */
    var copyText = document.getElementById("securePassword");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  
    /* Copy the text inside the text field */
    document.execCommand("copy");

    alert("Copied Password: " + copyText.value);
  }