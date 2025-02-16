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
    let carEvaluation = {"Economy": 40, "Standard": 60, "Luxury": 100};
    let rentalCost = (carEvaluation[carType]*days);
    if (insurance) rentalCost += (20*days);
    return rentalCost}

//Call the function to plug in the parameters as the function pulls out the correct values to then plug into the calculation for rental cost.
console.log(`Total Rental Cost: $${calculateRentalCost(3, "Economy", true)}`)
console.log(`Total Rental Cost: $${calculateRentalCost(5, "Luxury", false)}`)


//Task 5: Returning Values
function calculateLoanPayment(principal, rate, time) {
    totalPayment = principal + (principal*rate*time);
    return totalPayment}  //calculate the total payment amount and return only the value when called

//Call the function and plug in the parameters to calculate the total payment amount and return the value
console.log(`Total Payment: $${calculateLoanPayment(1000, 0.05, 2).toFixed(2)}`)
console.log(`Total Payment: $${calculateLoanPayment(5000, 0.07, 3).toFixed(2)}`)


//Task 6: Higher-Order Functions
transactions = [200, 1500, 3200, 800, 2500];
function filterLargeTransactions(transactions, filterFunction){
    let filteredTrans = transactions.filter(filterFunction);  
    return filteredTrans}

//The function will filter the transactions by applying the filter that is plugged in when it is called
console.log(`Filtered Transactions [${filterLargeTransactions(transactions, amount => amount > 1000)}]`)


//Task 7: Closures
function createCartTracker(){
    let totalCart = 0;

    return function(itemCost){   // The function createBudgetTracker will keep a running total of the expenses by taking the expenses and adding it to the total each time
        totalCart += itemCost;
        return totalCart;}}

let cart = createCartTracker();  //The function will call the function to keep a total and then when called with a value, will add the expense to the total.
console.log(`Total Cart Value: $${cart(20)}`);
console.log(`Total Cart Value: $${cart(35)}`);


//Task 8: Recursion in JavaScript
function calculateSavings(years, amount){
    if (years >= 10) return amount;  //The function will calculate savings until the number of years reaches 10 which it will stop at
    return calculateSavings(years + 1, (amount + (amount * 0.05)))}  //The function will return the calculated amount of projected savings while also adding a year until it reaches 10 each time

//Call the function to plug in the parameter values and keep track of the total projected saving each time an amount it added
console.log(`Projected Savings: $${calculateSavings(8, 1000).toFixed(2)}`)
console.log(`Projected Savings: $${calculateSavings(5, 5000).toFixed(2)}`)
