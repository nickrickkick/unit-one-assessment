console.log("hello User, we welcome you to our Password Validator Tool");
console.log("A valid password must: ");
console.log("be at least 10 spaces long.");
console.log("have at least 1 capatial letter.");
console.log("have at least 1 number");
console.log("have at least 1 lower case letter.");
//this was the way to have the user give input.
/**  
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question("Now put in a valid password ", password => {
    if (password.length >= 10){
        console.log("your password is valid");
    } else {
        console.log("your password is not valid. Please try again.");
    }
    console.log(`Hey there ${password}!`);
    readline.close();
  });
 */
// this has the user input hidden so others cant see what they are typing.
  var capatial = false;
  var numOrSymbol = false;
  var lower = false;
  var character = '';
  var Writable = require('stream').Writable;
  
  var mutableStdout = new Writable({
    write: function(chunk, encoding, callback) {
      if (!this.muted)
        process.stdout.write(chunk, encoding);
      callback();
    }
  });
  
  mutableStdout.muted = false;
  
  var readline = require('readline').createInterface({
    input: process.stdin,
    output: mutableStdout,
    terminal: true
  });
  
  readline.question('Password: ', function(password) {
     
    for (let i = 0; i < password.length; i++){
        character = password.charAt(i); 
        var charChecker = password.charAt(i);
        
        if (!isNaN(character * 1)){
            numOrSymbol = true;
        }else {
            if (character === charChecker.toUpperCase()){
                capatial = true;
            }
            if (character === charChecker.toLowerCase()){
              lower = true;
            }
           
        }
    }
    if (password.length >= 10 && capatial === true && numOrSymbol === true && lower === true){
        console.log("password is valid");
        var turtle = String(` /      \  |  o | \n|        |/ ___\| \n|_________/     \n|_|_| |_|_|`);
        console.log(turtle);
/** 
      } else if (password.length < 10 && capatial === true && numOrSymbol === true ) {
        console.log("password is invalid. you were under 10 spaces.");
      } else if (password.length >= 10 && capatial === false && numOrSymbol === true ){
          console.log("password is invalid. ther was no capatial.");
      } else if (password.length >= 10 && capatial === true && numOrSymbol === false ){
          console.log("password is invalid. you did not put in a number or symbol");
      } else if (password.length < 10 && capatial === false && numOrSymbol === true ){
          console.log("password was invalid. you did not have 10 spaces and no capatial");
      } else if (password.length < 10 && capatial === true && numOrSymbol === false ){
          console.log("password invalid. you did not do 10 spaces and no number or symbol.")
      } else if (password.length >= 10 && capatial === false && numOrSymbol === false ){
          console.log("password is invalid. you did not have a capatial and not number or symbol.")
          */
      } else {
          console.log("password invalid.")
          var sadFace = String(`________________________¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶________\n____________________¶¶¶___________________¶¶¶¶_____\n________________¶¶¶_________________________¶¶¶¶___\n______________¶¶______________________________¶¶¶__\n___________¶¶¶_________________________________¶¶¶_\n_________¶¶_____________________________________¶¶¶\n________¶¶_________¶¶¶¶¶___________¶¶¶¶¶_________¶¶\n______¶¶__________¶¶¶¶¶¶__________¶¶¶¶¶¶_________¶¶\n_____¶¶___________¶¶¶¶____________¶¶¶¶___________¶¶\n____¶¶___________________________________________¶¶\n___¶¶___________________________________________¶¶_\n__¶¶____________________¶¶¶¶____________________¶¶_\n_¶¶_______________¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶______________¶¶__\n_¶¶____________¶¶¶¶___________¶¶¶¶¶___________¶¶___\n¶¶¶_________¶¶¶__________________¶¶__________¶¶____\n¶¶_________¶______________________¶¶________¶¶_____\n¶¶¶______¶________________________¶¶_______¶¶______\n¶¶¶_____¶_________________________¶¶_____¶¶________\n_¶¶¶___________________________________¶¶__________\n__¶¶¶________________________________¶¶____________\n___¶¶¶____________________________¶¶_______________\n____¶¶¶¶______________________¶¶¶__________________\n_______¶¶¶¶¶_____________¶¶¶¶¶_____________________`);
          console.log(sadFace);
      }
   // console.log('\nPassword is ' + password);
    readline.close();
  });
  
  mutableStdout.muted = true;
