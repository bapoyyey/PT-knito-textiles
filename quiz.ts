// interactive.ts

const readlineSync = require('readline-sync');

function fizzBuzz() {
  const fizzBuzzLimit = parseInt(readlineSync.question('Masukan angka limit angka FizzBuzz: '));
  console.log('\nFizzBuzz:');
  for (let i = 1; i <= fizzBuzzLimit; i++) {
    let output = '';
    if (i % 3 === 0) output += 'Fizz';
    if (i % 5 === 0) output += 'Buzz';
    console.log(output || i);
  }
}

function isPalindrome(str) {
  var cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  var reversedStr = cleanStr.split('').reverse().join('');
  
  if (cleanStr === reversedStr) {
      return true;
  } else {
      return false;
  }
}


function palindrome() {
  const testString = readlineSync.question('masukan kata palindrome: ');
  if (isPalindrome(testString)) {
      console.log(`"${testString}" Merupakan kata palindrome`);
  } else {
      console.log(`"${testString}" Bukan kata palindrome`);
  }
}


function mainMenu() {
  while (true) {
    console.log('\nMain Menu:');
    console.log('1. FizzBuzz');
    console.log('2. Palindrome');
    console.log('3. Exit');

    const choice = readlineSync.question('Masukan pilihan (1-3): ');

    switch (choice) {
      case '1':
        fizzBuzz();
        break;
      case '2':
        palindrome();
        break;
      case '3':
        console.log('Exiting the program.');
        process.exit(0);
      default:
        console.log('Invalid choice.');
    }
  }
}

mainMenu();
