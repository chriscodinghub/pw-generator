/*
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

var choices = ['8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60']
*/

    //length = (min="8", max="60")
    
    
    // Assignment Code
    var generateBtn = document.querySelector('#generate')
    
    
    const upperCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N','O' , 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    const lowerCaseArr = ['a', 'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    const numbersArr = [0,1,2,3,4,5,6,7,8,9]
    const specialCharactersArr = ['!','@','#','$','%','^','&']
    

function randomfunc() {
    var password = []
    var allCharactersArr = []
    
    var characters = prompt('Select amount of characters in password 8-128')
    if (characters >= 8 && characters <= 128) {
        console.log("length: " + length);
        
    } else {
        var length = false;
        alert("You must choose a character number of 8-128");
        return randomfunc()
    }
    
    
var upperCase = confirm('Do you want to use Uppercase letters?')
    if (upperCase === true){
        alert('Uppercase will be used.')
        console.log('uppercase use ' + upperCase)
    } else {
        alert('Uppercase will not be used.')
        console.log('uppercase use ' + upperCase)
    }
    
    
    
var lowerCase = confirm('Do you want to use Lowercase letters?')
    if (lowerCase === true){
        alert('Lowercase will be used.')
        console.log('lowercase use ' + lowerCase)
    } else {
        alert('Lowercase will not be used.')
        console.log('lowercase use ' + lowerCase)
    }
    
    
    
var numbers = confirm('Do you want to use Numbers?')
    if (numbers === true){
        alert('Numbers will be used.')
        console.log('numbers use ' + numbers)
    } else {
        alert('Numbers will not be used.')
        console.log('numbers use ' + numbers)
    }
    
    
    
    
var specialCharacters = confirm('Do you want to use Special Characters?')
    if (specialCharacters === true){
            alert('Special Characters will be used.')
            console.log('specialCharacters use ' + specialCharacters)
        } else {
            alert('Special Characters will not be used.')
            console.log('specialCharacters use ' + specialCharacters)
        }
    
    if (upperCase === true) {
         allCharactersArr = allCharactersArr.concat (upperCaseArr)         
        }
    if (lowerCase === true) {
        allCharactersArr = allCharactersArr.concat (lowerCaseArr)         
       }
    if (numbers === true) {
        allCharactersArr = allCharactersArr.concat (numbersArr)         
       }
    if(specialCharacters === true) {
        allCharactersArr = allCharactersArr.concat (specialCharactersArr)         
       }
       console.log(allCharactersArr)
       
       
       for (i = 0; i < characters; i++) {
           var randomArrMath = Math.floor(Math.random()* allCharactersArr.length)
           password.push(allCharactersArr[randomArrMath])
        }
           return password.join('')
}
    
    
    // Write password to the #password input
    function writePassword() {
        var password = randomfunc()
        var passwordText = document.querySelector("#password");
        passwordText.value = password;
    }
    
    // Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);
    