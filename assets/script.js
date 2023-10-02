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
*/
    // Assignment Code
    // This defines generateBtn and tells the script where to find it on the html
    var generateBtn = document.querySelector('#generate')
    
    // this defines all the arrays that my randomFunc() can process
    const upperCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N','O' , 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    const lowerCaseArr = ['a', 'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    const numbersArr = [0,1,2,3,4,5,6,7,8,9]
    const specialCharactersArr = ['!','@','#','$','%','^','&']
    
// this will contain the logic for processing user input as well as how the computer will take in the criteria.
function randomFunc() {
    // var password = [] creates a blank array which the random math generator will .push into
    var password = []
    // allCharactersArr = [] creates a blank array which the user input and computer logic will add the defined arrays above into for processing in the mathrandom
    var allCharactersArr = []
    

    // var characters, upperCase, lowerCase, numbers, specialCharacters all are prompts or confirms to retrieve logic from the user
    // characters prompt returns a definitive number within its range otherwise returns the user to the start of randomFunc()

    var characters = prompt('Select amount of characters in password 8-128')
    if (characters >= 8 && characters <= 128) {
        console.log("length: " + length);
        
    } else {
        var length = false;
        alert("You must choose a character number of 8-128");
        return randomFunc()
    }
    
    // upperCase, lowerCase, numbers, specialCharacters all are confirms which return true or false booleans
    // the true or false information is then logged into the console as well as alerting the user of their selection

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
    

    // these if statements will pull from the above respective elements and if the statement is true it add the respective elements array to allCharactersArr

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
       

    // this for loop is stating i < characters meaning whatever number the user input for prompt characters above will be used as its number to stop at.
    // var defines what the randomArrMath will be
    // password.push will pull 1 letter from the allCharactersArr that has been processed by randomArrMath amd add it to the password [] array above
    // this process will continue to loop until i = characters
    // return password.join('') returns the newly generated array of text to the passwordText.value = password below but as a string instead of an array
       
       for (i = 0; i < characters; i++) {
           var randomArrMath = Math.floor(Math.random()* allCharactersArr.length)
           password.push(allCharactersArr[randomArrMath])
        }
           return password.join('')
}
    
    
    // Write password to the #password input
    //  writePassword is calling randomFunc
    // it is also stating that the passwordText will find #password
    // passwordText.value = password means that whatever password comes back as will now be passwordText which will apply to the html file under #password
    function writePassword() {
        var password = randomFunc()
        var passwordText = document.querySelector("#password");
        passwordText.value = password;
    }
    
    // Add event listener to generate button
    //This will make the button reactive to click and call writePassword()
    // but generateBtn must be defined above for it to be responsive
    generateBtn.addEventListener("click", writePassword);
    