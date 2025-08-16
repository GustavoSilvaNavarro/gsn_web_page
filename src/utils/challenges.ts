export const codeChallenges = [
  {
    id: 1,
    title: 'Add Two Numbers',
    description: 'Write a function named `add` that takes two numbers, `a` and `b`, and returns their sum.',
    functionName: 'add',
    defaultCode: 'function add(a, b) {\n  // Your code here\n  return a + b;\n}',
    testCases: [
      { input: [1, 2], expected: 3 },
      { input: [5, 10], expected: 15 },
      { input: [-1, 1], expected: 0 },
    ],
  },
  {
    id: 2,
    title: 'String Reversal',
    description:
      'Create a function named `reverseString` that takes a string and returns it reversed. For example, "hello" should return "olleh".',
    functionName: 'reverseString',
    defaultCode: "function reverseString(str) {\n  // Your code here\n  return str.split('').reverse().join('');\n}",
    testCases: [
      { input: ['hello'], expected: 'olleh' },
      { input: ['react'], expected: 'tcaer' },
      { input: ['12345'], expected: '54321' },
    ],
  },
  {
    id: 3,
    title: 'Find the Max Number',
    description:
      'Write a function named `findMax` that takes an array of numbers and returns the largest number in the array.',
    functionName: 'findMax',
    defaultCode: 'function findMax(arr) {\n  // Your code here\n  return Math.max(...arr);\n}',
    testCases: [
      { input: [[1, 5, 2, 8, 3]], expected: 8 },
      { input: [[-1, -5, -2]], expected: -1 },
      { input: [[100]], expected: 100 },
    ],
  },
  {
    id: 4,
    title: 'Check for Palindrome',
    description:
      "Write a function named `isPalindrome` that takes a string and returns `true` if it's a palindrome (reads the same forwards and backward), otherwise `false`.",
    functionName: 'isPalindrome',
    defaultCode:
      "function isPalindrome(str) {\n  // Your code here\n  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');\n  return cleanedStr === cleanedStr.split('').reverse().join('');\n}",
    testCases: [
      { input: ['madam'], expected: true },
      { input: ['A man, a plan, a canal: Panama'], expected: true },
      { input: ['hello'], expected: false },
    ],
  },
  {
    id: 5,
    title: 'FizzBuzz',
    description:
      'Write a function named `fizzBuzz` that takes a number `n`. For numbers from 1 to `n`, it should return "FizzBuzz" if the number is divisible by 3 and 5, "Fizz" if divisible by 3, "Buzz" if divisible by 5, and the number itself otherwise. The function should return an array of the results.',
    functionName: 'fizzBuzz',
    defaultCode: `function fizzBuzz(n) {
  // Your code here
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      result.push('FizzBuzz');
    } else if (i % 3 === 0) {
      result.push('Fizz');
    } else if (i % 5 === 0) {
      result.push('Buzz');
    } else {
      result.push(i);
    }
  }
  return result;
}`,
    testCases: [
      { input: [3], expected: [1, 2, 'Fizz'] },
      { input: [5], expected: [1, 2, 'Fizz', 4, 'Buzz'] },
      {
        input: [15],
        expected: [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz'],
      },
    ],
  },
  {
    id: 6,
    title: 'Factorial',
    description:
      'Write a function named `factorial` that takes a non-negative integer `n` and returns its factorial. The factorial of a number is the product of all positive integers less than or equal to that number.',
    functionName: 'factorial',
    defaultCode:
      'function factorial(n) {\n  // Your code here\n  if (n < 0) return -1; // Or throw an error\n  if (n === 0) return 1;\n  let result = 1;\n  for (let i = 1; i <= n; i++) {\n    result *= i;\n  }\n  return result;\n}',
    testCases: [
      { input: [0], expected: 1 },
      { input: [5], expected: 120 },
      { input: [7], expected: 5040 },
    ],
  },
  {
    id: 7,
    title: 'Find the Missing Number',
    description:
      'You are given an array of unique integers from 1 to `n` with one number missing. Write a function named `findMissingNumber` that takes the array and `n`, and returns the missing number.',
    functionName: 'findMissingNumber',
    defaultCode:
      'function findMissingNumber(arr, n) {\n  // Your code here\n  const totalSum = (n * (n + 1)) / 2;\n  const arraySum = arr.reduce((acc, curr) => acc + curr, 0);\n  return totalSum - arraySum;\n}',
    testCases: [
      { input: [[1, 2, 4, 5], 5], expected: 3 },
      { input: [[1, 3, 4], 4], expected: 2 },
      { input: [[2, 3, 4, 5, 6], 6], expected: 1 },
    ],
  },
  {
    id: 8,
    title: 'Sum All Primes',
    description:
      'Write a function named `sumPrimes` that takes a number and returns the sum of all prime numbers up to and including that number.',
    functionName: 'sumPrimes',
    defaultCode: `function sumPrimes(num) {
  // Your code here
  function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}`,
    testCases: [
      { input: [10], expected: 17 }, // 2 + 3 + 5 + 7
      { input: [977], expected: 73156 },
    ],
  },
  {
    id: 9,
    title: 'Capitalize First Letter of Each Word',
    description:
      'Write a function named `titleCase` that takes a sentence string and capitalizes the first letter of each word. Return the new string.',
    functionName: 'titleCase',
    defaultCode:
      "function titleCase(str) {\n  // Your code here\n  return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');\n}",
    testCases: [
      { input: ['hello world'], expected: 'Hello World' },
      { input: ['a short sentence'], expected: 'A Short Sentence' },
      { input: ['capitalize the first letter'], expected: 'Capitalize The First Letter' },
    ],
  },
  {
    id: 10,
    title: 'Find the Longest Word',
    description:
      'Write a function named `findLongestWord` that takes a sentence string and returns the length of the longest word in the string.',
    functionName: 'findLongestWord',
    defaultCode:
      "function findLongestWord(str) {\n  // Your code here\n  return Math.max(...str.split(' ').map(word => word.length));\n}",
    testCases: [
      { input: ['The quick brown fox jumped over the lazy dog'], expected: 6 },
      { input: ['I love JavaScript'], expected: 10 },
      { input: ['Short'], expected: 5 },
    ],
  },
];
