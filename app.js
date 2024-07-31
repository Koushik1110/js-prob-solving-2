// 1. ES6 Destructuring

// Problem: You have an object representing a person. Use ES6 destructuring to extract the name and age properties.

// Answer

// const person = {
//   name: 'Koushik Saha',
//   age: 30,
//   occupation: 'Developer'
// };

// const { name, age } = person;

// console.log(name); // Output: Koushik Saha
// console.log(age);  // Output: 30

// 2. ES6 Module
// Problem: Create a module that exports a function to calculate the area of a circle and import it into another file.

// Answer

// import { calculateArea } from './circle.js';

// const radius = 5;
// console.log(`The area of the circle is: ${calculateArea(radius)}`);

// 3. ES6 Classes
// Problem: Create a class Rectangle with properties width and height and a method to calculate the area.

// // Answer

// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }

//   calculateArea() {
//     return this.width * this.height;
//   }
// }

// // Example:
// const myRectangle = new Rectangle(5, 10);
// console.log(`The area of the rectangle is: ${myRectangle.calculateArea()}`); // Output: The area of the rectangle is: 50

// 4. Getter and Setter in ES6
// Problem: Create a class Person with a getter and setter for the fullName property.

// Answer

// class Person {
//   constructor(firstName, lastName) {
//     this._firstName = firstName;
//     this._lastName = lastName;
//   }

//   get fullName() {
//     return `${this._firstName} ${this._lastName}`;
//   }

//   set fullName(fullName) {
//     const [firstName, lastName] = fullName.split(' ');
//     this._firstName = firstName;
//     this._lastName = lastName;
//   }
// }

// // Example:

// const person = new Person('Koushik', 'Saha');
// console.log(person.firstName); // Output: Koushik

// person.fullName = 'Koushik Saha';
// console.log(person.lastName); // Output: Saha

// 5. Class Expressions
// Problem: Create a class expression for a Circle with a method to calculate the circumference.

// Answer

// const Circle = class {
//   constructor(radius) {
//     this.radius = radius;
//   }

//   calculateCircumference() {
//     return 2 * Math.PI * this.radius;
//   }
// };

// 6. JavaScript Computed Properties
// Problem: Create an object with computed property names based on variables.

// Answer

// const propName1 = 'name';
// const propName2 = 'age';

// const person = {
//   [propName1]: 'Rahat',
//   [propName2]: 25
// };

// console.log(person.name); // Output: Rahat
// console.log(person.age);  // Output: 25

// 7. Inheritance
// Problem: Create a base class Animal and a derived class Dog that inherits from Animal.

// Answer

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   makeSound() {
//     console.log(`${this.name} makes a sound.`);
//   }
//   eat() {
//     console.log(`${this.name} eats.`);
//   }
// }

// class Dog extends Animal {
//   constructor(name, breed) {
//     super(name); // Call the parent class constructor
//     this.breed = breed;
//   }

//   makeSound() {
//     console.log(`${this.name} barks.`);
//   }
// }

// 8. New Target Operators
// Problem: Use new.target to create an abstract class Shape that cannot be instantiated directly.

// 8. New Target Operators
//  Problem: Use new.target to create an abstract class Shape that cannot be instantiated directly.

// Answer

// class Shape {
//   constructor() {
//     if (new.target === Shape) {
//       throw new Error("Cannot instantiate abstract class Shape directly.");
//     }
//   }

//   // Abstract method
//   area() {
//     throw new Error("Method 'area()' must be implemented.");
//   }
// }

// class Circle extends Shape {
//   constructor(radius) {
//     super();
//     this.radius = radius;
//   }

//   area() {
//     return Math.PI * this.radius * this.radius;
//   }
// }

// class Square extends Shape {
//   constructor(side) {
//     super();
//     this.side = side;
//   }

//   area() {
//     return this.side * this.side;
//   }
// }





// 9. Static Methods
// Problem: Create a class MathUtil with a static method square to calculate the square of a number.

// Answer

// class MathUtil {
//   static square(number) {
//     return number * number;
//   }
// }




