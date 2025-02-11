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


//Task 3: Arrow Function
const calculateServiceFee = (amount, serviceType) => {   //Write an arrow function that calculates the service fee based on the parameters
    if (serviceType === "Premium") amount = amount*0.15;
    else if (serviceType === "Standard") amount = amount*0.10;
    else if (serviceType === "Basic") amount = amount*0.05;
    return amount;}  //Return the service fee amount to where it is called after calculating it with the parameter values

//Call the function to plug in the values for the parameters to calculate the service fee
console.log(`Service Fee: $${calculateServiceFee(200, "Premium").toFixed(2)}`)
console.log(`Service Fee: $${calculateServiceFee(500, "Standard").toFixed(2)}`)


//Task 4: Parameters and Arguments
function calculateRentalCost(days, carType, insurance = false) {
    let rentalCost = 0;  
    if (carType === "Economy") rentalCost = (40*days);
    else if (carType === "Standard") rentalCost = (60*days);
    else if (carType === "Luxury") rentalCost = (100*days);
    else;   //The if-else function filters through the parameters and applies the calculation for the rental cost
    if (insurance) rentalCost += (20*days);
    else rentalCost;  //The if-else function will add $20 if there is insurance
    return rentalCost}

//Call the function to plug in the parameters as the if-else statments filter to apply the right calculation
console.log(`Total Rental Cost: $${calculateRentalCost(3, "Economy", true)}`)
console.log(`Total Rental Cost: $${calculateRentalCost(5, "Luxury", false)}`)