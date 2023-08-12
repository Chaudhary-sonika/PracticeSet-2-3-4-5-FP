// Q1. Given an array, write an ES6 function that returns the total length of all the strings in an array.

const strings1 = ["apple", "banana", "cherry", "date", "blueberry"];
// Your code here
const totalLength = (arr) => arr.reduce((acc, curr) => acc + curr.length, 0);
console.log(totalLength(strings1));
// Output: 30

// Q2. Write an ES6 function sumSquares that takes an array of numbers and returns the sum of the squares of all the numbers in the array

const numbers = [1, 2, 3, 4, 5];
// Your code here
const sumSquares = (arr) => arr.reduce((acc, curr) => acc + curr * curr, 0);
console.log(sumSquares(numbers));
// Output: 55

// Q3. Write an ES6 function that calculates and returns the total value of all items in an array of objects.

const items = [
  { name: "Item 1", price: 10 },
  { name: "Item 2", price: 20 },
  { name: "Item 3", price: 30 },
];
// Your code here
const totalValue = (arr) => arr.reduce((acc, curr) => acc + curr.price, 0);
console.log(totalValue(items));
// Output: 60

// Q4. Write an ES6 function that takes an array of strings as input and concatenates them into a single string.

// Your code here
const concatStrings = (arr) => arr.reduce((acc, curr) => acc + curr);
console.log(concatStrings(["this", "is", "fun"])); // Output: 'thisisfun'

// Q5. Write an ES6 function to multiply and return all the elements of a given array.

const numbers1 = [1, 2, 3, 4, 5];
// Your code here
const product = (arr) => arr.reduce((acc, curr) => acc * curr);
console.log(product(numbers1));
// Output: 120

// Q6. Write an ES6 function that takes an array of strings and returns the longest string.

const strings = ["neogcamp", "Haule Haule", "code", "Batman", "Awesome"];
// Your code here
const longestString = (arr) =>
  arr.reduce((acc, curr) => (acc.length > curr.length ? acc : curr));
console.log(longestString(strings));
// Output: 'Haule Haule'

// Q7. Write an ES6 function that takes an array of objects with name and age property, and returns the name of the oldest person.

const people = [
  { name: "Jeena", age: 25 },
  { name: "Priya", age: 30 },
  { name: "Naina", age: 45 },
];
// Your code here
const oldestPersonName = (arr) =>
  arr.reduce((acc, curr) => (acc.age > curr.age ? acc.name : curr.name));
console.log(oldestPersonName(people));
// Output: 'Naina'

// Q8. Write an ES6 function that takes an array of objects representing people with properties name and age, and returns an object with the average age of all the people.

const people2 = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 40 },
];
// Your code here
const getAverageAge = (arr) => {
  const totalAge = arr.reduce((acc, curr) => acc + curr.age, 0);
  return { averageAge: totalAge / arr.length };
};
console.log(getAverageAge(people2));
// Output: { averageAge: 32.5 }

// Q9. Write an ES6 function that takes an array of objects representing products with properties name, price, and quantity, and returns an object with the most expensive product.

const products = [
  { name: "Bread", price: 10, quantity: 2 },
  { name: "Clips", price: 20, quantity: 5 },
  { name: "Knife", price: 30, quantity: 1 },
  { name: "Slipper", price: 40, quantity: 3 },
];
// Your code here
const findMostExpensiveProduct = (arr) =>
  arr.reduce((acc, curr) =>
    acc.price * acc.quantity > curr.price * curr.quantity ? acc : curr
  );
console.log(findMostExpensiveProduct(products));
// { name: "Slipper", price: 40, quantity: 3 }

// Q10. Write an ES6 function that takes an array of strings and returns an object with the count of each string.

const fruits = [
  "apple",
  "banana",
  "banana",
  "cherry",
  "apple",
  "apple",
  "banana",
];
// Your code here
const countStrings = (arr) =>
  arr.reduce((acc, curr) => {
    acc[curr] ? (acc[curr] += 1) : (acc[curr] = 1);
    return acc;
  }, {});
console.log(countStrings(fruits));
// Output: { 'apple': 3, 'banana': 3, 'cherry': 1 }
