"use strict";
console.log("Hello, World! This is the index.ts file.");
let age = 25;
let sales = 123323432;
let userName = "Yamin Hossain";
let is_Available = true;
let demo;
let numbers = [1, 2, 3];
let money = [];
money[0] = 100;
money[1] = 200;
let user = [1, "Yamin"];
var Ages;
(function (Ages) {
    Ages[Ages["Child"] = 0] = "Child";
    Ages[Ages["Teen"] = 1] = "Teen";
    Ages[Ages["Adult"] = 2] = "Adult";
})(Ages || (Ages = {}));
var Sizes;
(function (Sizes) {
    Sizes[Sizes["Small"] = 1] = "Small";
    Sizes[Sizes["Medium"] = 2] = "Medium";
    Sizes[Sizes["Large"] = 3] = "Large";
})(Sizes || (Sizes = {}));
var Sections;
(function (Sections) {
    Sections["First"] = "a";
    Sections["Second"] = "b";
    Sections["Third"] = "c";
})(Sections || (Sections = {}));
let mySize = Sizes.Medium;
console.log("Size of mine", mySize);
let myNumber = 10;
console.log("Number of mine", myNumber);
function printMessage(message) {
    console.log("Hello! ", message);
}
printMessage("Yamin");
const addition = (num1, num2) => {
    return num1 + num2;
};
console.log(addition(1, 2));
