console.log("hello User, we welcome you to our Password Validator Tool");
console.log("A valid password must: ");
console.log("be at least 10 spaces long.");
console.log("have at least 1 capatial letter and lower case letter.");
console.log("have at least 1 number or symbol.");

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
