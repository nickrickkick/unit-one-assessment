console.log("hello User, we welcome you to our Password Validator Tool");
console.log("A valid password must: ");
console.log("be at least 10 spaces long.");
console.log("have at least 1 capatial letter.");
console.log("have at least 1 number or symbol.");
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
              
        if (character === character.toUpperCase()){
            capatial = true;
        }
        if (!isNaN(character * 1)){
            numOrSymbol = true;
        }
    }
    if (password.length >= 10 && capatial === true && numOrSymbol === true ){
        console.log("password is valid");
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
      } else {
          console.log("password invalid.")
      }
    console.log('\nPassword is ' + password);
    readline.close();
  });
  
  mutableStdout.muted = true;
