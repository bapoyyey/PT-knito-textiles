// interactive.ts

const readlineSync = require('readline-sync');

function fizzBuzz() {
  const fizzBuzzLimit = parseInt(readlineSync.question('Enter the limit for FizzBuzz: '));
  console.log('\nFizzBuzz:');
  for (let i = 1; i <= fizzBuzzLimit; i++) {
    let output = '';
    if (i % 3 === 0) output += 'Fizz';
    if (i % 5 === 0) output += 'Buzz';
    console.log(output || i);
  }
}

function isPalindrome(str) {
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversedStr = cleanStr.split('').reverse().join('');
  return cleanStr === reversedStr;
}

function palindrome() {
  const testString = readlineSync.question('Enter a string to check for palindrome: ');
  console.log(`Is "${testString}" a palindrome? ${isPalindrome(testString)}`);
}

function mainMenu() {
  while (true) {
    console.log('\nMain Menu:');
    console.log('1. FizzBuzz');
    console.log('2. Palindrome');
    console.log('3. Exit');

    const choice = readlineSync.question('Enter your choice (1-3): ');

    switch (choice) {
      case '1':
        fizzBuzz();
        break;
      case '2':
        palindrome();
        break;
      case '3':
        console.log('Exiting the program. Goodbye!');
        process.exit(0);
      default:
        console.log('Invalid choice. Please enter a number between 1 and 3.');
    }
  }
}

mainMenu();
