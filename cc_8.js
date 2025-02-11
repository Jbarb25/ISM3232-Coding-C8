//Task 1: Function Declaration
function calculateSalary(baseSalary, bonus, taxRate){   //Write a function that computes the net salary
    netSalary = (baseSalary + bonus) - (baseSalary * taxRate);
    return netSalary;}  //Return the net salary to where it is called after calculating the value 

//Call the function to plug in the values for the parameters and calculate the net salary
console.log(`Net Salary: $${calculateSalary(5000, 500, 0.1).toFixed(2)}`)
console.log(`Net Salary: $${calculateSalary(7000, 1000, 0.15).toFixed(2)}`)


//Task 2: Function Expression
function calculateDiscount(price, discountRate){  //Write a function to calculate the final price
    finalPrice = price - (price * discountRate);
    return finalPrice;} //Return the final price after removing the discount to where it is called

//Call the function to plug in the values for the parameters and calculate the final price
console.log(`Final Price: $${calculateDiscount(100, 0.2).toFixed(2)}`)
console.log(`Final Price: $${calculateDiscount(250, 0.15).toFixed(2)}`)
