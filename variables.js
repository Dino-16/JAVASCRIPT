// Variables - let, const and var;

// Using `let` to declare a block-scoped variable that can be reassigned
let myNum = 1; // Mutable number, can be updated later (e.g., in loops or dynamic logic)

// Using `const` to declare a block-scoped constant that cannot be reassigned
const cantModify = "Hello"; // Immutable string, ideal for fixed values like config or labels

// Using `var` to declare a function-scoped variable (legacy style)
var myChar = 'a'; // Mutable number, but avoid `var` in modern JS due to unpredictable scoping

console.log("\n", myNum);
console.log("\n", cantModify);
console.log("\n", myChar);