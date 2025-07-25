/* ==============================
      First Code
================================*/
console.log("Hello, World! This is the index.ts file.");

/* annotated the let variable with number type
Using a colon followed by the name of variable */
let age: number = 25;

/* =======================================================
            Configuring typescript compiler
==========================================================*/
/* 
* By default type script use ES5 compiler

* command: tsc --init
* 
* tsconfig file:
*   ------------Modules-----------
*   rootDir: "./src" // Create a src folder and move the index.ts file to src
*                    // directory where the typescript files will be available
* 
*   ---------------Emit-------------
*   outDir: "./dist"  //create a dist folder
*                     //directory that specifies where the transpiled javascript files will be available
*   removeComment: true //all comments will be removed from the javascript code
* 
*   noEmitOnError: true // if we have any mistake in typescript code it will not generate any javascript code.
*   "noImplicitReturns": true, //If we implicitly don't return a value from a function, this error will be thrown
*   "noUnusedLocals": true,    /* Enable error reporting when local variables aren't read. 
* 
*   ------------------- Type Checking -------------
*   "noUnusedParameters": true, //Raise an error if any parameter inside a function is not in use
*/

/* ==================================================
                   TypeScript's Fundamentals
======================================================*/

/*
 * JavaScript's built in types are : number, string, boolean, null, undefined, object
 * TypeScript's extended built in types are : any, unknown, never, enum, tuple
 */

let sales: number = 123_3234_32; //In typescript we can separate long number using underscore
let userName: string = "Yamin Hossain";
let is_Available: boolean = true;

/* 
TypeScript Compiler automatically detect the type of a variable based on the initial declaration.
So if we remove number annotation from the sales variable, it will also detect the variable as number automatically
*/

// ======================The any type================
/* 
Any type represent any kind of value which means if a variable type is "any", we can assign any types of value.
By default all variable are in type any if we don't annotate the type 
*/

let demo;

//=================== Arrays ================

let numbers: number[] = [1, 2, 3];
//let numbers = [1, 2, 3]; same thing as all element are same type
let money: number[] = [];
money[0] = 100;
money[1] = 200;

//=================== Tuples ================
/* 
Tuples are fixed length arrays with exactly few elements where each element has a particular type.
Suggestion: It will be good if we use tuples for only 2 elements more than that is unmaintainable.
Good for key-value pair value.
*/

let user: [number, string] = [1, "Yamin"]; // if we add another element it will throw an error

//====================== The enum type ===================
/* 
Enum represents a list of related constants which works as a ****special data type***
*/

//const small = 1
//const medium = 2
//const large = 3
// All of them related to the size of T-shirt

//********Convention********: PascalCase for both enum variable and its members

enum Ages {
  Child,
  Teen,
  Adult,
}
// By default TypeScript compiler assign value of member like this {Child = 0, Teen = 1, Adult = 2}

//*******Explicitly Assign value *********
enum Sizes {
  Small = 1,
  Medium,
  Large,
}
/* It will assign {Small = 1, Medium = 2, Large = 3}, 
That means enum will automatically increase number as member value*/

//********Assigning Strings*********
enum Sections {
  First = "a",
  Second = "b",
  Third = "c",
} //If we assign a character to a member, we have to assign all of them

let mySize: Sizes = Sizes.Medium;

console.log("Size of mine", mySize);
//************ Assigning enum as constant ============
// If we declare enum as constant, TypeScript compiler will transpile more optimized JavaScript code
const enum integerNumbers {
  First = 10,
  Second = 20,
  Third = 30,
}
let myNumber: integerNumbers = integerNumbers.First;
console.log("Number of mine", myNumber);

//=================================Function===================================

//*********** Without returning a value ************
function printMessage(message: string): void {
  console.log("Hello! ", message);
}
printMessage("Yamin");

//*********** With Returning a value************
const addition = (num1: number, num2: number): number => {
  return num1 + num2;
};
console.log(addition(1, 2));

//************return undefined as default return value***************************
function calculateTax(income: number): number {
  if (income < 50_000) return income * 1.2;
  return income * 1.3;
}
/* TypeScript compilation error: Function lacks ending return statement and return type does not include "undefined".
   It means, javascript returns "undefined" as a default function return value and undefined is not a number.
*/

//**************Make a function parameter optional *******************
function calculateTax2(income: number, taxYear?: number): number {
  if (income < 50_000 && taxYear > 2022) return income * 1.2;
  return income * 1.3;
}
//For making a parameter optional we have to use a question mark(?) before declaration of the parameter type.

//********Solving optional parameter's undefined problem in function******** */
// Setting a parameter option means, if there is no value pass to the function as an argument,
// it will set **undefined** value by default
//So, solving this type of problem, we have to use a default value

//****Option 1******
function calculateTax3(income: number, taxYear?: number): number {
  if (income < 50_000 && (taxYear || 2022)) return income * 1.2; // if no value is passed 2022 will be used
  return income * 1.3;
}

//****Option 2******
function calculateTax4(income: number, taxYear = 2022): number {
  // Using a default value, if we use default value the parameter type will be assigned as the default value
  if (income < 50_000 && taxYear) return income * 1.2;
  return income * 1.3;
}

//=================== Objects ================

//----------JavaScript Dynamic Problem--------------
let employee = {
  id: 1,
};
// employee.name = "Tamim";
// In javascript objects are dynamic which means in JavaScript a name property will be added in here but in TypeScript it is not.

//----------Type annotation for an object & assign a property value later--------------
let employeeData: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "", // we can not set the property into "null" or "undefined"
};
employeeData.name = "Yamin";

//----------Optional type to an object property for assigning a property value later--------------
let employeeData2: {
  id: number;
  name?: string;
} = {
  id: 1,
};
employeeData2.name = "Yamin";

//Suggestion: While working with Object with an optional property type, we should carefully select the properties which can be optional.

//----------Making a property read only--------------
let employeeData3: {
  readonly id: number; // Using a read only modifier
  name?: string;
} = {
  id: 1,
};

// employeeData3.id= 2;

//----------Defining a function/ method inside an object--------------

//while working with a method, we have to specify the type of the parameter inside the method and
//also define the return type of the method

let employeeData4: {
  id: number;
  name: string;
  retire: (date: Date) => void; //void is the return type
} = {
  id: 1,
  name: "Ymain",
  retire: (date) => {
    console.log(date);
  },
};
employeeData4.id = 1;

/* ==================================================
                   Advance Types
======================================================*/

// ========================Type Alias=================
//Using a type alias, we can declare a new type. We can use the new type to multiple places
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employeeData5: Employee = {
  //Using the new Employee type
  id: 1,
  name: "",
  retire: (date) => {
    console.log(date);
  },
};

// ========================Union Types=================

//with union types we can give a variable or a function parameter more than one type.
// We can declare union type by | sign

function kgToLbs(weight: number | string): number {
  //narrowing : means deciding an action based on the type
  if (typeof weight === "number") {
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2.2;
  }
}

// ========================Intersection Types=================
//type intersection is declared by using & sign
//In TypeScript, an intersection type allows for the combination of multiple types into a single, new type.
// This new type possesses all the properties and members of each of the constituent types
type Draggable = {
  drag: () => void;
};
type Resizable = {
  resize: () => void;
};
type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

// ========================Literal Types===============
//Limit the values assign to a variable
//Literal means exact or specific. Which means by using literal type we can only specific values.
// const quantity: 50 | 100; // Direct approach: directly assign number as type

type Quantity = 50 | 100;
const quantity: Quantity = 50; // We can only use 50 or 100 as a value of quantity

type Metric = "cm" | "inch";
