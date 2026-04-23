/*

Objective:
In this activity, you will reinforce the skill of creating and using variables
while practicing best practices in variable naming conventions through a hands-on,
interactive coding challenge.

The code snippet below may include:
  - Ambiguous or incorrect variable names.
  - Missing variables that need to be created.
  - Scenarios that require the use of clear and descriptive variable names.

You will:
  - Identify Issues: Review the provided code and identify any variable names that:
  - Are unclear or too vague (e.g., a, b, c).
  - Do not follow best practices (e.g., camelCase, descriptive naming).
  - Refactor the Code: Rename the variables and rewrite the program using descriptive names that clearly convey the variable's purpose.
  - Enhance the Program: Add at least two additional variables to improve the program’s functionality or clarity.

Things to reflect on:
  - Why is it important to use meaningful variable names?
  - What are the common pitfalls to avoid when naming variables?
  - How do clear variable names benefit team collaboration?
  
*/

let customerName = "Alice";
let storeName = "Kroger";

let numberOfItemsPurchased = 5;
let priceBeforeTax = 20;
let priceEachItem = priceBeforeTax / numberOfItemsPurchased;

const taxRate = .0422;
let taxPercent = (taxRate * 100) + "%"; 
let taxes = priceBeforeTax * taxRate;
let totalPrice = priceBeforeTax + taxes;


priceEachItem = "$" + priceEachItem.toFixed(2);
priceBeforeTax = "$" + priceBeforeTax.toFixed(2); 
totalPrice = "$" + totalPrice.toFixed(2); 


let sentence1 = customerName + " purchased " + numberOfItemsPurchased + " items at " + storeName + " for " + priceEachItem + " each, totaling " + priceBeforeTax + " before tax.";
let sentence2 = " At a tax rate of " + taxPercent + ", her final total comes to " + totalPrice + ".";

let customerReceipt = sentence1 + sentence2;

console.log(customerReceipt);

